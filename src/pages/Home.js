import TypingTwoLine from "../components/TypingTwoLine";
import '../styles/home.css';
import textLogo from '../assets/images/text_logo.png';
import movingTally from '../assets/images/moving_tally.gif';
import { useState } from "react";

const Home= () => {
	const [logoVisible, setLogoVisible] = useState(false);

	const handleTypingEnd = () => {
		setLogoVisible(true);
	};

	return (
		<div className="home">
			<header className="home__title">
				<div className="home__title--1">지친 현대인을 위한</div>
				<div className="home__title--2">도심속 에너지 충전소</div>
				<div className="home__title--logo">
					<img src={textLogo} alt="coffee station"></img>
				</div>
			</header>
			<div className="home__character">
				<img src={movingTally} alt="tally"></img>
			</div>
		</div>
	)
}

export default Home;