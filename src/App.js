import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			width: window.innerWidth
		};
  }
  componentDidMount() {
		window.addEventListener("load", this.updateDimensions);
		window.addEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		let element = document.getElementById('main-wrapper');
		this.setState({
			width: window.innerWidth
    });
    if (window.innerWidth < 767 &&
      document.getElementById('main-wrapper').className.indexOf("show-sidebar") !== -1) {
      document.getElementById('main-wrapper').classList.toggle("show-sidebar");
    }
		else if (this.state.width < 1170) {
			element.setAttribute("data-sidebartype", "mini-sidebar");
			element.classList.add("mini-sidebar");
		} else {
			element.setAttribute("data-sidebartype", "full");
			element.classList.remove("mini-sidebar");
		}
	}
	componentWillUnmount() {
		window.removeEventListener("load", this.updateDimensions);
		window.removeEventListener("resize", this.updateDimensions);
	}

  render() {
    return (
      <Fragment>
      <div 
          id="main-wrapper"
			   	data-layout="vertical"
			  	data-sidebartype="full"
			  	data-sidebar-position="fixed"
			  	data-header-position="fixed"
				  data-boxed-layout="full">
         <Header/> 
         <SideBar/>
				 <div className="page-wrapper d-block">
				    <div className="page-content container-fluid">
                <div className="card">Test</div>
						</div>
				 </div>
      </div>
      <Footer/>
      </Fragment>
    );
  }
}

export default App;
