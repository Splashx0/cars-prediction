import prisma from '../../prisma/prisma.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { excludeField } from '../utils/excludePassword.js';

export const Register = async (req ,res) => {
    const {name,email,password} = req.body;
    try {
        const existingUser = await prisma.client.findUnique({
            where: {
                email
            },
        });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const newClient = await prisma.client.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });
        const ClientWithoutPassword = excludeField(newClient, ['password', 'createdAt', 'updatedAt'])

        const token = jwt.sign({id:ClientWithoutPassword.id}, 'secret', { expiresIn: '7d' });

        res.status(200).json({ token, user:ClientWithoutPassword });

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong...', error: err.message });
    }


};
export const Login = async (req , res) => {
    const { email, password } = req.body;
    try {
        const client = await prisma.client.findUnique({
            where: {
                email
            },
        })

        if (!client || !(await bcrypt.compare(password, client.password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const userWithoutPassword = excludeField(client, [ 'password', 'createdAt', 'updatedAt'])

        const token = jwt.sign({ id: userWithoutPassword.id }, 'secret', { expiresIn: '3h' });

        res.status(200).json({ token,user:client });

    } catch (err) {

        res.status(500).json({ message: 'Something went wrong...', error: err.message });
    }
};

