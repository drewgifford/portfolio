<script lang="ts">
	import Icon from '@iconify/svelte';
	const { icon, text }: { icon: string; text: string } = $props();
</script>

<code
	class="flex items-center gap-2 border border-terminal-muted px-2 py-1 text-sm text-terminal-muted"
>
	<Icon {icon} />
	<span>{text}</span>
</code>
