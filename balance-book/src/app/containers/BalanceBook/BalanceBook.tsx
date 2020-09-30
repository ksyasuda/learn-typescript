import React, { Component, FormHTMLAttributes } from "react"
import Transaction from "../../components/Transaction/Transaction"
import Form from "../../components/Form/Form"
import classes from "./BalanceBook.module.css"

type ElementConfig = {
	elementType: string
	elementConfig: {
		placeholder: string
		name: string
	}
}
interface State {
	initialBalance: number
	currentBalance: number
	transactionAmount: string
	transactionName: string
	transactionType: string
	transactionDate: string
	formData: any
	form: any
}

export default class BalanceBook extends Component<{}, State> {
	state: State = {
		initialBalance: 7442.38,
		currentBalance: 7442.38,
		transactionAmount: "",
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
					options: {
						add: { value: "+" },
						sub: { value: "-", selected: true },
					},
				},
			},
			{
				elementType: "date",
				elementConfig: {
					name: "Transaction Date",
				},
			},
		],
		form: null,
	}

	componentDidMount = () => {
		let form = (
			<form name='Transaction Form'>
				{this.state.formData.map(elt => {
					switch (elt.elementType) {
						case "text":
							break
					}
				})}
			</form>
		)
		this.setState({ form: form })
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log('event', event.target);
		// console.log(event.target.name)
		// console.log(event.target.value)
		switch (event.target.name) {
			case "Transaction Name":
				console.log("trans name")
				this.setState({ transactionName: event.target.value })
				break
			case "Transaction Amount":
				console.log("trans amount")
				break
			case "Transaction Type":
				console.log("trans type")
				break
			case "Transaction Date":
				console.log("trans date")
				break
			default:
				throw new Error("something went wrong")
		}
	}

	render() {
		console.log("initial balance", "$" + this.state.initialBalance)
		return (
			<div>
				<h1 className={classes.title}>Balance Book</h1>
				<p className={classes.CurrentBalance}>
					Current Balance: {this.state.currentBalance}
				</p>
				{/* <Form
					changed={this.handleChange}
					value={this.state.transactionName}
				/> */}
				{/* <Transaction
						balance={this.state.currentBalance}
						transactionAmount={20.5}
						transactionName='Test'
						transactionType='-'
						transactionDate='September 29, 2020'
					/>
					<Transaction
						balance={this.state.currentBalance}
						transactionAmount={20.5}
						transactionName='Test2'
						transactionType='+'
						transactionDate='September 29, 2020'
					/> */}
			</div>
		)
	}
}
