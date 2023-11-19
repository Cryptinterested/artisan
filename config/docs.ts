import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    /**
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
        },
        {
          title: "Contentlayer",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/docs/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/docs/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/docs/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    */
    {
      title: "Private mempool",
      items: [
        {
          title: "Introduction",
          href: "/docs/privatemempool",
        },
        {
          title: "Motivations",
          href: "/docs/privatemempool/motivations",
        },
        {
          title: "Technical Specifications",
          href: "/docs/privatemempool/technical-specifications",
          disabled: true,
        },
        {
          title: "How to submit on-chain operations and being rewarded?",
          href: "/docs/privatemempool/how-to",
        }
      ],
    },
    {
      title: "Bid system",
      items: [
        {
          title: "Introduction",
          href: "/docs/bidsystem",
        },
        {
          title: "Motivations",
          href: "/docs/bidsystem/motivations",
        },
        {
          title: "Technical Specifications",
          href: "/docs/bidsystem/technical-specifications",
        },
      ],
    },
    {
      title: "Bundle Sender",
      items: [
        {
          title: "Introduction",
          href: "/docs/bundlesender",
        },
        {
          title: "Motivations",
          href: "/docs/bundlesender/motivations",
        },
        {
          title: "Technical Specifications",
          href: "/docs/bundlesender/technical-specifications",
        },
      ],
    },
    {
      title: "Artisan Builder",
      items: [
        {
          title: "Introduction",
          href: "/docs/artisanbuilder",
        },
        {
          title: "Motivations",
          href: "/docs/artisanbuilder/motivations",
        },
        {
          title: "Technical Specifications",
          href: "/docs/artisanbuilder/technical-specifications",
        },
      ],
    },
    {
      title: "Artisan DAO",
      items: [
        {
          title: "Introduction",
          href: "/docs/artisandao",
        },
        {
          title: "Motivations",
          href: "/docs/artisandao/motivations",
        },
        {
          title: "Artisan DAO architecture & contracts",
          href: "/docs/artisandao/architecture-contracts",
        },
        {
          title: "Initial distribution",
          href: "/docs/artisandao/initial-distribution",
        },
        {
          title: "Multisig contracts & adresses",
          href: "/docs/artisandao/msig-addresses",
        },
        {
          title: "Voting process",
          href: "/docs/artisandao/voting-process",
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Writing Posts",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Dashboard",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Layouts",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Server Components",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Authentication",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Database with Prisma",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "API Routes",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
