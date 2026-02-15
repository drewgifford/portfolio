<script lang="ts">
	import type { Snippet } from 'svelte';
	const { children }: { children?: Snippet } = $props();
</script>

<div class="container mx-auto max-w-4xl px-8">
	{@render children?.()}
</div>
