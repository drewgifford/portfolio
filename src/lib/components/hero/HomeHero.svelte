<script lang="ts">
	import Card from '../card/Card.svelte';
	import { getAge } from '$lib/util/age';
	import Icon from '@iconify/svelte';
	import profile from '$lib/assets/img/profile.jpg';
	import Link from '../link/Link.svelte';
</script>

<Card fill={false} padding={true}>
	<div class="flex items-center gap-2">
		<div>
			<img
				class="aspect-square h-16 w-16 rounded-md md:h-24 md:w-24"
				src={profile}
				alt="Drew Gifford"
			/>
		</div>
		<div class="flex-1">
			<h1 class="text-3xl font-bold text-terminal-green"># Drew Gifford</h1>
			<p class="mt-2 hidden text-terminal-amber sm:block">
				<span id="job-title">## Full-Stack Engineer</span> /
				<span id="location">Cincinnati, OH</span>
			</p>
		</div>
	</div>
	<p class="mt-2 block text-terminal-amber sm:hidden">
		<span id="job-title">## Full-Stack Engineer</span> / <span id="location">Cincinnati, OH</span>
	</p>

	<hr class="mt-4 text-terminal-border" />

	<p class="mt-4 text-sm text-terminal-muted">
		I'm a {getAge()}-year old software engineer who enjoys working in high-speed environments
		creating software that matters for people. I specialize in backend TypeScript-based systems, but
		I'm always open to learning and adapting to new frameworks!
	</p>

	<!-- socials -->
	<div class="mt-4 flex gap-4">
		<Link href="https://github.com/drewgifford">
			<div class="flex items-center gap-1">
				<Icon icon="mdi:github" width="20" height="20" />
				<span>github</span>
			</div>
		</Link>

		<Link href="https://linkedin.com/in/drew-gifford-0417a91b7">
			<div class="flex items-center gap-1">
				<Icon icon="mdi:linkedin" width="20" height="20" />
				<span>linkedin</span>
			</div>
		</Link>
	</div>
</Card>
