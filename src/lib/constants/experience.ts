import type { SkillIcon } from '$lib/type/skill';

export interface WorkExperience {
	company: string;
	role: string;
	dateRange: string;
	location: string;
	bullets: string[];
	tech: SkillIcon[];
}

export const experiences: WorkExperience[] = [
	// Add your work experience entries here
	{
		company: 'Pantomath',
		role: 'Full-Stack Engineer',
		dateRange: 'Apr 2025 - present',
		location: 'Hybrid - Cincinnati, OH',
		bullets: [
			"I've had the delight of working for a high-velocity startup close to home right out of college; the experience I've gained from Pantomath has been invaluable.",
			"Pantomath was my first exposure to AWS and backend applications at scale, and I've been in the group responsible for maintaining nearly every one of Pantomath's many backend services.",
			"I've been a key contributor on Pantomath's connectors and site reliability teams, ensuring that what they see on Pantomath reflects the assets on their data stack"
		],
		tech: [
			{
				icon: 'mdi:aws',
				text: 'aws'
			},
			{
				icon: 'simple-icons:docker',
				text: 'docker'
			},
			{
				icon: 'simple-icons:databricks',
				text: 'databricks'
			},
			{
				icon: 'simple-icons:snowflake',
				text: 'snowflake'
			},
			{
				icon: 'simple-icons:tableau',
				text: 'tableau'
			},
			{
				icon: 'simple-icons:typescript',
				text: 'typescript'
			},
			{
				icon: 'simple-icons:claude',
				text: 'claude code'
			}
		]
	},
	{
		company: 'MOZAY',
		role: 'Full-Stack Developer (part-time)',
		dateRange: 'Jun 2024 - Apr 2025',
		location: 'Remote - Akron, OH',
		bullets: [
			'Developed and delivered web applications using WordPress and Vue/Vite stacks for 12+ clients across diverse industries',
			"Modernized company's development workflow and tooling, reducing application development and deployment time by 50%",
			'Led client discovery meetings to gather requirements, define technical specifications, and present solution architectures'
		],
		tech: [
			{
				icon: 'simple-icons:vuedotjs',
				text: 'vue'
			},
			{
				icon: 'simple-icons:wordpress',
				text: 'wordpress'
			},
			{
				icon: 'simple-icons:typescript',
				text: 'typescript'
			},
			{
				icon: 'simple-icons:shopify',
				text: 'shopify'
			}
		]
	},
	{
		company: 'KiZAN',
		role: 'Application Developer Intern',
		dateRange: 'Jun 2021 - Dec 2023',
		location: 'Hybrid - Cincinnati, OH',
		bullets: [
			'Created and deployed internal web applications on Azure using ASP.NET Core across 4 co-op rotations, serving 200+ internal users',
			'Enhanced CI/CD pipeline in Azure DevOps, reducing deployment errors by 90% for a major client and improving release reliability'
		],
		tech: [
			{
				icon: 'devicon-plain:dot-net',
				text: '.net'
			},
			{
				icon: 'codicon:azure',
				text: 'azure'
			},
			{
				icon: 'mdi:git',
				text: 'ci/cd'
			},
			{
				icon: 'devicon-plain:azuredevops',
				text: 'devops'
			}
		]
	},
	{
		company: 'MOZAY',
		role: 'Frontend Developer (part-time)',
		dateRange: 'Aug 2016 - Aug 2020',
		location: 'Onsite - Akron, OH',
		bullets: [
			'Developed and maintained 20+ responsive websites, collaborating with design and development teams to deliver client projects on time',
			'Built and managed 10+ eCommerce sites on WordPress, Americommerce, and Shopify for clients with catalogs of 500-10,000+ products',
			'Created 2 custom WordPress plugins in PHP to extend frontend functionality and improve content management workflows'
		],
		tech: [
			{
				icon: 'flowbite:html-solid',
				text: 'html'
			},
			{
				icon: 'flowbite:css-solid',
				text: 'css'
			},
			{
				icon: 'simple-icons:php',
				text: 'php'
			},
			{
				icon: 'simple-icons:angular',
				text: 'angular'
			},
			{
				icon: 'simple-icons:wordpress',
				text: 'wordpress'
			},
			{
				icon: 'simple-icons:shopify',
				text: 'shopify'
			}
		]
	}
];
