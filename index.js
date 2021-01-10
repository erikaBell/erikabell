import React from 'react'
import { readRemoteFile } from 'react-papaparse'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import ErikaApp from './ErikaApp'

ReactDOM.render(
	<Router>
		<ErikaApp />
	</Router>,
	document.getElementById("root")
)

readRemoteFile(
  url,
  {
    complete: (results) => {
      console.log('Results:', results)
    }
  }
)

