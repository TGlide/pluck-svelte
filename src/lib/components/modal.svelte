<script lang="ts" context="module">
	export const ModalTrigger = Dialog.Trigger;
</script>

<script lang="ts">
	import { cn } from '$lib/helpers/style';

	import { X } from 'lucide-svelte';
	import { Dialog } from 'radix-svelte';

	export let open = false;
	export let title = 'Modal';
	let classes = '';
	export { classes as class };
</script>

<Dialog.Root modal bind:open>
	<slot name="trigger">
		<Dialog.Trigger class="icon-btn">Open</Dialog.Trigger>
	</slot>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
		<Dialog.Content
			class={cn(
				'w-[400px] rounded-2xl bg-white px-6 py-6 shadow-lg fixed-center focus:outline-none data-[state=open]:animate-contentShow',
				classes
			)}
		>
			<div class="flex items-center justify-between">
				<Dialog.Title class="m-0 text-2xl font-bold text-black">{title}</Dialog.Title>
				<Dialog.Close
					class="rounded-full p-1 text-lg text-amaranth-800 outline-none hocus:bg-amaranth-100"
					aria-label="Close"
				>
					<X class="h-5 w-5" />
				</Dialog.Close>
			</div>

			<slot />
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
