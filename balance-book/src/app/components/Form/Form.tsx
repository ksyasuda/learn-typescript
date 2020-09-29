import React from "react"
import { FunctionExpression } from "typescript"

type elementConfig = {
	name: string
	placeholder: string
}

interface Props {
	transactionAmount: Function
	transactionName: Function
	transactionType: Function
	transactionDate: Function
	elementType: Function
	elementConfig: Function
}

const form: React.FunctionComponent<Props> = props => {
	return (
		<form>
			<input type='text' value='' placeholder='name' />
		</form>
	)
}

export default form
