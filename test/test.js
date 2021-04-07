const request = require("supertest");

const app = require("../index");

describe ("GET /", () => {
    it ("respond with Hello Git",(done) => {
        request(app).get("/").expect("Hello Git", done);
    })
});