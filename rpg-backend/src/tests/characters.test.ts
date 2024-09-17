import request from "supertest";
import { app } from "../index";

describe("Character API", () => {
  let token: string;

  beforeAll(async () => {
    // Obtain token by logging in
    const res = await request(app)
      .post("/api/users/login")
      .send({ email: "test@example.com", password: "password123" });
    token = res.body.token;
  });

  it("should create a new character", async () => {
    const res = await request(app)
      .post("/api/characters")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Hero" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("name", "Hero");
  });
});
