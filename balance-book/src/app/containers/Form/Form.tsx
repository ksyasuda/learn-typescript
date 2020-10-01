import React from "react"
import { FunctionExpression, ObjectFlags } from "typescript"

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
	elementType: Function
	elementConfig: ObjectFlags
}

const form: React.FunctionComponent<State> = (props: State) => {
	const { changed, value } = props
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
	return null
}

export default form
