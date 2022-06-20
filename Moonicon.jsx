import React, { Component } from "react";
import Moon from "./moon.png";

class Moonicon extends Component {
	render() {
		return (
			<div>
				<img
					src={Moon}
					alt="moon"
					className="Moon-icon"
					style={{
						filter: `${this.props.filter}`,
						transition: "0.3s ease-in",
						cursor: "pointer",
					}}
				/>
				<div
					style={{
						opacity: `${this.props.hoverMenu}`,
						position: "relative",
						top: "118px",
						left: "100px",
						zIndex: "0",
						color: `${this.props.hoverColor}}`,
					}}
					className="hover-menu"
				>
					Menu Item
				</div>
			</div>
		);
	}
}
export default Moonicon;
