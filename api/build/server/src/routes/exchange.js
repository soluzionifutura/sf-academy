"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exchangeClient_1 = __importDefault(require("../../../grpcClients/exchangeClient"));
const exchange = (req, res, next) => {
    const value = parseFloat(req.query.value);
    const from = req.query.from;
    const to = req.query.to;
    exchangeClient_1.default.Exchange({ value, from, to }, (err, data) => {
        if (err) {
            next(err);
            return;
        }
        res.status(200).send(data);
    });
};
exports.default = exchange;
