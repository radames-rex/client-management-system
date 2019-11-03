import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import UserEdit from "./components/UserEdit";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={() => <UserList />} />
			<Route exact path="/add" component={() => <UserAdd />} />
			<Route exact path="/edit/:id" component={() => <UserEdit />} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
