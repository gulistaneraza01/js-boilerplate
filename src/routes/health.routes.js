import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import { checkDatabase } from '../utils/checkDatabase.js';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is healthy' });
});

router.get(
  '/ready',
  asyncHandler(async (req, res) => {
    await checkDatabase();
    res.status(200).json({ success: true, message: 'Database is ready' });
  }),
);

export default router;
