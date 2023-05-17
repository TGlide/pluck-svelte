<script>
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

	export let data;
</script>

<svelte:head>
	<title>Pluck.io</title>
</svelte:head>

<main class="flex h-screen flex-col overflow-hidden">
	<nav class="flex justify-between border-b border-b-zinc-200 px-4 py-2">
		<a class="text-xl font-bold hover:underline" href="/">Pluck.io</a>
		{#if data.account}
			<a class="link" href="/log-out">Log-out</a>
		{/if}
	</nav>

	{#if data.account}
		<div class="flex grow overflow-hidden">
			<aside class="hidden max-w-[12rem] grow lg:block">
				<ul class="flex h-full flex-col gap-2 border-r border-r-zinc-200 px-4 py-4">
					<li>Home</li>
					<li>Your photos</li>
				</ul>
			</aside>
			<div class="grow overflow-y-auto px-4 py-4">
				<div class="mx-auto w-full max-w-7xl ">
					<slot />
				</div>
			</div>
		</div>
	{:else}
		<div class="mx-auto flex max-w-5xl grow flex-col py-4">
			<slot />
		</div>
	{/if}
</main>
