"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowCrossOrigin = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'PORT');
    // preflight
    if (req.method === 'OPTIONS') {
        res.send(204);
    }
    else {
        next();
    }
};
exports.default = allowCrossOrigin;
