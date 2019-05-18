import React, { Component } from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

class RightMenu extends Component<any, any> {
	render() {
		return (
			<Menu mode={this.props.mode}>
				<Menu.Item key="mail">
					<Link to={`/login`}>Signin</Link>
				</Menu.Item>
				<Menu.Item key="app">
					<Link to={`/signup`}>Signin</Link>
				</Menu.Item>
			</Menu>
		);
	}
}

export default RightMenu;