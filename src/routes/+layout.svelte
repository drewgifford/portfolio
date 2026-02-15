<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteContainer from '$lib/components/container/SiteContainer.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/link/Link.svelte';
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import type { NavHref } from '$lib/type/string';

	let { children } = $props();

	const navLinks: { href: NavHref; label: string }[] = [
		{ href: '/', label: 'resume' },
		{ href: '/cats', label: 'my cats' }
	];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="border-b border-terminal-border px-6 py-4">
	<div class="mx-auto flex max-w-4xl items-center justify-between">
		<a href={resolve('/')} class="font-bold text-terminal-green transition-all hover:brightness-75">
			drewgifford.com
		</a>
		<div class="flex gap-6 text-sm text-terminal-muted">
			{#each navLinks as link (link.href)}
				{@const isActive = $page.url.pathname === link.href}
				<a
					href={resolve(link.href)}
					class="flex items-center gap-1 transition-colors {isActive
						? 'text-terminal-amber'
						: 'hover:brightness-75'}"
				>
					<span class="w-2 shrink-0">
						{isActive ? '>' : ''}
					</span>
					<span>{link.label}</span>
				</a>
			{/each}

			<div class="hidden md:block">
				<Link href="https://github.com/drewgifford">
					<div class="flex items-center gap-1">
						<Icon icon="simple-icons:github" />
						<span>github</span>
					</div>
				</Link>
			</div>
		</div>
	</div>
</nav>

{@render children()}

<SiteContainer>
	<footer class="mt-8 border-t border-terminal-border px-6 py-8 pt-4 text-center">
		<p class="text-sm text-terminal-muted">&hearts; akron &rarr; cincinnati</p>
	</footer>
</SiteContainer>
