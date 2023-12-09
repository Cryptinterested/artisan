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
      title: "Artisan RPC Node",
      items: [
        // {
        //   title: "Introduction",
        //   href: "/docs/rpcnode",
        // },
        {
          title: "How to submit on-chain operations and being rewarded?",
          href: "/docs/rpcnode/how-to",
        },
      ],
    },
    {
      title: "Private mempool",
      items: [
        {
          title: "Introduction",
          href: "/docs/privatemempool",
          disabled: true,
        },
        {
          title: "API",
          href: "/docs/privatemempool/api",
          disabled: true,
        },
      ],
    },
    {
      title: "Bid system",
      items: [
        {
          title: "Introduction",
          href: "/docs/bidsystem",
          disabled: true,
        },
        {
          title: "Technical Specifications",
          href: "/docs/bidsystem/technical-specifications",
          disabled: true,
        },
        {
          title: "Bid System API",
          href: "/docs/bidsystem/api",
          disabled: true,
        },
      ],
    },
    {
      title: "Bundle Sender",
      items: [
        {
          title: "Introduction",
          href: "/docs/bundlesender",
          disabled: true,
        },
        {
          title: "Technical Specifications",
          href: "/docs/bundlesender/technical-specifications",
          disabled: true,
        },
        {
          title: "Bundle sender API",
          href: "/docs/bundlesender/api",
          disabled: true,
        },
      ],
    },
    {
      title: "Artisan Builder",
      items: [
        {
          title: "Introduction",
          href: "/docs/artisanbuilder",
          disabled: true,
        },
        {
          title: "Builder API",
          href: "/docs/artisanbuilder/builderapi",
          disabled: true,
        },
      ],
    },
    {
      title: "Artisan DAO",
      items: [
        {
          title: "Introduction",
          href: "/docs/artisandao",
          disabled: true,
        },
        {
          title: "Artisan DAO architecture & contracts",
          href: "/docs/artisandao/architecture-contracts",
          disabled: true,
        },
        {
          title: "Initial distribution",
          href: "/docs/artisandao/initial-distribution",
          disabled: true,
        },
        {
          title: "Multisig contracts & adresses",
          href: "/docs/artisandao/msig-addresses",
          disabled: true,
        },
        {
          title: "Voting process",
          href: "/docs/artisandao/voting-process",
          disabled: true,
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
