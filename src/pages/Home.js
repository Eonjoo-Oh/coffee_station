import TitleComponent from "../components/TitleComponent";
import '../styles/home.css';

const Home= () => {
	return (
		<div className="home">
			<div className="home__title">
				<TitleComponent title1="지친 현대인을 위한" title2="도심 속 에너지 충전소" />
				<div className="home__title--logo">
					<img src="/images/text_logo.png" alt="coffee station"></img>
				</div>
			</div>
			<div className="home__character">
				<img src="/images/moving_tally.gif" alt="tally"></img>
			</div>
		</div>
	)
}

export default Home;