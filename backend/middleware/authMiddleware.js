import jwt from "jsonwebtoken";

export function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.json({ success: false, message: "No token" });
    }
    try{
        const decoded=jwt.verify(token,process.env.Jwt_Secret);
        req.user=decoded.id;
        next();
    }catch(error){
        res.json({
            message:"invalid token"
        })
    }
};
