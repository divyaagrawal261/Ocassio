import {Router} from 'express';
import validateToken from '../middlewares/tokenHandler.js';
import { currentUser, createUser, loginUser } from '../controllers/userControllers.js';

const UserRouter = Router();

UserRouter.post("/register",createUser)
          .post("/login",loginUser)
          .get("/current",validateToken,currentUser)

export default UserRouter;