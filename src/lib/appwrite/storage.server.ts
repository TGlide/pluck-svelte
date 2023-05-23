import { BUCKET_ID, ENDPOINT, PROJECT_ID } from '$env/static/private';
import { ID, Storage } from 'appwrite';
import { client } from './client.server';
import fetch from 'node-fetch';
import { FormData, File } from 'formdata-node';

export const storage = new Storage(client);

export const uploadFile = async (blob: Blob) => {
	const path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', BUCKET_ID);
	const uri = new URL(ENDPOINT + path);

	const formData = new FormData();
	const file = new File([await blob.arrayBuffer()], blob.name);
	formData.set('file', file);
	formData.set('fileId', ID.unique());

	return await fetch(uri.toString(), {
		method: 'post',
		headers: {
			...client.headers,
			'x-appwrite-project': PROJECT_ID,
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body: formData as any,
	});
};
