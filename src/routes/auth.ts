import { Router } from 'express';
import { authController } from '../controllers/auth';

const router = Router();

// http://localhost:4001/api/auth/login [POST]
router.post('/login', authController.login);

// http://localhost:4001/api/auth/register [POST]
router.post('/register', authController.register);

export default router;
