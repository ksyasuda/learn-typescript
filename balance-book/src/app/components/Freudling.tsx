import * as React from "react"

type Props = {
	name: string
	age: number
	isFreud: boolean
}

const Freudling: React.FunctionComponent<Props> = (props: Props) => {
	const { name, age, isFreud } = props
	console.log("[Freudling]", name)
	return (
		<div>
			<p>{name}</p>
			<p>{age}</p>
			<p>{isFreud}</p>
		</div>
	)
}

export default Freudling
