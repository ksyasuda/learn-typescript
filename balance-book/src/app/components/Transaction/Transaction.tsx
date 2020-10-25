import React from "react"
import classes from "./Transaction.module.css"

type Props = {
    balance: number
    transactionAmount: number
    transactionName: string
    transactionDate: string
    transactionType: string
}

const transaction: React.FunctionComponent<Props> = (props: Props) => {
    let transChar: String, style: object
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
    const {
        transactionName,
        transactionAmount,
        transactionType,
        transactionDate,
        balance,
    } = props
    const afterBalance: Number =
        transactionType === "+"
            ? balance + transactionAmount
            : balance - transactionAmount
    return (
        <div className={classes.Container} style={style}>
            <p className={classes.TName}>
                <span className={classes.TNameText}>{transactionName}</span> on{" "}
                {transactionDate}
            </p>
            <p className={classes.TAmount}>
                ${balance} {transChar} ${transactionAmount} = ${afterBalance}
            </p>
        </div>
    )
}

export default transaction
