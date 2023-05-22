<script>
	import Dropzone from '$lib/components/dropzone.svelte';
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

	import { LogOut, User, Search, Upload, X } from 'lucide-svelte';
	import { Dialog } from 'radix-svelte';

	export let data;
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
				<Dialog.Root modal open>
					<Dialog.Trigger class="icon-btn">
						<Upload />
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay
							class="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow"
						/>
						<Dialog.Content
							class="w-[400px] rounded-2xl bg-white px-6 py-6 shadow-lg
						fixed-center focus:outline-none data-[state=open]:animate-contentShow"
						>
							<form
								class="flex flex-col"
								method="POST"
								action="?/upload"
								enctype="multipart/form-data"
							>
								<div class="flex items-center justify-between">
									<Dialog.Title class="m-0 text-2xl font-bold text-black">Upload</Dialog.Title>
									<Dialog.Close
										class="rounded-full p-1 text-lg text-amaranth-800 outline-none hocus:bg-amaranth-100"
										aria-label="Close"
									>
										<X class="h-5 w-5" />
									</Dialog.Close>
								</div>

								<Dropzone class="mt-4" name="image" />

								<button class="btn mt-4 self-end" type="submit">Upload</button>
							</form>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
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
