import type { SkillIcon } from "$lib/type/skill";

export interface ProjectDescription {
  label: string;
  text: string;
}

export interface Project {
	header: string;
  name: string;
  link?: string;
  description: ProjectDescription[];
  tech: SkillIcon[];
}

export const projects: Project[] = [

  {
    header: "BALLOTLINE.md",
    name: "BALLOTLINE, LLC",
    link: "https://ballotline.com",
    description: [
      {
        label: "what is it?",
        text: "BALLOTLINE, LLC is a news organization, polling aggregate, and data hub for politics in the United States."
      },
      {
        label: "what did you do?",
        text: "I am the current CEO and lead engineer of BALLOTLINE. I am responsible for project management, frontend and backend development of the site and services. This project was entirely worked on as a hobby outside of my day job."
      },
      {
        label: "what is the impact?",
        text: "BALLOTLINE has delivered realtime election results and live analysis to thousands of concurrent users for U.S. elections in an accessible manner. Additionally, we keep track of polling averages for various categories using our own automated poll collection and parsing pipeline."
      }
    ],
    tech: [
      { icon: "ri:svelte-fill", text: "sveltekit" },
      { icon: "simple-icons:bun", text: "bun" },
      { icon: "akar-icons:postgresql-fill", text: "postgres" },
      { icon: "simple-icons:redis", text: "redis" },
      { icon: "simple-icons:claude", text: "claude code" },
      { icon: "simple-icons:docker", text: "docker" }
    ]
  },
  {
    header: "cfb-roster-generator.md",
    name: "CFB Roster Generator",
    link: "https://cfb.drewgifford.com",
    description: [
      {
        label: "what is it?",
        text: "CFB Roster Generator is a tool to create custom rosters for dynasty mode in the game EA College Football 26. Players are generated with traits based off of real ingame traits, archetypes, abilities, and much more."
      },
      {
        label: "what did you do?",
        text: "I was the sole developer of this project. It's a static site for the most part, but I also had to develop a Firefox browser extension to allow for easy importing into EA's Team Builder application."
      },
      {
        label: "what is the impact?",
        text: "CFB 26 players in the dynasty gamemode now have an option to customize their team beyond default roster presets. The regular team customizer is not user-friendly at all, and is difficult to work with. I shared my tool on Reddit, where it got a lot of positive feedback and is seeing decent usage among the community."
      }
    ],
    tech: [
      { icon: "ri:svelte-fill", text: "sveltekit" },
      { icon: "simple-icons:typescript", text: "typescript" }
    ]
  },
  {
    header: "ltelections.md",
    name: "LTElections",
    description: [
      {
        label: "what is it?",
        text: "LTElections was a realtime election reporting, analysis, and prediction tool that was active for the 2024 U.S. general election. Its success led to the creation of BALLOTLINE."
      },
      {
        label: "what did you do?",
        text: "I led the frontend and backend development of the website and services. I also designed the statistical model behind our realtime \"projectomatic\" predictions that assigned a live probability to each candidate as results came in."
      },
      {
        label: "what is the impact?",
        text: "Over 10,000 end users received their election results from LTElections on election night. The site was propogated throughout social spaces such as Twitter/X and generally received results faster than large news organizations."
      }
    ],
    tech: [
      { icon: "lineicons:nuxt", text: "nuxt" },
      { icon: "simple-icons:vuedotjs", text: "vue" },
      { icon: "simple-icons:express", text: "express" },
      { icon: "simple-icons:typescript", text: "typescript" },
      { icon: "simple-icons:qgis", text: "qgis" }
    ]
  }
]