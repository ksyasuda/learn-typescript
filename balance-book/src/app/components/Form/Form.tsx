import React from "react"
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

interface Props {
	changed: Function
	value: number | string
	type: string
	placeholder?: string
	name: string
}

const form: React.FunctionComponent<Props> = (props: Props) => {
	const { changed, value, type, placeholder, name } = props
	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			name={name}
			onChange={event => changed(event)}
		/>
	)
}

export default form
