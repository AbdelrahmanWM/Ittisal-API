import request from "supertest";
import app from "../../app";
import routes from "../../routes";

import { IUser } from "../../interfaces/IUser";


test("Get all users", async () => {
  const response = await request(app)
    .get("/api/users")
    .expect("Content-Type", /json/)
    .expect(200);
  expect(Array.isArray(response.body)).toBe(true);
  response.body.forEach((user: IUser) => {
    expect(user).toHaveProperty("firstName");
    expect(user).toHaveProperty("lastName");
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('password');
    expect(user).toHaveProperty('role');

  });
});

