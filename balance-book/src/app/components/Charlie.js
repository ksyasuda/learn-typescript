"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Charlie = props => {
    const { name, age, isFreud, isACharlie } = props;
    console.log(name, age, isFreud, isACharlie);
    return (react_1.default.createElement("div", { style: {
            textAlign: "center",
            color: "dodgerblue",
            fontWeight: "bold",
            fontSize: "larger",
        } },
        react_1.default.createElement("h1", null, name),
        react_1.default.createElement("p", null, age),
        isFreud ? react_1.default.createElement("p", null,
            name,
            " is Freud") : react_1.default.createElement("p", null,
            name,
            " is not Freud"),
        react_1.default.createElement("p", null, isACharlie)));
};
exports.default = Charlie;
//# sourceMappingURL=Charlie.js.map