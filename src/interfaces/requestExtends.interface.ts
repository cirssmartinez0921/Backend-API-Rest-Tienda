import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExtends extends Request{
    authUser?: JwtPayload | {userUid: string, rol: string, name: string};
}