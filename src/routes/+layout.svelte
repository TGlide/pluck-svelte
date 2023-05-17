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
</script>

<nav class="px-4 py-2 border-b border-b-zinc-200">
	<a class="text-xl font-bold hover:underline" href="/">Pluck.io</a>
</nav>

<div class="max-w-5xl mx-auto mt-4">
	<slot />
</div>
