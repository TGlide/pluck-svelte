import { listFiles, storage, uploadFile } from '$lib/appwrite/storage.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
	const files = await listFiles();
	return {
		files,
	};
}

export const actions = {
	upload: async ({ request }) => {
		const formData = await request.formData();
		const image = formData.get('file') as Blob;

		try {
			const res = await uploadFile(image);
			console.log(res);
			console.log(await res.json());
		} catch (e) {
			console.error(e);
			return fail(500);
		}
	},
};
