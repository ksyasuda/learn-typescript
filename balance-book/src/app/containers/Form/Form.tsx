import React from "react"
import { FunctionExpression, ObjectFlags } from "typescript"

type elementConfig = {
    name: string
    placeholder: string
    options?: {
        add: { value: string }
        sub: { value: string }
    }
}

// interface Props {
// 	transactionAmount: Function
// 	transactionName: Function
// 	transactionType: Function
// 	transactionDate: Function
// 	elementType: Function
// 	elementConfig: Function
// }

interface State {
    changed: Function
    value: number | string
    elementType: string
    elementConfig?:
    | {
        placehlder: string
        name: string
    }
    | { name: string }
}

class Form extends React.Component<State> {
    state = {
        changed: null,
        value: 0,
        elementType: null,
        elementConfig: {
            placeholder: "",
            name: "",
        },
    }

    handleChange = (event: any) => {
        // console.log(event.target.value)
        event.preventDefault()
        this.setState({ value: event.target.value })
    }

    componentDidMount = () => {
        let { changed, value, elementType, elementConfig } = this.props
        this.setState({
            changed: changed,
            value: value,
            elementType: elementType,
            elementConfig: { ...elementConfig },
        })
    }

    render() {
        switch (this.state.elementType) {
            case "text":
                return (
                    <input
                        id='tname'
                        type={this.state.elementType}
                        value={this.state.value}
                        placeholder={this.state.elementConfig.placeholder}
                        name={this.state.elementConfig.name}
                        onChange={this.handleChange}
                        style={{
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    />
                )
            case "number":
                return (
                    <input
                        id='tamount'
                        type={this.state.elementType}
                        value={this.state.value}
                        placeholder={this.state.elementConfig.placeholder}
                        name={this.state.elementConfig.name}
                        onChange={this.handleChange}
                        style={{
                            marginRight: "10px",
                            marginLeft: "10px",
                        }}
                    />
                )
            case "select":
                return (
                    <label>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "rebeccapurple",
                            }}
                        >
                            Transaction Type
						</span>
                        <select
                            name={this.state.elementConfig.name}
                            id='ttype'
                            style={{
                                margin: "0px 10px",
                            }}
                        >
                            <option label='+' value='+' id='add'>
                                +
							</option>
                            <option label='-' id='add' value='-'>
                                -
							</option>
                        </select>
                    </label>
                )
            case "date":
                return (
                    <label>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "rebeccapurple",
                            }}
                        >
                            Transaction Date
						</span>
                        <input
                            id='tdate'
                            type={this.state.elementType}
                            name={this.state.elementConfig.name}
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={{
                                margin: "0px 10px",
                            }}
                        />
                    </label>
                )
            case "submit":
                return <input type='submit' />
        }
        return null
    }
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

export default Form
