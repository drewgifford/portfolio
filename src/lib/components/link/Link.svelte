<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { Snippet } from "svelte";

    const { href, children }: { href: string, children?: Snippet } = $props();
</script>

<a class="flex gap-2 items-center underline hover:brightness-75" {href} target="_blank" rel="nofollow">
    <span>{@render children?.()}</span>
    <Icon icon="ph:link-simple-bold"/>
</a>