<script lang="ts">
  import { onMount } from "svelte";
  import Window from "../window/Window.svelte";

  const sections = ["about", "education", "experience", "projects", "contact"];

  let activeSection = $state(sections[0]);

  onMount(() => {
    const update = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        activeSection = sections[sections.length - 1];
        return;
      }

      const trigger = window.scrollY + window.innerHeight * 0.15;
      let current = sections.at(0);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }

      if (current) activeSection = current;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  });
</script>

<aside class="hidden lg:flex sticky top-8 self-start flex-col w-48 shrink-0 mt-4">

  <Window header="nav.md">

    <div class="mt-2 flex flex-col gap-1">
      {#each sections as section (section)}
        {@const isActive = activeSection === section}
        <a
          href="#{section}"
          class="flex items-center gap-1.5 text-sm rounded transition-colors
            {isActive ? 'text-terminal-amber' : 'text-terminal-muted hover:brightness-75'}"
        >
          <span class="w-3 shrink-0">
            {isActive ? ">" : ""}
          </span>
          <span>{section}</span>
        </a>
      {/each}
    </div>

  </Window>
</aside>
