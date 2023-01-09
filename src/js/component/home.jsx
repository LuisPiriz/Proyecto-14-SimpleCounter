import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (<>
		<div className="bg-dark text-info p-4">
		<h1>Contador: <i class="fa fa-clock"></i> {props.numero6} {props.numero5} {props.numero4} {props.numero3} {props.numero2} {props.numero1}</h1></div>
		{/* <div>
		<input id="input" className="form-control bg-dark text-info w-25" type="number"></input>
		<button id="button" className="btn btn-dark text-info">Inciar cuenta regresiva</button></div> */}
		</>
	);
};

export default Home;
