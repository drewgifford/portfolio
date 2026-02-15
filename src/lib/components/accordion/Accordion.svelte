<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	let {
		text,
		children,
		open = false
	}: {
		text: string;
		children?: Snippet;
		open?: boolean;
	} = $props();

	function toggle() {
		open = !open;
	}
</script>

<button
	onclick={toggle}
	class="mt-2 flex cursor-pointer gap-2 text-left text-terminal-amber transition-all hover:brightness-75"
	class:-mb-0.5={!open}
>
	<span class="text-sm">
		{text}
	</span>

	<div class:-rotate-180={!open} class:rotate-0={open} class="transition-all">
		<Icon icon="famicons:caret-down-outline" class="inline-block transition-all" />
	</div>
</button>
{#if open}
	<p>
		{@render children?.()}
	</p>
{/if}
