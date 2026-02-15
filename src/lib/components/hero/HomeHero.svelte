<script lang="ts">
  import Card from "../card/Card.svelte";
  import { getAge } from "$lib/util/age";
  import Icon from "@iconify/svelte";
  import profile from "$lib/assets/img/profile.jpg";
	import Link from "../link/Link.svelte";
</script>

<Card fill={false} padding={true}>

  <div class="flex items-center gap-2">
    <div>
      <img class="w-16 h-16 md:w-24 md:h-24 rounded-md aspect-square" src={profile} alt="Drew Gifford"/>
    </div>
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-terminal-green"># Drew Gifford</h1>
      <p class="mt-2 text-terminal-amber hidden sm:block">
        <span id="job-title">## Full-Stack Engineer</span> / <span id="location">Cincinnati, OH</span>
      </p>
    </div>

    
  </div>
  <p class="block sm:hidden mt-2 text-terminal-amber">
    <span id="job-title">## Full-Stack Engineer</span> / <span id="location">Cincinnati, OH</span>
  </p>
  

  <hr class="text-terminal-border mt-4"/>

  <p class="mt-4 text-terminal-muted text-sm">
    I'm a {getAge()}-year old software engineer who enjoys working in high-speed environments creating software that matters for people. I specialize in backend TypeScript-based systems, but I'm always open to learning and adapting to new frameworks!
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