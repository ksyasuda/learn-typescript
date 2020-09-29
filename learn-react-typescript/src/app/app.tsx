import * as React from "react"
import * as ReactDOM from "react-dom"
import Freudling from "./components/Freudling"
import Charlie from "./components/Charlie"

const Hello: React.FunctionComponent<{
	compiler: string
	framework: string
}> = props => {
	// console.log(props.compiler, props.framework)
	return (
		<div>
			<div>{props.compiler}</div>
			<div>{props.framework}</div>
			<Freudling name='Charles Altman III' age={23} isFreud={false} />
			<Charlie
				name='Charlie Charlie'
				age={24}
				isFreud={false}
				isACharlie={true}
			/>
			<Charlie
				name='Yannick Nandury'
				age={1000}
				isFreud={true}
				isACharlie={false}
			/>
		</div>
	)
}

ReactDOM.render(
	<Hello compiler='TypeScript' framework='React' />,
	document.getElementById("root")
)
