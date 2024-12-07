import HeaderComponent from './components/HeaderComponent';
import DBFooterComponents from './components/DBFooterComponents';
import Home from './pages/Home';
function App() {
	return (
		<div>
			<HeaderComponent />
			<div>
				<Home />
			</div>
			<DBFooterComponents />
		</div>
	)
}

export default App;