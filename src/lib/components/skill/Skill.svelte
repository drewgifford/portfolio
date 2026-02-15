<script lang="ts">
	import Icon from "@iconify/svelte";


  const { icon, text }: { icon: string; text: string; } = $props();

</script>

<code class="border border-terminal-green px-2 py-1 text-sm text-terminal-green flex items-center gap-2">
  <Icon {icon}/>
  <span>{text}</span>
</code>