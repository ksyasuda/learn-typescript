import React, { ChangeEvent, Component, FormHTMLAttributes } from "react"
import Transaction from "../../components/Transaction/Transaction"
import Form from "../Form/Form"
import classes from "./BalanceBook.module.css"
import transaction from "../../components/Transaction/Transaction"
import axios from "axios"

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
	transactions: Array<any>
	transactionName: string
	transactionType: string
	transactionDate: string
	formData: any
	form: any
}

export default class BalanceBook extends React.Component<{}, State> {
	state: State = {
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
	}

	onSubmitHandler = async event => {
		event.preventDefault()
		console.log("submit!")
		const target = event.target
		let count = 0
		let tname
		let tamount
		let tdate
		let ttype
		for (let x of target) {
			if (x.type === "select-one") {
				ttype = x.value
			} else if (count == 0) {
				tname = x.value
			} else if (count == 1) {
				tamount = x.value
			} else if (count == 3) {
				tdate = x.value
			}
			++count
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
		}
		console.log("data", data)
		try {
			const res = await axios.post(
				"http://localhost:3005/new-transaction",
				data
			)
			console.log(res)
			let inc: number = 0
			if (ttype === "+") {
				this.setState({
					currentBalance: this.state.currentBalance + tamount,
				})
			} else if (ttype === "-") {
				this.setState({
					currentBalance: this.state.currentBalance - tamount,
				})
			}
			this.setState({
				transactionName: "",
				transactionAmount: 0,
				transactionType: "",
				transactionDate: "",
			})
		} catch (err) {
			console.error("something went wrong", err)
		}
	}

	componentDidMount = () => {
		let formarr: Array<JSX.Element> = []
		let form = (
			<form
				name='Transaction Form'
				id='form'
				className={classes.FormCont}
				onSubmit={event => this.onSubmitHandler(event)}
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
				})}
			</form>
		)
		this.setState({ form: form })
		let diff: number = 0.0
		axios.get("http://localhost:3005/all-transactions").then((res: any) => {
			const { data } = res.data
			const transactions = [...this.state.transactions]
			for (let item of data) {
				console.log(item)
				diff = 0.0
				item.transactionType === "+"
					? (diff += item.transactionAmount)
					: (diff -= item.transactionAmount)
				const {
					transactionName,
					transactionAmount,
					transactionType,
					transactionDate,
				} = item
				const temp = (
					<Transaction
						key={this.state.currentBalance + transactionDate}
						balance={this.state.currentBalance}
						transactionName={transactionName}
						transactionAmount={transactionAmount}
						transactionType={transactionType}
						transactionDate={transactionDate}
					/>
				)
				this.setState(prevState => {
					return {
						currentBalance: prevState.currentBalance + diff,
					}
				})
				transactions.push(temp)
			}
			this.setState({ transactions: transactions })
		})
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log('event', event.target);
		// console.log(event.target.name)
		//console..log(event.target.value)
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
				<div className={classes.AllTransactionsContainer}>
					All Transactions
				</div>
				{this.state.transactions}
			</div>
		)
	}
}
