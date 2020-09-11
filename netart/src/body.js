import React , {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import First from "./asserts/1.png";
import second from "./asserts/2.png";
import third from "./asserts/3.png";
import './index.css';
export default class Body extends React.Component{
	render(){
		return(
			<div className="container container1">
				<Header />
				<div className="section-1">
					<div className="row">
					<div className="col-md-4">
						<img src={First} className="body-img1"></img>
					</div>
					<div className="col-md-8">
						<div className="col-md-12 col">
							<p><b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
							<ul>
								<li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
								<li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
							</ul>
						</div>
						<div className="col-md-12">
							<img src={second} className="body-img2"></img>
							<p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="section-2">
					<div className="col-md-12 col-sm-12">
						<p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
					</div>
				</div>
				<div className="section-3">
					<div>
						<img src={third} className="body-img3"></img>
						<p className="text-center mt-3 mb-4">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
					</div>
					<b className="text-danger" ><hr/></b>
				</div>
				<div className="section-4">
					<h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
					<p>CHEMICALS & PROCESS<span></span>POWER <span></span> WATER & WASTE  WATER <span></span> OILS & GAS <span></span> PHARMA<span></span>  SUGARS & DISTILLERIES<span></span>  PAPER & PULP <span></span> MARINE & DEFENCE <span></span> METAL & MINING<span></span>  FOOD & BEVERAGE <span></span> PETROCHEMICAL & REFINERIES <span></span> SOLAR<span></span>  BUILDING<span></span>  HVAC<span></span>  FIRE FIGHTING<span></span>  AGRICULTURE & RESIDENTIAL</p>
					
				</div>
				<Footer />
			</div>
		)
	}
}