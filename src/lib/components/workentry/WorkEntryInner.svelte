<script lang="ts">
	import type { WorkExperience } from '$lib/constants/experience';
	import Icon from '@iconify/svelte';

	let {
		experience,
		canOpen = false,
		open = false
	}: { experience: WorkExperience; open?: boolean; canOpen?: boolean } = $props();
</script>

<div class="items-center justify-between gap-4 md:flex">
	<p class="text-lg font-bold text-terminal-green"># {experience.company}</p>
	<p class="shrink-0 text-terminal-muted">{experience.dateRange}</p>
</div>
<div class="mt-0.5 flex items-center justify-between gap-4">
	<span class="text-sm text-terminal-amber"
		>## {experience.role} <span class="text-terminal-muted">/ {experience.location}</span></span
	>
	{#if canOpen}
		<div class="-rotate-180 transition-all" class:rotate-0={open}>
			<Icon icon="famicons:caret-down-outline" class="inline-block" />
		</div>
	{/if}
</div>
