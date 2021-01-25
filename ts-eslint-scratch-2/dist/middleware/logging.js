"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggingHandler = (option) => {
    console.log(`setting: ${option}`);
    return (req, res, next) => {
        console.log(res.header);
        next();
    };
};
exports.default = loggingHandler;
