<script lang="ts">
	import { Upload } from 'lucide-svelte';

	export let required = false;
	export let name: string;

	let className: string;
	export { className as class };

	let value: string | null = null;
	let input: HTMLInputElement;

	function setFiles(fileList: FileList) {
		if (!fileList) return;
		input.files = fileList;
		value = fileList[0].name;
	}

	function dropHandler(ev: DragEvent) {
		if (!ev.dataTransfer || !ev.dataTransfer.items) return;
		ev.dataTransfer.dropEffect = 'move';

		for (let i = 0; i < ev.dataTransfer.items.length; i++) {
			if (ev.dataTransfer.items[i].kind !== 'file') continue;

			const file = ev.dataTransfer.items[i].getAsFile();
			if (!file) return;
			const dataTransfer = new DataTransfer();
			dataTransfer.items.add(file);
			setFiles(dataTransfer.files);
		}
	}
</script>

<div class="flex w-full items-center justify-center {className}">
	<label
		class="flex h-64 w-full cursor-pointer flex-col items-center
    justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100
   "
		on:drop|preventDefault={dropHandler}
		on:dragover|preventDefault
	>
		<div class="flex flex-col items-center justify-center pb-6 pt-5 text-gray-500">
			<Upload />
			<p class="mt-2 text-sm">
				{#if value}
					<span class="font-semibold">
						{value}
					</span>
				{:else}
					<span class="font-semibold">Click to upload</span> or drag and drop
				{/if}
			</p>
			<p class="mt-2 text-xs">Images only</p>
		</div>
		<input
			type="file"
			{name}
			class="hidden"
			bind:this={input}
			on:change={() => {
				value = input.files?.[0].name ?? null;
			}}
			{required}
			accept="image/*"
		/>
	</label>
</div>
