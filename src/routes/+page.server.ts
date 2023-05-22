import { uploadFile } from '$lib/appwrite/storage.server.js';
import { fail } from '@sveltejs/kit';

function blobToFile(blob: Blob, fileName: string): File {
	return new File([blob], fileName, { lastModified: 1534584790000 });
}

export const actions = {
	upload: async ({ request }) => {
		const formData = await request.formData();
		const image = formData.get('image') as Blob;

		try {
			await uploadFile(blobToFile(image, 'image.png'));
		} catch (e) {
			console.error(e);
			return fail(500);
		}
	},
};
