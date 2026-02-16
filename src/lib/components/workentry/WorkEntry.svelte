<script lang="ts">
	import Icon from '@iconify/svelte';
	import Skill from '$lib/components/skill/Skill.svelte';
	import type { WorkExperience } from '$lib/constants/experience';

	let { experience, open = false }: { experience: WorkExperience; open?: boolean } = $props();
</script>

<div class="relative pb-8 pl-8">
	<!-- Dot -->
	<div
		class="absolute top-2 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-terminal-green bg-terminal-bg transition-colors"
	></div>

	<!-- Toggle button -->
	<button
		onclick={() => (open = !open)}
		class="mb-1 w-full cursor-pointer text-left transition-all hover:brightness-75"
		class:mb-1.5={open}
	>
		<div class="items-center justify-between gap-4 md:flex">
			<p class="text-lg font-bold text-terminal-green"># {experience.company}</p>
			<p class="shrink-0 text-terminal-muted">{experience.dateRange}</p>
		</div>
		<div class="mt-0.5 flex items-center justify-between gap-4">
			<span class="text-sm text-terminal-amber"
				>## {experience.role} <span class="text-terminal-muted">/ {experience.location}</span></span
			>
			<div class="-rotate-180 transition-all" class:rotate-0={open}>
				<Icon icon="famicons:caret-down-outline" class="inline-block" />
			</div>
		</div>
	</button>

	<!-- Body -->

	<div class="flex flex-col gap-3" class:hidden={!open}>
		<ul class="flex flex-col gap-1 text-sm leading-relaxed text-terminal-muted">
			{#each experience.bullets as bullet (bullet)}
				<li class="flex gap-2">
					<span class="shrink-0 font-bold text-terminal-amber">-</span>
					<span>{bullet}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-3 flex flex-wrap gap-2 text-sm">
		{#each experience.tech as { icon, text } (text)}
			<Skill {icon} {text} />
		{/each}
	</div>
</div>
