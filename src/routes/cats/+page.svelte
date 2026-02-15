<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Command from '$lib/components/command/Command.svelte';
	import SiteContainer from '$lib/components/container/SiteContainer.svelte';
	import Window from '$lib/components/window/Window.svelte';
	import { getCats } from '$lib/util/cats';
	import { onMount } from 'svelte';

	let selectedImage = $state<string | null>(null);
	const images = getCats();

	onMount(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') selectedImage = null;
		}

		window.addEventListener('keydown', handleKeyDown);
	});
</script>

{#if selectedImage}
	<div
		class="fixed top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-terminal-bg/75"
	>
		<Card>
			<img class="z-10 max-h-[80vh] max-w-[80vw]" src={selectedImage} alt={selectedImage} />
		</Card>
		<p class="mt-2">click outside or esc to close</p>
		<button
			class="absolute top-0 left-0 -z-10 h-full w-full"
			onclick={() => {
				selectedImage = null;
			}}
			title="close"
		>
		</button>
	</div>
{/if}

<SiteContainer>
	<div class="mt-8">
		<Command command="cat ./cats.md" />

		<Window header="cats.md">
			<p>i have two cats</p>
			<p>
				their names are <span class="text-terminal-amber">cooper</span> and
				<span class="text-white">silver</span>
			</p>
			<p>they're pretty cool cats</p>
			<p>some say they're the best cats</p>
			<p>everybody is saying this, actually.</p>
		</Window>

		<div class="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
			{#each images as image (image)}
				<Card>
					<button
						class="h-full w-full cursor-pointer transition-all hover:brightness-75"
						onclick={() => {
							selectedImage = image;
						}}
					>
						<img
							loading="lazy"
							class="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
							alt={image}
							src={image}
						/>
					</button>
				</Card>
			{/each}
		</div>
	</div>
</SiteContainer>
