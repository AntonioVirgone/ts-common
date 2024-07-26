var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as r from "./ReadFile";
import * as s from "./StringUtils";
import * as w from "./WriteFile";
export function readFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return r.readFile(filePath);
    });
}
export function checkFileExists(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return r.checkFileExists(filePath);
    });
}
export function generateRandomString(length) {
    return s.generateRandomString(length);
}
export function createFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield w.createFile(filePath);
    });
}
export function write(filePath, items) {
    return __awaiter(this, void 0, void 0, function* () {
        yield w.write(filePath, items);
    });
}
