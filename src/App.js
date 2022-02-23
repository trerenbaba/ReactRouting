import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Layout from './components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CheckAuthState } from './store/action/auth.action';
// Outlet c# daki renderbody denk gelir. eğer sayfalar arası geçiş olacak ise bunu koymak zorundayız

function App() {
	const dispatch = useDispatch();

	// Not: State deki bilgi tarayıcıyı kapattığımız anda gider, oturum gibi durumları state üzerinden kontrol ediyorsak. kesinlikle state'imizi uygulamaya ilk girdiğimizde aşağıdaki gibi güncellemeliyiz. Kullanıcı bilgileri çünkü localStorage veya sessionStorage tutulur. State sadece uygulama geliştirme aşamasına değerlere ulaşmak için bir kolaylık sağlar.

	useEffect(() => {
		dispatch(CheckAuthState());
	}, []);

	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
