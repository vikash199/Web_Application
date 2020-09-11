import React , {Component} from "react";
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language'; 	
import './index.css';
export default class Footer extends React.Component{
	render(){
		return(
			<div className="footer">
				<footer>
					<div className="container-fluid p-0">
						<div className="row text-center">
							
							<div className="col-md-4 col-sm-12"><CallIcon className="text-light"/>Toll free 1800 200 1234</div>
							<div className="col-md-4 col-sm-12"><FacebookIcon className="text-light" />www.facebook.com/cripumps</div>
							<div className="col-md-4 col-sm-12"><LanguageIcon className="text-light"  />www.crigroups.com</div>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}