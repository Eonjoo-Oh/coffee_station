import TitleComponent from "../components/TitleComponent";
import '../styles/home.css';
import textLogo from '../assets/images/text_logo.png';
import movingTally from '../assets/images/moving_tally.gif';

const Home= () => {
	return (
		<div className="home">
			<div className="home__title">
				<TitleComponent title1="지친 현대인을 위한" title2="도심 속 에너지 충전소" />
				<div className="home__title--logo">
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