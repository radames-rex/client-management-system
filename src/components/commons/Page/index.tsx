import React, { Component } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PowerOff from "@material-ui/icons/PowerSettingsNew";

import "./styles.scss";

export default class Page extends Component {
	handleClose = () => {
		window.close();
	};

	render() {
		const { children } = this.props;
		return (
			<div className="page">
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className="pageMenuButton"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className="pageTitle">
							Client Management System
						</Typography>
						<Button color="inherit" onClick={this.handleClose}>
							<PowerOff />
						</Button>
					</Toolbar>
				</AppBar>
				<div className="pageContent">{children}</div>
			</div>
		);
	}
}
