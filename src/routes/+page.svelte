<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Command from '$lib/components/command/Command.svelte';
	import SiteContainer from '$lib/components/container/SiteContainer.svelte';
	import HomeHero from '$lib/components/hero/HomeHero.svelte';
	import Link from '$lib/components/link/Link.svelte';
	import ProjectEntry from '$lib/components/projectentry/ProjectEntry.svelte';
	import TableOfContents from '$lib/components/tableofcontents/TableOfContents.svelte';
	import Window from '$lib/components/window/Window.svelte';
	import WorkEntry from '$lib/components/workentry/WorkEntry.svelte';
	import { education } from '$lib/constants/education';
	import { experiences } from '$lib/constants/experience';
	import { projects } from '$lib/constants/projects';
</script>

<svelte:head>
	<title>Drew Gifford</title>
</svelte:head>

<SiteContainer>
	<div class="mt-8 flex min-h-screen items-start justify-between gap-4">
		<TableOfContents />
		<main class="flex min-h-screen flex-1 flex-col gap-12">
			<!-- Hero -->
			<section id="about" class="mx-auto pt-4">
				<Command command="cat README.md" />
				<HomeHero />
			</section>

			<!-- Education -->
			<section id="education" class="mx-auto flex w-full flex-col gap-4 pt-4">
				<Command command="cat education.log" />

				<Window header="education.md">
					<div class="flex items-start justify-between gap-4">
						<div>
							<p class="text-lg font-bold text-terminal-green"># {education.school}</p>
							<p class="mt-0.5 text-sm text-terminal-amber">## {education.degree}</p>
						</div>
						<span class="shrink-0 text-sm text-terminal-muted">{education.years}</span>
					</div>
				</Window>
			</section>

			<!-- Experience -->
			<section id="experience" class="mx-auto flex w-full flex-col gap-4 pt-4">
				<Command command="cat experience.log" />

				<div class="relative ml-4">
					<!-- vertical connector line -->
					<div class="absolute top-3 bottom-3 left-0 w-px bg-terminal-border"></div>

					{#each experiences as experience, i (experience.company + '.' + experience.dateRange)}
						<WorkEntry {experience} open={i === 0} />
					{/each}
				</div>
			</section>

			<!-- Projects -->
			<section id="projects" class="mx-auto flex flex-col gap-4 pt-4">
				<p class="mb-4 text-terminal-muted">
					<span class="text-terminal-amber">$</span> ls ./projects
				</p>
				{#each projects as project (project.header)}
					<ProjectEntry {project} />
				{/each}
			</section>

			<!-- Contact -->
			<section id="contact">
				<Command command="which contact" />
				<Card>
					<div class="p-4 text-sm">
						<p class="text-lg font-bold text-terminal-green"># Contact</p>
						<p>
							Want to get in touch? The best way to reach me is via email. Feel free to connect on
							LinkedIn as well, if you so please.
						</p>
						<p class="mt-4">
							Email: <Link href="mailto:drew@drewgifford.com">drew@drewgifford.com</Link>
						</p>
						<p class="mt-4">
							LinkedIn: <Link href="https://www.linkedin.com/in/drew-gifford-0417a91b7/"
								>Drew Gifford</Link
							>
						</p>
					</div>
				</Card>
			</section>
		</main>
	</div>
</SiteContainer>
