import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store";
import { Page } from "./components/commons";
import "./styles.scss";

const App = () => (
	<Provider store={store}>
		<Page>
			<Routes />
		</Page>
	</Provider>
);

export default App;
