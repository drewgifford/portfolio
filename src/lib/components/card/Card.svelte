<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		children,
		padding = false,
		fill = true
	}: {
		children?: Snippet;
		padding?: boolean;
		fill?: boolean;
	} = $props();
</script>

<div
	class="overflow-hidden rounded border border-terminal-border shadow-md"
	class:bg-terminal-surface={fill}
	class:p-5={padding}
>
	{@render children?.()}
</div>
