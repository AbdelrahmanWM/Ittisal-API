import request from "supertest";
import app from "../../app";
import routes from "../../routes";
import mongoose from "mongoose";

import { IUser } from "../../interfaces/IUser";


beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI||"");
  });
  

afterEach(async () => {
    await mongoose.connection.close();
  });
  
test("Get all users", async () => {
    const response = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200);
  
    expect(Array.isArray(response.body.data)).toBe(true);
    const users: IUser[] = response.body.data;
    users.forEach((user: IUser) => {
      expect(user).toHaveProperty("firstName");
      expect(user).toHaveProperty("lastName");
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("password");
      expect(user).toHaveProperty("role");
    
    });
  });

