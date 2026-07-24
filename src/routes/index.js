import { Router } from 'express';
import userRoutes from './user.routes.js';

const router = Router();

// Mount all feature routes here. Add new ones as you build new POCs.
router.use('/users', userRoutes);

router.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is healthy' });
});

export default router;
