import React from "react"

type Props = {
	name: string
	age: number
	isFreud: boolean
	isACharlie: boolean
}

const Charlie: React.FunctionComponent<Props> = props => {
	const { name, age, isFreud, isACharlie } = props
	console.log(name, age, isFreud, isACharlie)

	return (
		<div
			style={{
				textAlign: "center",
				color: "dodgerblue",
				fontWeight: "bold",
				fontSize: "larger",
			}}
		>
			<h1>{name}</h1>
			<p>{age}</p>
			{isFreud ? <p>{name} is Freud</p> : <p>{name} is not Freud</p>}
			<p>{isACharlie}</p>
		</div>
	)
}

export default Charlie
