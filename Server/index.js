import express from "express";
import cors from 'cors'
import  {studentRoute}  from "./Routes/StudentRoute.js"
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";



const app=express()
app.use(cors(
    {origin:["http://localhost:3003"],
    methods:['GET','POST','PUT'],
    credentials:true

}
))
app.use(express.json())
app.use(cookieParser())
app.use('/auth',studentRoute)
app.use(express.static('Public'))

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
        Jwt.verify(token, "jwt_secret_key", (err ,decoded) => {
            if(err) return res.json({Status: false, Error: "Wrong Token"})
            req.id = decoded.id;
            req.role = decoded.role;
            next()
        })
    } else {
        return res.json({Status: false, Error: "Not autheticated"})
    }
}
app.get('/verify',verifyUser, (req, res)=> {
    return res.json({Status: true, role: req.role, id: req.id})
} )

app.listen(3003,() =>{
    console.log("Server is running")
})
