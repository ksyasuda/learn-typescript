import * as React from "react"
import * as ReactDOM from "react-dom"
import BalanceBook from "./containers/BalanceBook/BalanceBook"

const Hello: React.FunctionComponent<{
	compiler: string
	framework: string
}> = props => {
	// console.log(props.compiler, props.framework)
	return (
		<div>
			{/* <div>{props.compiler}</div>
			<div>{props.framework}</div> */}
			<BalanceBook />
		</div>
	)
}

ReactDOM.render(
	<Hello compiler='TypeScript' framework='React' />,
	document.getElementById("root")
)
