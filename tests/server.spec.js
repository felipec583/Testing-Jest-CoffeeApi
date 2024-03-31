import request from "supertest";
import { createNonExistentId } from "../utils/utils";
import { app } from "../index";
import cafes from "../cafes.json";

describe("Operaciones CRUD de cafes", () => {
  //Get
  describe("GET/ Request", () => {
    test("Server returns 200 code when fetching coffee data", async () => {
      const response = await request(app).get("/cafes").send();

      expect(response.statusCode).toBe(200);
    });

    test("Request returns Array with at leas one object", async () => {
      const { body: cafes } = await request(app).get("/cafes").send();
      const expected = {
        id: expect.any(Number),
        nombre: expect.any(String),
      };
      expect(cafes).toBeInstanceOf(Array);
      expect(cafes.length).toBeGreaterThan(0);
      expect(cafes[0]).toEqual(expect.objectContaining(expected));
    });

    // Post
    describe("POST/ Request", () => {
      test("Server returns 201 status code when adding a new coffee drink", async () => {
        const id = createNonExistentId(cafes);
        const coffeeName = "Latte";
        const { statusCode } = await request(app)
          .post("/cafes")
          .send({ id, coffeeName });
        expect(statusCode).toBe(201);
      });
    });

    //Put
    describe("PUT/ Request", () => {
      test(`Server returns 400 when trying to use a different id
            in query params from the data payload`, async () => {
        const wrongId = createNonExistentId(cafes);
        const { statusCode } = await request(app)
          .put(`/cafes/${wrongId}`)
          .send({ id: 3, nombre: "Orange Iced Latte" });

        expect(statusCode).toBe(400);
      });
    });

    //Delete
    describe("DELETE/ Request", () => {
      test("Server returns 404 when trying to delete a resource with a nonexistent ID", async () => {
        const jwt = "token";
        const nonExistentId = createNonExistentId(cafes);
        const { statusCode } = await request(app)
          .delete(`/cafes/${nonExistentId}`)
          .set("Authorization", jwt)
          .send();
        expect(statusCode).toBe(404);
      });
    });
  });
});
