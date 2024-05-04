import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";


connectDB();

export async function POST(request) {
    try {

        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User doesn't exist" }, { status: 400 });
        }
        console.log("User Exits");

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
        }
        console.log(user);

        const tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        
       const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}