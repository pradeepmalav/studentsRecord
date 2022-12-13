
import mongoose from "mongoose";

const MONGO_URL = 'mongodb://localhost:27017/elite_sigma_task';

export const dbConnect = async () => {
    mongoose.connect(
      MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
 