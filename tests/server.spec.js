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

    test("Request returns Array", async () => {
      const { body: cafes } = await request(app).get("/cafes").send();

      expect(cafes).toBeInstanceOf(Array);
    });



    // Post
    describe("POST/ Request", () => {
      test("Adding a new coffee drink server returns 201 code", async () => {
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
        console.log(nonExistentId);
        expect(statusCode).toBe(404);
      });
    });
  });
});
