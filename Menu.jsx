import React, { Component } from "react";
import Sun from "./sun.png";
import Moon from "./moon.png";
import Image2 from "./Image2.png";
import Search from "./search.png";

class Menu extends Component {
	render() {
		return (
			<div
				className="Menu-bg"
				style={{
					color: `${this.props.color}`,
					backgroundColor: `${this.props.MenuBg}`,
					width: `${this.props.width}px`,
					transition: "0.2ss ease-in",
				}}
			>
				<img src={Search} alt="search" className="search-icon" />
				<input
					type="search"
					placeholder="search"
					style={{
						width: `${this.props.searchFieldWidth}px`,
						transition: "0.3s ease-in",
					}}
				/>
				<div className="Blue-bg">
					<img
						src={Sun}
						alt="sun"
						style={{
							width: "20px",
							height: "20px",
							marginLeft: "-2px",
							opacity: `${this.props.sunIcon}`,
							cursor: "pointer",
						}}
						onClick={() => this.props.changeColor("black")}
					/>

					<img
						src={Moon}
						alt="sun"
						style={{
							width: "15px",
							height: "15px",
							marginLeft: "-16px",
							opacity: `${this.props.moonIcon}`,
							cursor: "pointer",
						}}
						onClick={() => this.props.changeColor("white")}
					/>
				</div>
				<div
					className="Grey-bg"
					onClick={() => this.props.changeWidth(200)}
					style={{
						marginLeft: `${this.props.marginLeft}px`,
					}}
				>
					<img
						src={Image2}
						alt="icon2"
						className="Grey-bg-image"
						style={{
							transform: `rotate(${this.props.arrowAngle}deg)`,
							filter: `${this.props.filter}`,
						}}
					/>
				</div>

				<ul style={{ display: `${this.props.hidden}` }}>
					<div></div>
					<li onClick={() => this.props.toggleMenu(true)}>
						Dashboard{" "}
					</li>
					<div
						className="menu-item"
						style={{ display: `${this.props.display}` }}
					>
						Item
					</div>
					<li>Content</li>
					<li>Design</li>
					<li>Market & Sell</li>
					<li> Reporting</li>
					<li>Support</li>
				</ul>
				<ul
					style={{
						marginTop: "30px",
						display: `${this.props.hidden}`,
					}}
				>
					<li>Settings</li>
					<li>Notification</li>
					<li>App</li>
				</ul>
				<div
					className="user-details"
					style={{
						color: `${this.props.color}`,
						backgroundColor: `${this.props.backgroundColor}`,
						width: `${this.props.width}px`,
						transition: "0.3s ease-in",
					}}
				>
					<h4 style={{ display: `${this.props.hidden}` }}>
						User Name
					</h4>
					<h4 style={{ display: `${this.props.hidden}` }}>
						Email Address
					</h4>
					<div className="image-display"></div>
				</div>
			</div>
		);
	}
}

export default Menu;
