"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Transaction_module_css_1 = __importDefault(require("./Transaction.module.css"));
const transaction = props => {
    let transChar, style;
    props.transactionType === "+" ? (transChar = "+") : (transChar = "-");
    if (transChar === "+") {
        style = {
            backgroundColor: "green",
        };
    }
    else {
        style = {
            backgroundColor: "red",
        };
    }
    return (react_1.default.createElement("div", { className: Transaction_module_css_1.default.Container, style: style },
        react_1.default.createElement("p", { className: Transaction_module_css_1.default.TName },
            react_1.default.createElement("span", { className: Transaction_module_css_1.default.TNameText }, props.transactionName),
            " ",
            "on ",
            props.transactionDate),
        react_1.default.createElement("p", { className: Transaction_module_css_1.default.TAmount },
            "$",
            props.balance,
            " ",
            transChar,
            " $",
            props.transactionAmount,
            " = $",
            props.balance - props.transactionAmount)));
};
exports.default = transaction;
//# sourceMappingURL=Transaction.js.map