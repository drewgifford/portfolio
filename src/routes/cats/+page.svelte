<script lang="ts">
	import Card from "$lib/components/card/Card.svelte";
	import Command from "$lib/components/command/Command.svelte";
	import SiteContainer from "$lib/components/container/SiteContainer.svelte";
	import Window from "$lib/components/window/Window.svelte";
	import { getCats } from "$lib/util/cats";
	import { onMount } from "svelte";
	
  let selectedImage = $state<string | null>(null);
  const images = getCats();

  onMount(() => {

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') selectedImage = null;
    }

    window.addEventListener('keydown', handleKeyDown);
  })

</script>

{#if selectedImage}
<div class="z-10 fixed top-0 left-0 bg-terminal-bg/75 w-full h-full flex flex-col items-center justify-center">
  <Card>
    <img class="z-10 max-w-[80vw] max-h-[80vh]" src={selectedImage} alt={selectedImage}/>
  </Card>
  <p class="mt-2">click outside or esc to close</p>
  <button class="-z-10 w-full h-full absolute top-0 left-0" onclick={() => { selectedImage = null }} title="close">
  </button>
</div>
{/if}


<SiteContainer>
  <div class="mt-8">
    <Command command="cat ./cats.md"/>

    <Window header="cats.md">
      <p>i have two cats</p>
      <p>their names are <span class="text-terminal-amber">cooper</span> and <span class="text-white">silver</span></p>
      <p>they're pretty cool cats</p>
      <p>some say they're the best cats</p>
      <p>everybody is saying this, actually.</p>
    </Window>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-2">
      {#each images as image (image)}
        <Card>
          <button class="w-full h-full cursor-pointer hover:brightness-75 transition-all" onclick={() => {selectedImage = image}}>
            <img loading="lazy" class="hover:scale-105 transition-transform w-full h-full aspect-square object-cover" alt={image} src={image}/>
          </button>
          </Card>
      {/each}
    </div>
  </div>
</SiteContainer>