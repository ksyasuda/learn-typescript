"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Form extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            changed: null,
            value: 0,
            elementType: null,
            elementConfig: {
                placeholder: "",
                name: "",
            },
        };
        this.handleChange = event => {
            console.log(event.target.value);
            this.setState({ value: event.target.value });
        };
        this.componentDidMount = () => {
            let { changed, value, elementType, elementConfig } = this.props;
            this.setState({
                changed: changed,
                value: value,
                elementType: elementType,
                elementConfig: { ...elementConfig },
            });
        };
        // switch (elt.elementType) {
        // 	case "text":
        // 		const name = (
        // 			<Form
        // 				key={elt.elementType}
        // 				value={this.state.transactionName}
        // 				changed={event => this.handleChange(event)}
        // 			/>
        // 		)
        // 		formarr.push(name)
        // 		return name
        // 		break
        // 	case "number":
        // 		const num = (
        // 			<Form
        // 				key={elt.elementType}
        // 				value={this.state.transactionAmount}
        // 				changed={event => this.handleChange(event)}
        // 			/>
        // 		)
        // 		formarr.push(num)
        // 		return num
        // 		break
        // 	case "select":
        // 		const type = (
        // 			<Form
        // 				key={elt.elementType}
        // 				value={this.state.transactionAmount}
        // 				changed={event => this.handleChange(event)}
        // 			/>
        // 		)
        // 		formarr.push(type)
        // 		return type
        // 		break
        // 	case "date":
        // 		const date = (
        // 			<Form
        // 				key={elt.elementType}
        // 				value={this.state.transactionAmount}
        // 				changed={event => this.handleChange(event)}
        // 			/>
        // 		)
        // 		formarr.push(date)
        // 		return date
        // 		break
        // 	default:
        // 		throw new Error(
        // 			"Something went wrong with the names"
        // 		)
        // }
    }
    render() {
        switch (this.state.elementType) {
            case "text":
                return (react_1.default.createElement("input", { id: 'tname', type: this.state.elementType, value: this.state.value, placeholder: this.state.elementConfig.placeholder, name: this.state.elementConfig.name, onChange: this.handleChange, style: {
                        marginRight: "10px",
                        marginLeft: "10px",
                    } }));
            case "number":
                return (react_1.default.createElement("input", { id: 'tamount', type: this.state.elementType, value: this.state.value, placeholder: this.state.elementConfig.placeholder, name: this.state.elementConfig.name, onChange: this.handleChange, style: {
                        marginRight: "10px",
                        marginLeft: "10px",
                    } }));
            case "select":
                return (react_1.default.createElement("label", null,
                    react_1.default.createElement("span", { style: {
                            fontWeight: "bold",
                            color: "rebeccapurple",
                        } }, "Transaction Type"),
                    react_1.default.createElement("select", { name: this.state.elementConfig.name, id: 'ttype', style: {
                            margin: "0px 10px",
                        } },
                        react_1.default.createElement("option", { label: '+', value: '+', id: 'add' }, "+"),
                        react_1.default.createElement("option", { label: '-', id: 'add', value: '-' }, "-"))));
            case "date":
                return (react_1.default.createElement("label", null,
                    react_1.default.createElement("span", { style: {
                            fontWeight: "bold",
                            color: "rebeccapurple",
                        } }, "Transaction Date"),
                    react_1.default.createElement("input", { id: 'tdate', type: this.state.elementType, name: this.state.elementConfig.name, value: this.state.value, onChange: this.handleChange, style: {
                            margin: "0px 10px",
                        } })));
            case "submit":
                return react_1.default.createElement("input", { type: 'submit' });
        }
        return null;
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map