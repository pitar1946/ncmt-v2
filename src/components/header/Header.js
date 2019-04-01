import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import profilephoto from '../../images/avatar.jpg';

class Header extends Component {
		state = {
			isOpen: false
		};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	showMobilemenu = () => {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar');
	}

	render() {
		return (
			<header className="topbar navbarbg" data-navbarbg="skin1">
				<nav className=" top-navbar navbar navbar-expand-md navbar-dark" expand="md">
					<div className="navbar-header" id="logobg" data-logobg="skin6">
						<a to="/scheduler" className="navbar-brand">
							<span className="">
							  NCMT
							</span>
						</a>
						<button className="nav-toggler d-block d-md-none" onClick={this.showMobilemenu}
                                style={{backgroundColor: 'transparent', border: 'none', fontSize: '22px', outline: 'none', cursor: 'pointer'}}>
                            &#9776;
						</button>
					</div>
					<div className="navbarbg collapse navbar-collapse" data-navbarbg="skin1" >
						<ul className="ml-auto float-right nav">
							<img
								src={profilephoto}
								alt="user"
								className="rounded-circle"
								width="31"
								style={{height: '30px'}}/>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
export default Header;