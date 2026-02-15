<script lang="ts">
	import type { Snippet } from 'svelte';
	import Card from '../card/Card.svelte';

	const {
		header,
		children
	}: {
		header: string;
		children?: Snippet;
	} = $props();
</script>

<Card padding={false}>
	<div class="flex items-center gap-2 border-b border-terminal-border bg-terminal-bg px-4 py-2">
		<span class="ml-2 text-xs text-terminal-muted">{header}</span>
	</div>
	<div class="p-5">
		{@render children?.()}
	</div>
</Card>
