import { uploadFile } from '$lib/appwrite/storage.server.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	upload: async ({ request }) => {
		const formData = await request.formData();
		const image = formData.get('file') as Blob;

		try {
			const res = await uploadFile(image);
			console.log(res);
		} catch (e) {
			console.error(e);
			return fail(500);
		}
	},
};
