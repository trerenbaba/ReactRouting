import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { AuthService } from '../services/auth.service';

function Login() {
	const formRef = useRef();
	const navigate = useNavigate(); // js tarafında yönlendirme işlemi yapar.

	const formSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(formRef.current);

		const param = {
			username: formData.get('username'),
			password: formData.get('password'),
		};

		console.log('param', param);

		AuthService.login(param, (response, error) => {
			if (error) {
				alert(error);
			} else {
				navigate(response);
			}
		});
	};

	return (
		<div>
			<Form ref={formRef} method="get" onSubmit={formSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control
						name="username"
						type="text"
						placeholder="Enter Username"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
}

export default Login;
