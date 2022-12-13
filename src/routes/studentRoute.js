import express from 'express';
import { checkValidStudent } from '../middleware/studentValidation.js';
import { studentdata } from '../controller/studentDataController.js';

export const studentRouter = express.Router();

studentRouter.get('/student/list/:student_id', checkValidStudent, studentdata)