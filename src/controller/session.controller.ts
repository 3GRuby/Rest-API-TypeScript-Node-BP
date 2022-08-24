import { Request, Response, NextFunction } from "express";
import { validatePassword } from "../service/user.service";

export async function createSessionHandler(req: Request, res: Response, next: NextFunction ) {

    // Validate the user's password
    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401).send("Invalid email or password");
    }
    // create a session

    // create an access token

    // create a refresh token

    // return access & refresh token


    
}