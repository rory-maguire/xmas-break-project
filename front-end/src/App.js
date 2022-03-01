import React, { Fragment } from "react";

//components

import InputRecords from "./components/inputRecord";
import ListRecords from "./components/listRecords";

function App() {
	return (
		<Fragment>
			<div className="container">
				<InputRecords />
				<ListRecords />
			</div>
		</Fragment>
	);
}

export default App;
