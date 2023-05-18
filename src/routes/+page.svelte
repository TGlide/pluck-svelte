<script lang="ts">
	import { Dialog } from 'radix-svelte';

	let open = false;
</script>

<div class="mx-auto mt-4 flex max-w-lg flex-wrap gap-8">
	{#each { length: 20 } as _}
		<button on:click={() => (open = true)} class="w-full">
			<img
				src="http://placekitten.com/g/512/512"
				alt="cute kitten"
				class="w-full rounded-lg object-cover"
			/>
		</button>
	{/each}
</div>

<Dialog.Root modal bind:open>
	<Dialog.Portal>
		<Dialog.Overlay class="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
		<Dialog.Content
			class="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] 
		translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px]
		shadow-lg focus:outline-none"
		>
			<div class="flex items-center justify-between">
				<Dialog.Title class="m-0 text-lg font-medium text-black">Photo</Dialog.Title>
				<Dialog.Close class="text-lg text-amaranth-800" aria-label="Close">X</Dialog.Close>
			</div>

			<img class="mt-4 w-full" src="http://placekitten.com/g/512/512" alt="cute kitten" />
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
