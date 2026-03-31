<script lang="ts">
	import Skill from '$lib/components/skill/Skill.svelte';
	import type { WorkExperience } from '$lib/constants/experience';
	import WorkEntryInner from './WorkEntryInner.svelte';

	let { experience, open = false }: { experience: WorkExperience; open?: boolean } = $props();

  const canOpen = $derived(!!experience.bullets.length)
</script>

<div class="relative pb-8 pl-8">
	<!-- Dot -->
	<div
		class="absolute top-2 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-terminal-green bg-terminal-bg transition-colors"
	></div>

	<!-- Toggle button -->
   {#if canOpen}
    <button
      onclick={() => (open = !open)}
      class="mb-1 w-full cursor-pointer text-left transition-all hover:brightness-75"
      class:mb-1.5={open}
    >
      <WorkEntryInner {experience} {open} {canOpen}/>
    </button>
  {:else}
    <WorkEntryInner {experience} {open} {canOpen}/>
  {/if}

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
