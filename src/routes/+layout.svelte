<script>
	import { enhance } from '$app/forms';
	import Dropzone from '$lib/components/dropzone.svelte';
	import Modal, { ModalTrigger } from '$lib/components/modal.svelte';
	import '../app.postcss';

	import '@fontsource/inter/100.css';
	import '@fontsource/inter/200.css';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/inter/900.css';

	import { LogOut, Search, Upload, User } from 'lucide-svelte';

	export let data;

	let uploadOpen = false;
</script>

<svelte:head>
	<title>Pluck.io</title>
</svelte:head>

<main class="flex h-screen flex-col overflow-hidden">
	<nav class="flex items-center justify-between border-b border-b-zinc-200 px-4 py-2">
		<a class="text-xl font-bold hover:underline" href="/">Pluck.io</a>
		{#if data.account}
			<input class="input hidden lg:block" type="text" placeholder="search" />
			<div class="flex items-center gap-2">
				<a class="icon-btn lg:hidden" href="/user">
					<Search />
				</a>
				<Modal bind:open={uploadOpen} title="Upload">
					<ModalTrigger slot="trigger" class="icon-btn">
						<Upload />
					</ModalTrigger>
					<form
						class="flex flex-col"
						method="POST"
						action="?/upload"
						enctype="multipart/form-data"
						use:enhance={({ data, cancel }) => {
							/** */
							const file = /** @type {File} */ (data.get('file'));
							const isValid = ['image/png', 'image/jpeg'].includes(file?.type);
							if (!isValid) cancel();

							return async ({ update }) => {
								uploadOpen = false;
								update();
							};
						}}
					>
						<Dropzone class="mt-4" name="file" />

						<button class="btn mt-4 self-end" type="submit">Upload</button>
					</form>
				</Modal>

				<a class="icon-btn" href="/user">
					<User />
				</a>
				<a class="icon-btn" href="/log-out">
					<LogOut />
				</a>
			</div>
		{/if}
	</nav>

	<div class="flex w-full grow flex-col overflow-y-auto px-4">
		<slot />
	</div>
</main>
