<script lang="ts">
	import Icon from "@iconify/svelte";
	import Skill from "$lib/components/skill/Skill.svelte";
	import type { WorkExperience } from "$lib/constants/experience";

	let { experience, open = false }: { experience: WorkExperience, open?: boolean } = $props();
</script>

<div class="relative pl-8 pb-8">
	<!-- Dot -->
	<div
		class="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-terminal-green bg-terminal-bg transition-colors"
	></div>

	<!-- Toggle button -->
	<button
		onclick={() => (open = !open)}
		class="w-full text-left cursor-pointer hover:brightness-75 transition-all mb-1"
    class:mb-1.5={open}
	>
		<div class="flex items-center justify-between gap-4">
			<span class="font-bold text-lg text-terminal-green"># {experience.company}</span>
			<span class="text-terminal-muted shrink-0">{experience.dateRange}</span>
		</div>
		<div class="flex items-center justify-between gap-4 mt-0.5">
			<span class="text-terminal-amber text-sm">## {experience.role} <span class="text-terminal-muted">/  {experience.location}</span></span>
			<div class="-rotate-180 transition-all" class:rotate-0={open}>
				<Icon icon="famicons:caret-down-outline" class="inline-block" />
			</div>
		</div>
	</button>

	<!-- Body -->
	{#if open}
		<div class="flex flex-col gap-3">
			<ul class="flex flex-col gap-1 text-terminal-muted text-sm leading-relaxed">
				{#each experience.bullets as bullet (bullet)}
					<li class="flex gap-2">
						<span class="text-terminal-amber font-bold shrink-0">-</span>
						<span>{bullet}</span>
					</li>
				{/each}
			</ul>

      <div class="flex flex-wrap gap-2 text-sm">
        {#each experience.tech as { icon, text } (text)}
          <Skill {icon} {text} />
        {/each}
      </div>
		</div>
	{/if}
</div>
