import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(token,'secret');
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};
