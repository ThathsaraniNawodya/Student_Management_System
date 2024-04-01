import express from "express";
import con from '../utils/db.js';
import jwt from "jsonwebtoken"

const router=express.Router()


router.post('/studentlogin',(req,res)=>{
    const sql="SELECT * from student Whare email=? and password=?"
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
          const email = result[0].email;
          const token = jwt.sign(
            { role: "student", email: email, id: result[0].id },
            "jwt_secret_key",
            { expiresIn: "1d" }
          );
          res.cookie('token', token)
          return res.json({ loginStatus: true });
        }
        else {
            return res.json({ loginStatus: false, Error:"wrong email or password" });
        }
    });   
});

router.post('/addstudent', (req, res) => {
    const sql = `INSERT INTO addstudent 
    (id,fname,lname,email,bday, dprogram, intake,course) 
    VALUES (?)`;
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.bday,
        req.body.dprogram, 
        req.body.course
    ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: err})
            return res.json({Status: true ,Result:result})
        })
    })


export {router as studentRoute} 
