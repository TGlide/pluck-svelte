<script lang="ts">
	import { AspectRatio, Avatar, Dialog } from 'radix-svelte';
	import { Calendar, X } from 'lucide-svelte';
</script>

<div class="mx-auto mt-4 flex max-w-lg flex-wrap gap-8">
	{#each { length: 20 } as _}
		<div class="w-full">
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
					<span class="text-sm">2 days ago</span>
					<Calendar class="h-5 w-5" />
				</div>
			</div>
			<Dialog.Root modal>
				<Dialog.Trigger class="mt-2 w-full">
					<AspectRatio.Root ratio={1}>
						<img
							src="http://placekitten.com/g/512/512"
							alt="cute kitten"
							class="h-full w-full rounded-xl object-cover"
						/>
					</AspectRatio.Root>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay class="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
					<Dialog.Content
						class="rounded-2xl bg-white px-6 py-6 shadow-lg fixed-center
					focus:outline-none data-[state=open]:animate-contentShow"
					>
						<div class="flex items-center justify-between">
							<Dialog.Title class="m-0 text-2xl font-bold text-black">Photo</Dialog.Title>
							<Dialog.Close
								class="rounded-full hocus:bg-amaranth-100 p-1 text-lg text-amaranth-800 outline-none"
								aria-label="Close"
							>
								<X class="w-5 h-5" />
							</Dialog.Close>
						</div>

						<img class="mt-4 w-full rounded-xl" src="http://placekitten.com/g/512/512" alt="cute kitten" />
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	{/each}
</div>
