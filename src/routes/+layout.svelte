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

<main class="flex min-h-screen flex-col">
	<nav class="flex justify-between border-b border-b-zinc-200 px-4 py-2">
		<a class="text-xl font-bold hover:underline" href="/">Pluck.io</a>
		{#if data.account}
			<a class="link" href="/log-out">Log-out</a>
		{/if}
	</nav>

	<div class="mx-auto flex max-w-5xl grow flex-col py-4">
		<slot />
	</div>
</main>
