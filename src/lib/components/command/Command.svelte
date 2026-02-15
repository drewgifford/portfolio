<script lang="ts">
	const { command }: { command: string } = $props();
</script>

<p class="mb-4 text-terminal-muted">
	<span class="text-terminal-amber">$</span>
	{command}
</p>
