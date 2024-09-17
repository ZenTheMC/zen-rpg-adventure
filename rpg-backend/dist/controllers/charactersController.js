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
exports.getCharacters = exports.createCharacter = void 0;
const Character_1 = __importDefault(require("../models/Character"));
const createCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.userId;
    const { name } = req.body;
    try {
        const character = new Character_1.default({ userId, name });
        yield character.save();
        res.status(201).json(character);
    }
    catch (err) {
        res.status(500).send("Server error");
    }
});
exports.createCharacter = createCharacter;
const getCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.userId;
    try {
        const characters = yield Character_1.default.find({ userId });
        res.json(characters);
    }
    catch (err) {
        res.status(500).send("Server error");
    }
});
exports.getCharacters = getCharacters;
//# sourceMappingURL=charactersController.js.map