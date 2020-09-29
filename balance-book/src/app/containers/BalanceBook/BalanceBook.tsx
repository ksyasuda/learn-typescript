import React, { Component } from "react"
import Transaction from "../../components/Transaction/Transaction"
import Form from "../../components/Form/Form"
import classes from "./BalanceBook.module.css"

interface State {
	initialBalance: number
	currentBalance: number
	transactionAmount: string
	transactionName: string
	transactionType: string
	transactionDate: string
	elementType: string
	elementConfig: string
}

export default class BalanceBook extends Component<{}, State> {
	state: State = {
		initialBalance: 7442.38,
		currentBalance: 7442.38,
		transactionAmount: " ",
		transactionName: " ",
		transactionType: " ",
		transactionDate: " ",
		elementType: " ",
		elementConfig: " ",
	}
	render() {
		console.log("initial balance", "$" + this.state.initialBalance)
		return (
			<div>
				<h1 className={classes.title}>Balance Book</h1>
				<p className={classes.CurrentBalance}>
					Current Balance: {this.state.currentBalance}
				</p>
				<Form
					transactionAmount={() => null}
					transactionName={() => null}
					transactionType={() => null}
					transactionDate={() => null}
					elementType={() => null}
					elementConfig={() => null}
				/>
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
