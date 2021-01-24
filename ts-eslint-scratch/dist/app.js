"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3000;
const app = express_1.default();
app.use((req, res, next) => {
    console.log('sample middleware');
    next();
});
app.get('/', (req, res) => {
    console.log(req.headers);
    res.status(200).json({
        sample: 'OK',
    });
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
