import React from 'react'
import Header from "./Header"
import Home from "./Home"
import PastPerformances from "./PastPerformances"

import {Switch, Route} from 'react-router-dom'

function ErikaApp(){
	return (
		<div>
			<Header />

			
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/past-performances">
					<PastPerformances />
				</Route>
			</Switch>
		</div>
	)
}

export default ErikaApp