import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import stripeRoutes from "./stripe.js";
import paymobRoutes from "./paymob.js";

// Load environment variables
dotenv.config();

const app = express();

// Security middleware
app.use(helmet());

// Compression middleware
app.use(compression());

// Rate limiting - adjusted for serverless environment
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging middleware - adjusted for serverless
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGIN ?? "*" 
    : "*",
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message 
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use("/api/stripe", stripeRoutes);
app.use("/api/paymob", paymobRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app for Vercel
export default app;
