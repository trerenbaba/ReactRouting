import { BaseHttpClientService } from './base-service';

export const PostApiClient = {};

PostApiClient.getAllProducts = async (url) => {
	try {
		const response = await BaseHttpClientService.get(url);
		return response;
	} catch (error) {
		console.log('ProductApiClient Error', error);
	}
};

PostApiClient.getProductById = async (url, id) => {
	try {
		const response = await BaseHttpClientService.get(`${url}?productId=${id}`);
		return response;
	} catch (error) {
		console.log('ProductApiClient Error', error);
	}
};

// c# proxy pattern
