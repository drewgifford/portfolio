<script lang="ts">
  import Card from "../card/Card.svelte";
  import { getAge } from "$lib/util/age";
  import Icon from "@iconify/svelte";
</script>

<Card fill={false} padding={true}>
  <h1 class="text-3xl font-bold text-terminal-green"># Drew Gifford</h1>
  <p class="mt-2 text-terminal-amber">
    <span id="job-title">## Full-Stack Engineer</span> / <span id="location">Cincinnati, OH</span>
  </p>

  <hr class="text-terminal-border mt-4"/>

  <p class="mt-4 text-terminal-muted">
    I'm a {getAge()}-year old software engineer who enjoys working in high-speed environments creating software that matters for people. I specialize in backend TypeScript-based systems, but I'm always open to learning and adapting to new frameworks!
  </p>

  <!-- socials -->
  <div class="mt-4 flex gap-4">
    <a
      href="https://github.com/drewgifford"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-terminal-muted hover:text-terminal-green"
    >
      <Icon icon="mdi:github" width="20" height="20" />
      <span class="text-sm">github</span>
    </a>
    <a
      href="https://linkedin.com/in/drew-gifford-0417a91b7"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-terminal-muted hover:text-terminal-green"
    >
      <Icon icon="mdi:linkedin" width="20" height="20" />
      <span class="text-sm">linkedin</span>
    </a>
  </div>

</Card>