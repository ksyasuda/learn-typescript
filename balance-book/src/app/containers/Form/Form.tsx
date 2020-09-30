import React, { Component } from "react"
import { FunctionExpression } from "typescript"

type elementConfig = {
	name: string
	placeholder: string
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
	type: string
	placeholder?: string
	name: string
	options?: Array<Object>
}

class Form extends Component<{}, State> {
	render() {
		return (
			// <input
			// 	type={type}
			// 	value={value}
			// 	placeholder={placeholder}
			// 	name={name}
			// 	onChange={event => changed(event)}
			// />
			<h1>nice</h1>
		)
	}
}

export default Form
