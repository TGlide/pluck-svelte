import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import { ENDPOINT, PROJECT_ID } from '$env/static/private';
import { login } from '$lib/appwrite/account.server.js';
import { ID } from 'appwrite';

const schema = z.object({
	email: z.string().email(),
	name: z.string(),
	password: z.string().min(8),
});

export async function load() {
	const form = await superValidate(schema);
	return { form };
}

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const { email, password, name } = form.data;

		try {
			const createRes = await fetch(`${ENDPOINT}/account`, {
				method: 'POST',
				headers: {
					'x-appwrite-project': PROJECT_ID,
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					userId: ID.unique(),
					email,
					password,
					name,
				}),
			});

			const json = await createRes.json();
			if (json.code >= 400) {
				return message(form, json.message);
			}

			// If sign-up successful, attempt login
			await login({ email, password, cookies });
		} catch (e) {
			return message(form, e);
		}

		return { form };
	},
};
