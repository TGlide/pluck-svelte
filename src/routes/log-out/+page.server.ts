import { logOut } from '$lib/appwrite/account.server';
import { redirect } from '@sveltejs/kit';

export async function load() {
	await logOut();
	throw redirect(307, '/log-in');
}
