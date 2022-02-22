import { BaseHttpClientService } from './base-service';
import { TokenService } from './token.service';

export const AuthService = {};

AuthService.login = async ({ username, password }, callback) => {
	const param = {
		username,
		password,
		grantType: 'password',
	};

	try {
		let response = await BaseHttpClientService.post(
			'https://localhost:5001/api/tokens',
			param
		);

		TokenService.setToken(response.accessToken);
		callback('/', null);
	} catch (error) {
		callback(null, 'Kullanıcı adı veya parola hatalı');
	}
};

AuthService.logout = (callback) => {
	TokenService.clearToken();
	callback('/login');
};
