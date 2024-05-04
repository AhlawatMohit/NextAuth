import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import bcrypt from 'bcryptjs';

 connectDB()


export async function POST(request) {
   

    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody;

    console.log(reqBody);


    // Check if user already exists
    const user = await User.findOne({email})

    if(user) {
        return Response.json({error: "User already exists"}, {status: 400})
    }


    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
        username,
        email,
        password: hashPassword
    })

    const savedUser = await newUser.save()
    console.log(savedUser);

    return Response.json({
        message: "User created successfully",
        savedUser
    })
    
} catch (error) {
    return Response.json({error: error.message},
         {status: 500})
}
}



// localhost:3000/api/users/signup