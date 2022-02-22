import jwt_decode from 'jwt-decode';

export const TokenService = {};

TokenService.setToken = (accessToken) => {
	localStorage.setItem('access_token', accessToken);
};

TokenService.parseToken = (accessToken) => {
	var decoded = jwt_decode(accessToken);
	return decoded;
};

TokenService.clearToken = () => {
	localStorage.removeItem('access_token');
};

TokenService.getUserName = () => {
	const token = localStorage.getItem('access_token');
	const data = TokenService.parseToken(token);
	return data['username'];
};
