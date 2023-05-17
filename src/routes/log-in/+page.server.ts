import { login } from '$lib/appwrite/account.server.js';
import { getErrorMsg } from '$lib/helpers/error.js';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email(),
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

		try {
			const { email, password } = form.data;
			await login({ email, password, cookies });
		} catch (e) {
			return message(form, getErrorMsg(e));
		}

		return { form };
	},
};
