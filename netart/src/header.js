import React , {Component} from "react";
import Headerimg from "./asserts/logo.png"
import './index.css';
export default class Header extends React.Component{
	render(){
		return(
			<div className="container header">
				<img src={Headerimg} className="header-logo"></img>
			</div>
		)
	}
}