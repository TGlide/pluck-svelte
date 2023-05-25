<script lang="ts">
	import { AspectRatio, Avatar } from 'radix-svelte';
	import { Calendar, Image } from 'lucide-svelte';
	import Modal, { ModalTrigger } from '$lib/components/modal.svelte';
	import { formatDate } from '$lib/helpers/date.js';

	export let data;
	$: sortedImages = [...data.files.files].sort((a, b) => {
		return new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime();
	});
</script>

<div class="mx-auto mt-4 flex max-w-lg flex-wrap gap-8">
	{#each sortedImages as file}
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
					<span class="text-sm">{formatDate(file.$createdAt)}</span>
					<Calendar class="h-5 w-5" />
				</div>
			</div>
			<Modal class="w-[800px] max-w-[95vw]">
				<ModalTrigger slot="trigger" class="mt-2 w-full">
					<AspectRatio.Root ratio={1}>
						<img src={file.src} alt="cute kitten" class="h-full w-full rounded-xl object-cover" />
					</AspectRatio.Root>
				</ModalTrigger>

				<div class="mt-4">
					<AspectRatio.Root ratio={1}>
						<img
							class="block h-full w-full rounded-xl object-cover"
							src={file.src}
							alt="cute kitten"
						/>
					</AspectRatio.Root>
				</div>
			</Modal>
		</div>
	{:else}
		<div class="mt-16 flex flex-col items-center text-zinc-500">
			<Image class="square-16" />
			<p class="mt-4 text-center text-lg font-semibold">No images to show</p>
		</div>
	{/each}
</div>
