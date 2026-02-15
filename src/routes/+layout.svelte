<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteContainer from '$lib/components/container/SiteContainer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="border-b border-terminal-border px-6 py-4">
  <div class="mx-auto flex max-w-4xl items-center justify-between">
    <a href="/" class="font-bold text-terminal-green hover:brightness-75 transition-all">
      drewgifford.com
    </a>
    <div class="flex gap-6 text-sm text-terminal-muted">
      <a href="/" class="transition-colors hover:text-terminal-green">resume</a>
      <a href="/cats" class="transition-colors hover:text-terminal-green">my cats</a>
      <a href="/things-i-like" class="transition-colors hover:text-terminal-green">things i like</a>
    </div>
  </div>
</nav>

{@render children()}

<SiteContainer>
  <footer class="border-t border-terminal-border px-6 py-8 text-center pt-4 mt-8">
    <p class="text-sm text-terminal-muted">&hearts; akron &rarr; cincinnati</p>
  </footer>
</SiteContainer>
