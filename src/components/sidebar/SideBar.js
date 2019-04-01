import React, {Component} from 'react';

class Sidebar extends Component {

	render() {
		return (
			<aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6">
				<div className="scroll-sidebar">
					<div className="sidebar-nav">
						<ul id="sidebarnav">
							<li className='active  sidebar-item'>
								<a  to="/"  className="sidebar-link" activeclassname="active">Schedule</a>
							</li>
						</ul>
					</div>
				</div>
			</aside>
		);
	}
}
export default Sidebar;