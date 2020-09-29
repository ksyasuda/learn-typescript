import React from "react"
import classes from "./Transaction.module.css"

interface Props {
	balance: number
	transactionAmount: number
	transactionName: string
	transactionDate: string
	transactionType: string
}

const transaction: React.FunctionComponent<Props> = props => {
	let transChar, style
	props.transactionType === "+" ? (transChar = "+") : (transChar = "-")
	if (transChar === "+") {
		style = {
			backgroundColor: "green",
		}
	} else {
		style = {
			backgroundColor: "red",
		}
	}
	return (
		<div className={classes.Container} style={style}>
			<p className={classes.TName}>
				<span className={classes.TNameText}>
					{props.transactionName}
				</span>{" "}
				on {props.transactionDate}
			</p>
			<p className={classes.TAmount}>
				${props.balance} {transChar} ${props.transactionAmount} = $
				{props.balance - props.transactionAmount}
			</p>
		</div>
	)
}

export default transaction
