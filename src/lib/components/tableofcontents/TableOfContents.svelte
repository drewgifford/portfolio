<script lang="ts">
  import { onMount } from "svelte";
  import { SvelteMap } from "svelte/reactivity";
	import Window from "../window/Window.svelte";

  type Section = { id: string; label: string };

  const sections: Section[] = [
    { id: "hero",     label: "about"  },
    { id: "experience", label: "experience"},
    { id: "projects", label: "projects"  },
    { id: "contact",  label: "contact" },
  ];

  let activeId = $state<string>("hero");

  onMount(() => {
    const observers: IntersectionObserver[] = [];
    const intersecting = new SvelteMap<string, boolean>();

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            intersecting.set(section.id, entry.isIntersecting);
          }
          const active = sections.find((s) => intersecting.get(s.id));
          if (active) activeId = active.id;
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => { for (const obs of observers) obs.disconnect(); };
  });
</script>

<aside class="hidden lg:flex sticky top-8 self-start flex-col w-48 shrink-0 mt-4">

  <Window header="nav.md">

    <div class="flex flex-col gap-1">
      {#each sections as section (section.id)}
        <a
          href="#{section.id}"
          class="flex items-center gap-1.5 text-sm rounded transition-colors
            {activeId === section.id ? 'text-terminal-amber' : 'text-terminal-muted hover:text-terminal-green'}"
        >
          <span class="w-3 shrink-0 text-terminal-amber">
            {activeId === section.id ? ">" : ""}
          </span>
          <span>{section.label}</span>
        </a>
      {/each}
    </div>
  
  </Window>
</aside>
