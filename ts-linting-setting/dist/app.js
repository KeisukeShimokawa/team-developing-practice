"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_1 = __importDefault(require("./middleware/error"));
const logging_1 = __importDefault(require("./middleware/logging"));
const app = express_1.default();
app.use(logging_1.default('default'));
app.use(error_1.default);
app.listen(3000, () => {
    console.log('listening');
});
