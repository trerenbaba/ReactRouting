import React from 'react';
import { useNavigate } from 'react-router';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/auth.service';

function NavBar() {
	const isAuth = AuthService.isAuthenticated();
	const user = AuthService.Name();
	const navigate = useNavigate();

	console.log('isAuth', isAuth);

	const logout = () => {
		AuthService.logout((url) => {
			navigate(url);
		});
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Link className="nav-item nav-link" to="/">
					<Navbar.Brand>Anasayfa</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-item nav-link" to="/">
							Anasayfa
						</Link>
						<Link className="nav-item nav-link" to="/about">
							About
						</Link>

						<NavDropdown title="Api" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<Link className="nav-item nav-link text-dark" to="/users">
									Users
								</Link>
								<Link className="nav-item nav-link text-dark" to="/comments">
									Comments
								</Link>
								<Link className="nav-item nav-link text-dark" to="/posts">
									Posts
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						{isAuth && (
							<>
								<Link className="nav-item nav-link" to="/profile">
									{user}
								</Link>
								<a className="nav-item nav-link" onClick={() => logout()}>
									Oturumu Kapat
								</a>
							</>
						)}
						{!isAuth && (
							<Link className="nav-item nav-link" to="/login">
								Oturum Aç
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
