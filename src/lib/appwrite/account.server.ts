import type { Cookies } from '@sveltejs/kit';
import { Account } from 'appwrite';
import { client } from './client.server';
import { PROJECT_ID } from './constants.server';

export const account = new Account(client);

type GetAccountArgs = {
	cookies: Cookies;
};

function setSession(hash: string) {
	const authCookies: Record<string, string> = {};
	authCookies['a_session_' + PROJECT_ID] = hash;
	client.headers['X-Fallback-Cookies'] = JSON.stringify(authCookies);
}

export async function getAccount({ cookies }: GetAccountArgs) {
	const sessionNames = [
		'a_session_' + PROJECT_ID.toLowerCase(),
		'a_session_' + PROJECT_ID.toLowerCase() + '_legacy'
	];

	const hash = cookies.get(sessionNames[0]) ?? cookies.get(sessionNames[1]) ?? '';
	setSession(hash);

	try {
		return await account.get();
	} catch {
		return null;
	}
}

export async function signOut() {
	return await account.deleteSession('current');
}
