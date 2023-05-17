import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (!locals.account && url.pathname !== '/login') {
		throw redirect(307, '/login');
	}

	return {
		account: locals.account
	};
}
