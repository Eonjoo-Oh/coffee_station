import { useNavigate } from "react-router-dom";
import '../styles/header.css';
import headerLogo from '../assets/images/header_logo.png';

const HeaderComponent = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src={headerLogo} alt="coffee station logo"></img>
			</div>
			<div className="header__menus">
				<div className="header__menus__menu">
					<button>브랜드 소개</button>
				</div>
				<div className="header__menus__menu">
					<button>메뉴 소개</button>
				</div>
				<div className="header__menus__menu">
					<button>성공 스토리</button>
				</div>
				<div className="header__menus__menu">
					<button>창업 안내</button>
				</div>
			</div>
		</header>
	)
}

export default HeaderComponent;