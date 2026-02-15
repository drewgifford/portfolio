<script lang="ts">
	import Card from "$lib/components/card/Card.svelte";
	import Command from "$lib/components/command/Command.svelte";
	import Skill from "$lib/components/skill/Skill.svelte";
	import Window from "$lib/components/window/Window.svelte";
	import { getAge } from "$lib/util/age";
	import Icon from "@iconify/svelte";

	const projects = [
		{
			name: 'project-alpha',
			description: 'A placeholder project description. Replace with your real project details.',
			tags: ['TypeScript', 'SvelteKit', 'PostgreSQL'],
			url: '#'
		},
		{
			name: 'project-beta',
			description: 'Another placeholder project. What interesting things have you built?',
			tags: ['Node.js', 'Docker', 'REST API'],
			url: '#'
		},
		{
			name: 'project-gamma',
			description: 'Your third featured project goes here. Show off your best work.',
			tags: ['Svelte', 'TypeScript', 'Git'],
			url: '#'
		}
	];

	const skills = {
		frontend: ['TypeScript', 'Svelte', 'SvelteKit'],
		backend: ['Node.js', 'PostgreSQL'],
		tools: ['Docker', 'Git']
	};
</script>

<main class="min-h-screen bg-terminal-bg font-mono text-terminal-green">
	<!-- Navbar -->
	<nav class="border-b border-terminal-border px-6 py-4">
		<div class="mx-auto flex max-w-4xl items-center justify-between">
			<span class="font-bold text-terminal-green">
				<span class="text-terminal-muted">~/</span>portfolio
			</span>
			<div class="flex gap-6 text-sm text-terminal-muted">
				<a href="#projects" class="transition-colors hover:text-terminal-green">projects</a>
				<a href="#skills" class="transition-colors hover:text-terminal-green">skills</a>
				<a href="#contact" class="transition-colors hover:text-terminal-green">contact</a>
			</div>
		</div>
	</nav>

	<!-- Hero -->
	<section id="hero" class="mx-auto max-w-4xl px-6 py-16">
		<Command command="cat README.md"/>


    <Card fill={false} padding={true}>
      <h1 class="text-3xl font-bold text-terminal-green">DREW GIFFORD</h1>
      <p class="mt-2 text-terminal-muted">
        <span id="job-title">Full Stack Engineer</span> / <span id="location">Cincinnati, OH</span>
      </p>

      <hr class="text-terminal-border mt-4"/>

      <p class="mt-4 text-terminal-muted">
        I'm a {getAge()}-year old software engineer who enjoys working in high-speed environments creating software that matters for people.
      </p>

      <!-- socials -->
      <div class="mt-4 flex gap-4">
        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-terminal-muted hover:text-terminal-green"
        >
          <Icon icon="mdi:github" width="20" height="20" />
          <span class="text-sm">github</span>
        </a>
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-terminal-muted hover:text-terminal-green"
        >
          <Icon icon="mdi:linkedin" width="20" height="20" />
          <span class="text-sm">linkedin</span>
        </a>
      </div>

    </Card>
	</section>

	<!-- Projects -->
	<section id="projects" class="mx-auto max-w-4xl px-6 py-8">
		<p class="mb-4 text-terminal-muted">
			<span class="text-terminal-amber">$</span> ls ./projects
		</p>
		<Window header="BALLOTLINE.md">
      <div class="leading-relaxed text-terminal-muted flex flex-col gap-1">

        <p class="text-terminal-muted/75">--what is it?</p>
        <p>
          <span class="font-bold">BALLOTLINE, LLC</span> is a news organization, polling aggregate, and data hub for politics in the United States.
        </p>

        <p class="text-terminal-muted/75 mt-2">--what did you do?</p>
        <p>
          I am the current <span class="font-bold">CEO and lead engineer of BALLOTLINE</span>. I am responsible for project management, frontend and backend development of the site and services. This project was entirely worked on as a hobby outside of my day job.
        </p>

        <p class="text-terminal-muted/75 mt-2">--what is the impact?</p>
        <p>
          BALLOTLINE has delivered realtime election results and live analysis to thousands of concurrent users for U.S. elections in an accessible manner. Additionally, we keep track of polling averages for various categories using our own automated poll collection and parsing pipeline.
        </p>
        
        <p class="text-terminal-muted/75 mt-2">--what is your tech stack?</p>

        <div class="flex gap-2 text-sm">
          <Skill icon="ri:svelte-fill" text="SvelteKit"/>
          <Skill icon="simple-icons:bun" text="Bun"/>
          <Skill icon="simple-icons:hono" text="Hono"/>
          <Skill icon="simple-icons:express" text="Express"/>
          <Skill icon="akar-icons:postgresql-fill" text="PostgreSQL"/>
          <Skill icon="simple-icons:redis" text="Redis"/>
          <Skill icon="mingcute:drizzle-fill" text="Drizzle ORM"/>
        </div>
      </div>
    </Window>

    <Window header="cfb-roster-generator.md">
      <div class="leading-relaxed text-terminal-muted flex flex-col gap-1">

        <p class="text-terminal-muted/75">--what is it?</p>
        <p>
          <span class="font-bold">BALLOTLINE, LLC</span> is a news organization, polling aggregate, and data hub for politics in the United States.
        </p>

        <p class="text-terminal-muted/75 mt-2">--what did you do?</p>
        <p>
          I am the current <span class="font-bold">CEO and lead engineer of BALLOTLINE</span>. I am responsible for project management, frontend and backend development of the site and services. This project was entirely worked on as a hobby outside of my day job.
        </p>

        <p class="text-terminal-muted/75 mt-2">--what is the impact?</p>
        <p>
          BALLOTLINE has delivered realtime election results and live analysis to thousands of concurrent users for U.S. elections in an accessible manner. Additionally, we keep track of polling averages for various categories using our own automated poll collection and parsing pipeline.
        </p>
        
        <p class="text-terminal-muted/75 mt-2">--what is your tech stack?</p>

        <div class="flex gap-2 text-sm">
          <Skill icon="ri:svelte-fill" text="SvelteKit"/>
        </div>
      </div>
    </Window>
	</section>

	<!-- Projects -->
	<section id="projects" class="mx-auto max-w-4xl px-6 py-8">
		<p class="mb-4 text-terminal-muted">
			<span class="text-terminal-amber">$</span> ls ./projects/
		</p>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each projects as project (project.name)}

        <Window header={project.name}>
          
          <h3 class="mb-2 font-bold text-terminal-green">{project.name}</h3>

          <p class="text-terminal-muted">{project.description}</p>


        </Window>
			{/each}
		</div>
	</section>

	<!-- Skills -->
	<section id="skills" class="mx-auto max-w-4xl px-6 py-8">
		<p class="mb-4 text-terminal-muted">
			<span class="text-terminal-amber">$</span> cat skills.txt
		</p>
		<div class="rounded border border-terminal-border bg-terminal-surface p-6">
			<div class="mb-5">
				<p class="mb-3 text-xs text-terminal-muted">// frontend</p>
				<div class="flex flex-wrap gap-2">
					{#each skills.frontend as skill (skill)}
						<code class="border border-terminal-green px-2 py-1 text-sm text-terminal-green">
							{skill}
						</code>
					{/each}
				</div>
			</div>
			<div class="mb-5">
				<p class="mb-3 text-xs text-terminal-muted">// backend</p>
				<div class="flex flex-wrap gap-2">
					{#each skills.backend as skill (skill)}
						<code class="border border-terminal-green px-2 py-1 text-sm text-terminal-green">
							{skill}
						</code>
					{/each}
				</div>
			</div>
			<div>
				<p class="mb-3 text-xs text-terminal-muted">// tools</p>
				<div class="flex flex-wrap gap-2">
					{#each skills.tools as skill (skill)}
						<code class="border border-terminal-green px-2 py-1 text-sm text-terminal-green">
							{skill}
						</code>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer id="contact" class="border-t border-terminal-border px-6 py-8 text-center">
		<p class="text-sm text-terminal-muted">// built with Svelte &amp; too much coffee</p>
	</footer>
</main>
