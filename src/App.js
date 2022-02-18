import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Layout from './components/Layout';
// Outlet c# daki renderbody denk gelir. eğer sayfalar arası geçiş olacak ise bunu koymak zorundayız

function App() {
	return (
		<div className="App">
			<Layout />

			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}

			{/* <Row className="mx-0">
				<Button as={Col} variant="primary">
					Button #1
				</Button>
				<Button as={Col} variant="secondary" className="mx-2">
					Button #2
				</Button>
				<Button as={Col} variant="success">
					Button #3
				</Button>
			</Row> */}
		</div>
	);
}

export default App;
