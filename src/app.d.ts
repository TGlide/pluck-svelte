// See https://kit.svelte.dev/docs/types#app

import type { getAccount } from './lib/appwrite/account.server';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			account: UnwrapPromise<ReturnType<typeof getAccount>>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
