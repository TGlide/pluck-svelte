import { BUCKET_ID, ENDPOINT, PROJECT_ID } from '$env/static/private';
import { ID, Storage } from 'appwrite';
import { client } from './client.server';
import fetch from 'node-fetch';
import { FormData, File } from 'formdata-node';

export const storage = new Storage(client);

export const uploadFile = async (blob: Blob) => {
	const path = `/storage/buckets/${BUCKET_ID}/files`;
	const uri = new URL(ENDPOINT + path);

	const formData = new FormData();
	const file = new File([await blob.arrayBuffer()], blob.name);
	formData.set('file', file);
	formData.set('fileId', ID.unique());

	const res = await fetch(uri.toString(), {
		method: 'post',
		headers: {
			...client.headers,
			'x-appwrite-project': PROJECT_ID,
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body: formData as any,
	});

	console.log(res);

	return res;
};

export const listFiles = async () => {
	const files = await storage.listFiles(BUCKET_ID);
	return {
		...files,
		files: files.files.map((file) => ({
			...file,
			src: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`,
		})),
	};
};
