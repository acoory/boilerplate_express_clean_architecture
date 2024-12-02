import {Router, Request, Response} from 'express';
import UserService from '../../domain/services/userService';
import JwtService from "../../domain/services/jwtService";
import {promises} from "node:dns";
import UserModel, {UserModelAttributes} from "../../domain/models/user.model";

const bcrypt = require('bcrypt');

const router: Router = Router();

router.post("/create", async (req: Request, res: Response): Promise<UserModelAttributes | void> => {
    try {
        const {email, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserService.createUser(email, hashedPassword);

        const token = JwtService.sign(user);

        res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'none'});

        res.status(201).json({message: "User created successfully", user: user});
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.post("/login", async (req: Request, res: Response) => {

    try {
        const {email, password} = req.body;

        const user = await UserService.login(email, password);

        const token = JwtService.sign(user);

        res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'none'});

        res.status(200).json({message: "User logged in successfully", user: user});
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
});

export default router;
