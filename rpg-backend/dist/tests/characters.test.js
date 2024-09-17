"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("Character API", () => {
    let token;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Obtain token by logging in
        const res = yield (0, supertest_1.default)(index_1.default)
            .post("/api/users/login")
            .send({ email: "test@example.com", password: "password123" });
        token = res.body.token;
    }));
    it("should create a new character", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default)
            .post("/api/characters")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "Hero" });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("name", "Hero");
    }));
});
//# sourceMappingURL=characters.test.js.map