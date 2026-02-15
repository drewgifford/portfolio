<script lang="ts">
	import Command from "$lib/components/command/Command.svelte";
	import SiteContainer from "$lib/components/container/SiteContainer.svelte";
	import HomeHero from "$lib/components/hero/HomeHero.svelte";
	import ProjectEntry from "$lib/components/projectentry/ProjectEntry.svelte";
	import TableOfContents from "$lib/components/tableofcontents/TableOfContents.svelte";
	import Window from "$lib/components/window/Window.svelte";
	import WorkEntry from "$lib/components/workentry/WorkEntry.svelte";
	import { education } from "$lib/constants/education";
	import { experiences } from "$lib/constants/experience";
	import { projects } from "$lib/constants/projects";
</script>

<SiteContainer>
  <div class="min-h-screen flex items-start gap-4 justify-between mt-8">
    <TableOfContents/>
    <main class="min-h-screen flex flex-col gap-12 flex-1">
      <!-- Hero -->
      <section id="hero" class="mx-auto pt-4">
        <Command command="cat README.md"/>
        <HomeHero/>
      </section>

      <!-- Education -->
      <section id="education" class="mx-auto flex flex-col gap-4 w-full pt-4">
        <Command command="cat education.log" />

        <Window header="education.md">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-lg font-bold text-terminal-green"># {education.school}</p>
              <p class="text-terminal-amber mt-0.5">## {education.degree}</p>
            </div>
            <span class="text-terminal-muted shrink-0 text-sm">{education.years}</span>
          </div>
        </Window>
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
    </main>
  </div>
</SiteContainer>
