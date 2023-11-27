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
    {
      title: "Private mempool",
      items: [
        {
          title: "Introduction",
          href: "/docs/privatemempool",
        },
        {
          title: "How to submit on-chain operations and being rewarded?",
          href: "/docs/privatemempool/how-to",
        },
        {
          title: "API",
          href: "/docs/privatemempool/api",
        },
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
          title: "Technical Specifications",
          href: "/docs/bidsystem/technical-specifications",
        },
        {
          title: "Bid System API",
          href: "/docs/bidsystem/api",
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
          title: "Technical Specifications",
          href: "/docs/bundlesender/technical-specifications",
        },
        {
          title: "Bundle sender API",
          href: "/docs/bundlesender/api",
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
          title: "Builder API",
          href: "/docs/artisanbuilder/builderapi",
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
    /**
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
    */
  ],
}
