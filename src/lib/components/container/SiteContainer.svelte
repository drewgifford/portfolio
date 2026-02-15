<script lang="ts">
	import type { Snippet } from "svelte";
  const { children }: { children?: Snippet } = $props();
</script>

<div class="container max-w-4xl mx-auto px-8">
  {@render children?.()}  
</div>