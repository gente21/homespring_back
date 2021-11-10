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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleBooks = exports.getFromGoogle = void 0;
const gbooks = require('google-books-search');
function getFromGoogle(query, options) {
    return new Promise(function (resolve, reject) {
        gbooks.search(query, options, function (error, results) {
            setTimeout(function () {
                resolve(results);
            }, 1000);
        });
    });
}
exports.getFromGoogle = getFromGoogle;
function getGoogleBooks(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body.query !== undefined) {
            const options = {
                field: 'title',
                offset: 0,
                limit: 39,
                type: 'books',
                order: 'relevance',
                lang: 'en'
            };
            getFromGoogle(req.body.query, options).then(results => {
                res.status(200).send(results);
                return;
            }).catch(err => {
                res.status(500).send(err);
                return;
            });
        }
        else {
            res.status(400).json({ error: 'Malformed' });
            return;
        }
    });
}
exports.getGoogleBooks = getGoogleBooks;
//# sourceMappingURL=gbooks.js.map