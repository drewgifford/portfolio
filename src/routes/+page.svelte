<script lang="ts">
	import Accordion from "$lib/components/accordion/Accordion.svelte";
import Card from "$lib/components/card/Card.svelte";
	import Command from "$lib/components/command/Command.svelte";
	import HomeHero from "$lib/components/hero/HomeHero.svelte";
	import Link from "$lib/components/link/Link.svelte";
	import ProjectEntry from "$lib/components/projectentry/ProjectEntry.svelte";
	import Skill from "$lib/components/skill/Skill.svelte";
	import TableOfContents from "$lib/components/tableofcontents/TableOfContents.svelte";
	import Window from "$lib/components/window/Window.svelte";
	import WorkEntry from "$lib/components/workentry/WorkEntry.svelte";
	import { experiences } from "$lib/constants/experience";
	import { projects } from "$lib/constants/projects";
	import { getAge } from "$lib/util/age";
	import Icon from "@iconify/svelte";

	const skills = {
		frontend: ['TypeScript', 'Svelte', 'SvelteKit'],
		backend: ['Node.js', 'PostgreSQL'],
		tools: ['Docker', 'Git']
	};
</script>

<nav class="border-b border-terminal-border px-6 py-4">
  <div class="mx-auto flex max-w-4xl items-center justify-between">
    <span class="font-bold text-terminal-green">
      drewgifford.com
    </span>
    <div class="flex gap-6 text-sm text-terminal-muted">
      <a href="#projects" class="transition-colors hover:text-terminal-green">projects</a>
      <a href="#skills" class="transition-colors hover:text-terminal-green">skills</a>
      <a href="#contact" class="transition-colors hover:text-terminal-green">contact</a>
    </div>
  </div>
</nav>

<div class="min-h-screen flex items-start gap-4 container max-w-4xl mx-auto justify-between mt-8">
  <TableOfContents/>
  <main class="min-h-screen flex flex-col gap-12 flex-1">
    <!-- Hero -->
    <section id="hero" class="mx-auto pt-4">
      <Command command="cat README.md"/>
      <HomeHero/>
    </section>
  
    <!-- Experience -->
    <section id="experience" class="mx-auto flex flex-col gap-4 w-full pt-4">
      <Command command="cat experience.log" />

      <div class="relative ml-4">
        <!-- vertical connector line -->
        <div class="absolute left-0 top-3 bottom-3 w-px bg-terminal-border"></div>

        {#each experiences as experience, i (experience.company + "." + experience.dateRange)}
          <WorkEntry {experience} open={i === 0}/>
        {/each}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="mx-auto flex flex-col gap-4 pt-4">
      <p class="mb-4 text-terminal-muted">
        <span class="text-terminal-amber">$</span> ls ./projects
      </p>
      {#each projects as project (project.header)}
        <ProjectEntry {project}/>
      {/each}
    </section>
  
    <!-- Footer -->
    <footer id="contact" class="border-t border-terminal-border px-6 py-8 text-center pt-4">
      <p class="text-sm text-terminal-muted">&hearts; akron &rarr; cincinnati</p>
    </footer>
  </main>
</div>


