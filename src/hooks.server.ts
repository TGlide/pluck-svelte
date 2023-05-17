import { getAccount } from './lib/appwrite/account.server';

export async function handle({ event, resolve }) {
	event.locals.account = await getAccount({ cookies: event.cookies });

	const response = await resolve(event);
	return response;
}
