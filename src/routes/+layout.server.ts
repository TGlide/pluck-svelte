import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	if (!locals.account && !['/log-in', '/sign-up'].includes(url.pathname)) {
		throw redirect(307, '/log-in');
	} else if (locals.account && ['/log-in', '/sign-up'].includes(url.pathname)) {
		throw redirect(307, '/');
	}

	return {
		account: locals.account,
	};
}
