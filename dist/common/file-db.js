"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = readJSON;
exports.writeJSON = writeJSON;
const fs_1 = require("fs");
const path_1 = require("path");
function readJSON(path, def) {
    try {
        if (!(0, fs_1.existsSync)(path)) {
            const dir = (0, path_1.dirname)(path);
            if (!(0, fs_1.existsSync)(dir))
                (0, fs_1.mkdirSync)(dir, { recursive: true });
            (0, fs_1.writeFileSync)(path, JSON.stringify(def, null, 2));
            return def;
        }
        return JSON.parse((0, fs_1.readFileSync)(path, 'utf8'));
    }
    catch {
        return def;
    }
}
function writeJSON(path, data) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(data, null, 2));
}
//# sourceMappingURL=file-db.js.map