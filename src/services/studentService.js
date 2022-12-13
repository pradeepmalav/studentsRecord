
import { marksModel } from "../model/studentModel.js";

export const studentRecords = async(req,res)=>{

const {student_id} = req.query;
    const result = marksModel.find({student_id:student_id}).populate('student_id')
    return result;
}

