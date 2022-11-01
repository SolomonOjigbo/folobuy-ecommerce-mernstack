import React from "react";
import Categories from "../../components/Categories";
import Infobar from "../../components/Infobar/Infobar";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";

const Home = () => {
	return (
		<div>
			<Infobar />
			<Navbar />
			<Slider />
			<Categories />
		</div>
	);
};

export default Home;
