import React, { Component } from "react";
import Menu from "./Menu";
import Moonicon from "./Moonicon";
import "./App.css";

class App extends Component {
	state = {
		hoverMenu: 0,
		display: "none",
		value: true,
		angle: 180,
		color: "black",
		backgroundColor: "white",
		MenuBg: "white",
		arrowAngle: 180,
		filter: "",
		width: 200,
		hidden: "block",
		moonIcon: 1,
		hoverColor: "white",
		sunIcon: 0,
		searchFieldWidth: "",
		marginLeft: 160,
	};

	toggleMenu = (value) => {
		if (this.state.value === value) {
			this.setState({ display: "block", value: false, angle: 0 });
		} else {
			this.setState({ display: "none", value: true, angle: 180 });
		}
	};
	changeWidth = (value) => {
		if (value === this.state.width) {
			this.setState({
				width: 45,
				hidden: "none",
				searchFieldWidth: 32,
				arrowAngle: 0,
				hoverMenu: 1,
				marginLeft: 50,
				hoverColor: "white",
			});
		} else {
			this.setState({
				width: 200,
				hidden: "block",
				searchFieldWidth: 175,
				arrowAngle: 180,
				hoverMenu: 1,
				marginLeft: 160,
				hoverColor: "",
			});
		}
		console.log(this.state.hoverMenu);
	};

	changeColor = (value) => {
		if (value === "black") {
			this.setState({
				color: "white",
				sunIcon: 1,
				moonIcon: 0,
				filter: "invert(100%) sepia(0%) saturate(2%) hue-rotate(146deg) brightness(107%) brightness(101%)",
				backgroundColor: "rgb(29,29,29)",
				MenuBg: "rgb(27,27,27)",
				hoverColor: "",
				hoverMenu: 1,
			});
			console.log(this.state.color);
		} else {
			this.setState({
				color: "black",
				sunIcon: 0,
				moonIcon: 1,
				backgroundColor: "white",
				MenuBg: "white",
				filter: "",
				hoverColor: "white",
				hoverMenu: 1,
			});
			console.log(this.state.color);
		}
	};

	render() {
		return (
			<div
				className="body"
				style={{ backgroundColor: `${this.state.backgroundColor}` }}
			>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>
				<Moonicon
					filter={this.state.filter}
					hoverMenu={this.state.hoverMenu}
					hoverColor={this.state.hoverColor}
				/>

				<Menu
					toggleMenu={this.toggleMenu}
					changeWidth={this.changeWidth}
					display={this.state.display}
					angle={this.state.angle}
					color={this.state.color}
					changeColor={this.changeColor}
					MenuBg={this.state.MenuBg}
					backgroundColor={this.state.backgroundColor}
					arrowAngle={this.state.arrowAngle}
					filter={this.state.filter}
					width={this.state.width}
					hidden={this.state.hidden}
					searchFieldWidth={this.state.searchFieldWidth}
					sunIcon={this.state.sunIcon}
					moonIcon={this.state.moonIcon}
					marginLeft={this.state.marginLeft}
				/>
			</div>
		);
	}
}

export default App;
