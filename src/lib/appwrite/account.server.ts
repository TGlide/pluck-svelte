import { APPWRITE_HOSTNAME, ENDPOINT, PROJECT_ID, SSR_HOSTNAME } from '$env/static/private';
import type { Cookies } from '@sveltejs/kit';
import { Account, ID } from 'appwrite';
import { client } from './client.server';
import * as setCookie from 'set-cookie-parser';

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
		'a_session_' + PROJECT_ID.toLowerCase() + '_legacy',
	];

	const hash = cookies.get(sessionNames[0]) ?? cookies.get(sessionNames[1]) ?? '';
	setSession(hash);

	try {
		return await account.get();
	} catch {
		return null;
	}
}

export async function logOut() {
	return await account.deleteSession('current');
}

type LoginArgs = {
	email: string;
	password: string;
	cookies: Cookies;
};

export async function login({ email, password, cookies }: LoginArgs) {
	const loginRes = await fetch(`${ENDPOINT}/account/sessions/email`, {
		method: 'POST',
		headers: {
			'x-appwrite-project': PROJECT_ID,
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			userId: ID.unique(),
			email,
			password,
		}),
	});

	const json = await loginRes.json();
	if (json.code >= 400) {
		throw new Error(json.message);
	}

	const ssrHostname = SSR_HOSTNAME === 'localhost' ? SSR_HOSTNAME : '.' + SSR_HOSTNAME;
	const appwriteHostname =
		APPWRITE_HOSTNAME === 'localhost' ? APPWRITE_HOSTNAME : '.' + APPWRITE_HOSTNAME;

	const cookiesStr = (loginRes.headers.get('set-cookie') ?? '')
		.split(appwriteHostname)
		.join(ssrHostname);

	const cookiesArray = setCookie.splitCookiesString(cookiesStr);
	const cookiesParsed = cookiesArray.map((cookie) => setCookie.parseString(cookie));

	for (const cookie of cookiesParsed) {
		cookies.set(cookie.name, cookie.value, {
			domain: cookie.domain,
			secure: cookie.secure,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			sameSite: cookie.sameSite as any,
			path: cookie.path,
			maxAge: cookie.maxAge,
			httpOnly: cookie.httpOnly,
			expires: cookie.expires,
		});
	}
}
