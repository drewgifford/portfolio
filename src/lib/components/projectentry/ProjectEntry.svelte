<script lang="ts">
	import type { Project } from "$lib/constants/projects";
  import Window from "../window/Window.svelte";
  import Link from "../link/Link.svelte";
	import Accordion from "../accordion/Accordion.svelte";
	import Skill from "../skill/Skill.svelte";

  const { project }: { project: Project } = $props();

</script>

<Window header={project.header}>
  <div class="leading-relaxed text-terminal-muted flex flex-col gap-1">

    {#if project.link}
      <p class="text-lg text-terminal-green">
        <Link href={project.link}>
          # {project.name}
        </Link>
      </p>
    {:else}
      <p class="text-lg text-terminal-green">
        # {project.name}
      </p>
    {/if}

    {#each project.description as section, i (section.label) }
      <Accordion text={"## " + section.label} open={i === 0}>
        <span class="text-sm">{section.text}</span>
      </Accordion>
    {/each}

    <Accordion text="## what is your tech stack?" open>
      <div class="flex flex-wrap gap-2 text-sm mt-2">
        {#each project.tech as skill (skill.text)}
          <Skill icon={skill.icon} text={skill.text}/>
        {/each}
      </div>
    </Accordion>
  </div>
</Window>