import React, { ChangeEvent, Component, FormHTMLAttributes } from "react"
import Transaction from "../../components/Transaction/Transaction"
import Form from "../Form/Form"
import classes from "./BalanceBook.module.css"
import transaction from "../../components/Transaction/Transaction"

type ElementConfig = {
	elementType: string
	elementConfig: {
		placeholder: string
		name: string
	}
}

type ElementSelect = {
	elementType: string
	elementConfig: {
		placeholder: string
		name: string
		options: Array<Object>
	}
}
interface State {
	initialBalance: number
	currentBalance: number
	transactionAmount: number
	transactionName: string
	transactionType: string
	transactionDate: string
	formData: any
	form: JSX.Element[]
}

export default class BalanceBook extends Component<{}, State> {
	state: State = {
		initialBalance: 7442.38,
		currentBalance: 7442.38,
		transactionAmount: 0,
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
	}

	onSubmitHandler = () => {
		console.log("submit!")
		let name = document.getElementById("tname")
		console.log("tname", name.getAttribute("value"))
		let tempname = this.state.transactionName
		tempname = ""
		this.setState({ transactionName: tempname })
	}

	componentDidMount = () => {
		let formarr: Array<JSX.Element> = []
		let form = (
			<form
				name='Transaction Form'
				id='form'
				onSubmit={this.onSubmitHandler}
			>
				{this.state.formData.map(elt => {
					if (elt.elementType === "submit") {
						let formm = (
							<Form
								key={elt.elementType}
								value={this.state.transactionName}
								changed={this.onSubmitHandler}
								elementType={elt.elementType}
								elementConfig={elt.elementConfig}
							/>
						)
						formarr.push(formm)
						return formm
					}
					let formm = (
						<Form
							key={elt.elementType}
							value={this.state.transactionName}
							changed={event => this.handleChange(event)}
							elementType={elt.elementType}
							elementConfig={elt.elementConfig}
						/>
					)
					formarr.push(formm)
					return formm
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
				})}
			</form>
		)
		this.setState({ form: formarr })
		return form
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log('event', event.target);
		// console.log(event.target.name)
		// console.log(event.target.value)
		switch (event.target.name) {
			case "tname":
				console.log("trans name")
				this.setState({ transactionName: event.target.value })
				console.log(this.state.transactionName)
				break
			case "tamount":
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
				{this.state.form}
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
