import dotenv from "dotenv";
dotenv.config();

const { MONGO_PWD } = process.env;

export const DB_URI = `mongodb+srv://gulsahyigit:${MONGO_PWD}@mongocrudlearning.eipoy.mongodb.net/mongo-crud-learning?retryWrites=true&w=majority`;
