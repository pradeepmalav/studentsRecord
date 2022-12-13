
import { studentRecords } from "../services/studentService.js";

export const studentdata =  async (req,res)=>{

    const data = await studentRecords(req);    

    if(data){
        res.status(200).json({
            success:true,
            result:data
        })
    }
    else{
        res.status(204).json({
            success:false,
            message:"No Record Found"
        })
    }

} 