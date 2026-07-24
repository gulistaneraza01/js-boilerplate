import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { protect, authorize } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { registerSchema, loginSchema } from '../validators/user.validator.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.post('/register', validate(registerSchema), asyncHandler(userController.register));
router.post('/login', validate(loginSchema), asyncHandler(userController.login));

router.get('/me', protect, asyncHandler(userController.getMe));

// example of a role-protected route
router.get('/', protect, authorize('admin'), asyncHandler(userController.getAll));

export default router;
