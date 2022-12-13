import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address:String
})

const marksSchema = new mongoose.Schema({
    student_id:[{ type: mongoose.Schema.Types.ObjectId , ref:"students"}], 
    Math:Number,
    Science:Number,
    English:Number,
    Hindi:Number
})

export const StudentModel = mongoose.model('students',studentSchema);
export const marksModel = mongoose.model('marks',marksSchema);

