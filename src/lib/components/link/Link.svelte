<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const { href, children }: { href: string; children?: Snippet } = $props();
</script>

<a
	class="flex items-center gap-2 underline hover:brightness-75"
	{href}
	target="_blank"
	rel="external nofollow"
>
	<span>{@render children?.()}</span>
	<Icon icon="ph:link-simple-bold" />
</a>
