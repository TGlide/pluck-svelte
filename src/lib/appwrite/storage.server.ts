import { BUCKET_ID } from '$env/static/private';
import { ID, Storage } from 'appwrite';
import { client } from './client.server';

export const storage = new Storage(client);

export const uploadFile = async (file: File) => {
	console.log('uploading file', file);
	// return await storage.createFile(BUCKET_ID, ID.unique(), file);
};
