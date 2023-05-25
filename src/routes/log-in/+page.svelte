<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;
	const { form, errors, constraints, enhance, message } = superForm(data.form);
</script>

<div class="grid grow -translate-y-4 place-items-center">
	<div>
		<h1 class="text-4xl font-bold">Let's Share.</h1>
		<p class="mt-2">Log in and start sharing your moments now.</p>

		<form
			method="POST"
			class="mt-8 flex min-w-[400px] flex-col gap-1 rounded-lg border border-zinc-200 p-6 shadow-sm"
			use:enhance
		>
			<h3 class="text-2xl font-semibold">Log in</h3>

			<label class="required mt-2" for="email">E-mail</label>
			<input
				class="input"
				type="email"
				name="email"
				data-invalid={$errors.email}
				bind:value={$form.email}
				{...$constraints.email}
			/>
			{#if $errors.email}<span class="text-sm text-red-500">{$errors.email}</span>{/if}

			<label class="required mt-2" for="password">Password</label>
			<input
				class="input"
				type="password"
				name="password"
				data-invalid={$errors.password}
				bind:value={$form.password}
				{...$constraints.password}
			/>
			{#if $errors.password}<span class="text-sm text-red-500">{$errors.password}</span>{/if}

			{#if $message}
				<p class="mt-2 text-center text-sm text-red-500">{$message}</p>
			{/if}

			<button class="btn mt-4 self-end" type="submit">Submit</button>
		</form>

		<p class="mx-auto mt-4 block text-center text-zinc-600">
			Don't have an account yet?
			<a href="/sign-up" class="link ">Sign up</a>
		</p>
	</div>
</div>
