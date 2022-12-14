
import { StudentModel } from "../model/studentModel.js";

export const checkValidStudent = async(req,res,next)=>{

    const {student_id} = req.query; 
    
       if(student_id){
        const data = await StudentModel.find({_id:student_id});
        if(!!Object.keys(data).length){
            next();
        }
        else{
            res.status(403).json({
                success:false,
                message:"Not a Valid Student Id"
            })
        }
    
    }  
    else{
        res.status(400).json({
            success:false,
            message:"Student id is required"
        })
    }
      
}