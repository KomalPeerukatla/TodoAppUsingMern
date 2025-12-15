import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { signup,signin } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/signin",signin);

router.get("/home",auth,async(req,res)=>{
    const user=await User.findById(req.user).select("-password");
    res.json({
        success:true
    })
    console.log("i am get request runnung")
});

export default router;


