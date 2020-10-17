"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Transaction_1 = __importDefault(require("../../components/Transaction/Transaction"));
const Form_1 = __importDefault(require("../Form/Form"));
const BalanceBook_module_css_1 = __importDefault(require("./BalanceBook.module.css"));
const axios_1 = __importDefault(require("axios"));
class BalanceBook extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            initialBalance: 7442.38,
            currentBalance: 7442.38,
            transactionAmount: 0,
            transactions: [],
            transactionName: "",
            transactionType: "",
            transactionDate: "",
            formData: [
                {
                    elementType: "text",
                    elementConfig: {
                        placeholder: "Transaction Name",
                        name: "tname",
                    },
                },
                {
                    elementType: "number",
                    elementConfig: {
                        placeholder: "Transaction Amount",
                        name: "tamount",
                    },
                },
                {
                    elementType: "select",
                    elementConfig: {
                        name: "Transaction Type",
                    },
                },
                {
                    elementType: "date",
                    elementConfig: {
                        name: "Transaction Date",
                    },
                },
                {
                    elementType: "submit",
                },
            ],
            form: null,
        };
        this.onSubmitHandler = async (event) => {
            event.preventDefault();
            console.log("submit!");
            const target = event.target;
            let count = 0;
            let tname;
            let tamount;
            let tdate;
            let ttype;
            for (let x of target) {
                if (x.type === "select-one") {
                    ttype = x.value;
                }
                else if (count == 0) {
                    tname = x.value;
                }
                else if (count == 1) {
                    tamount = x.value;
                }
                else if (count == 3) {
                    tdate = x.value;
                }
                ++count;
            }
            const data = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    transactionName: tname,
                    transactionAmount: tamount,
                    transactionType: ttype,
                    transactionDate: tdate,
                },
            };
            console.log("data", data);
            try {
                const res = await axios_1.default.post("http://localhost:3005/new-transaction", data);
                console.log(res);
                let inc = 0;
                if (ttype === "+") {
                    this.setState({
                        currentBalance: this.state.currentBalance + tamount,
                    });
                }
                else if (ttype === "-") {
                    this.setState({
                        currentBalance: this.state.currentBalance - tamount,
                    });
                }
                this.setState({
                    transactionName: "",
                    transactionAmount: 0,
                    transactionType: "",
                    transactionDate: "",
                });
            }
            catch (err) {
                console.error("something went wrong", err);
            }
        };
        this.componentDidMount = () => {
            let formarr = [];
            let form = (react_1.default.createElement("form", { name: 'Transaction Form', id: 'form', className: BalanceBook_module_css_1.default.FormCont, onSubmit: event => this.onSubmitHandler(event) }, this.state.formData.map(elt => {
                if (elt.elementType === "submit") {
                    let formm = (react_1.default.createElement(Form_1.default, { key: elt.elementType, value: this.state.transactionName, changed: this.onSubmitHandler, elementType: elt.elementType, elementConfig: elt.elementConfig }));
                    formarr.push(formm);
                    return formm;
                }
                let formm = (react_1.default.createElement(Form_1.default, { key: elt.elementType, value: this.state.transactionName, changed: event => this.handleChange(event), elementType: elt.elementType, elementConfig: elt.elementConfig }));
                formarr.push(formm);
                return formm;
            })));
            this.setState({ form: form });
            let diff = 0.0;
            axios_1.default.get("http://localhost:3005/all-transactions").then((res) => {
                const { data } = res.data;
                const transactions = [...this.state.transactions];
                for (let item of data) {
                    console.log(item);
                    diff = 0.0;
                    item.transactionType === "+"
                        ? (diff += item.transactionAmount)
                        : (diff -= item.transactionAmount);
                    const { transactionName, transactionAmount, transactionType, transactionDate, } = item;
                    const temp = (react_1.default.createElement(Transaction_1.default, { balance: this.state.currentBalance, transactionName: transactionName, transactionAmount: transactionAmount, transactionType: transactionType, transactionDate: transactionDate }));
                    this.setState(prevState => {
                        return {
                            currentBalance: prevState.currentBalance + diff,
                        };
                    });
                    transactions.push(temp);
                }
                this.setState({ transactions: transactions });
            });
        };
        this.handleChange = (event) => {
            // console.log('event', event.target);
            // console.log(event.target.name)
            //console..log(event.target.value)
            switch (event.target.name) {
                case "tname":
                    console.log("trans name");
                    this.setState({ transactionName: event.target.value });
                    console.log(this.state.transactionName);
                    break;
                case "tamount":
                    console.log("trans amount");
                    break;
                case "Transaction Type":
                    console.log("trans type");
                    break;
                case "Transaction Date":
                    console.log("trans date");
                    break;
                default:
                    throw new Error("something went wrong");
            }
        };
    }
    render() {
        console.log("initial balance", "$" + this.state.initialBalance);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", { className: BalanceBook_module_css_1.default.title }, "Balance Book"),
            react_1.default.createElement("p", { className: BalanceBook_module_css_1.default.CurrentBalance },
                "Current Balance: ",
                this.state.currentBalance),
            this.state.form,
            react_1.default.createElement("div", { className: BalanceBook_module_css_1.default.AllTransactionsContainer },
                react_1.default.createElement("span", { className: BalanceBook_module_css_1.default.AllTransTitle }, "All Transactions")),
            this.state.transactions));
    }
}
exports.default = BalanceBook;
//# sourceMappingURL=BalanceBook.js.map