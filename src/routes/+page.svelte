<script lang="ts">
	import { Avatar, Dialog } from 'radix-svelte';
	import { Calendar } from 'lucide-svelte';

	let open = false;
</script>

<div class="mx-auto mt-4 flex max-w-lg flex-wrap gap-8">
	{#each { length: 20 } as _}
		<div>
			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<Avatar.Root
						class="h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full"
					>
						<Avatar.Image
							class="h-full w-full rounded-[inherit] object-cover"
							src="https://avatars.githubusercontent.com/u/26071571"
							alt="Thomas G. Lopes Avatar"
						/>
						<Avatar.Fallback
							class="text-md flex h-full w-full items-center justify-center bg-amaranth-300 font-medium text-white"
						>
							TL
						</Avatar.Fallback>
					</Avatar.Root>
					<span class="ml-2 font-semibold text-amaranth-600">Thomas G. Lopes</span>
				</div>
				<div class="flex items-center gap-2 text-zinc-400">
					<span class="text-sm ">2 days ago</span>
					<Calendar class="h-5 w-5" />
				</div>
			</div>
			<button on:click={() => (open = true)} class="mt-2 w-full">
				<img
					src="http://placekitten.com/g/512/512"
					alt="cute kitten"
					class="w-full rounded-lg object-cover"
				/>
			</button>
		</div>
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
