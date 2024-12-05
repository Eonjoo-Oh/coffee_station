import TypingTwoLineHeader from "../components/TypingTwoLineHeader";
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
			<div className="home__title">
				<TypingTwoLineHeader firstTitle="지친 현대인을 위한" secondTitle="도심 속 에너지 충전소" onTypingEnd={handleTypingEnd} />
				<div className={`home__title--logo ${logoVisible ? "show" : ""}`}>
					<img src={textLogo} alt="coffee station"></img>
				</div>
			</div>
			<div className="home__character">
				<img src={movingTally} alt="tally"></img>
			</div>
		</div>
	)
}

export default Home;