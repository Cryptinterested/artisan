"use client"
import Link from "next/link"
import ConnectRPC from '../../app/rpcconnect'

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DashboardConfig } from '../../types/index';

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

import React, { useState } from 'react';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is MEV?',
      answer:
        'Maximal Extractable Value (MEV) is a phenomenon where network participants take advantage of publicly known transactions, \
       to create their own complex operations, and adjust their transaction fees to perform profitable trades, ultimately costing end users money. \
       Whenever someone conducts a public transaction with value, arbitrageurs can "frontrun" it by executing the same transaction just before \
      , pocketing the profits. If you experience frontrunning, you may also encounter "backrunning," where arbitrageurs mitigate any price changes caused \
       by your trade, once again keeping the profits. The combination of frontrunning and backruning is referred to as a "sandwich attack", which is considered the most \
       detrimental form of MEV. Bad MEV results in less favorable prices for your transactions and can lead to losses ranging from hundreds to thousands of dollars. \
       Artisan refund RPC serves as a straightforward solution—an RPC endpoint that protects your transaction from bad MEV.',
    },
    {
      question: 'What is Artisan refund RPC?',
      answer: 'Originally, an RPC (Remote Procedure Call) is used to connect decentralized applications to the blockchain. \
      Artisan refund RPC helps users to submit trades while being protected against malicious MEV. To achieve so, whenever you submit a transaction to our refund RPC, \
      it enters a pool where searchers will compete to exploit Good MEV opportunities. You will be protected against frontrunning or sandwich attacks. Additionnally, \
      you\'ll receive up to 90% the of the profit generated. To use our endpoint, change your selected default RPC by clicking on the Green button `Add Artisan RPC refund` \
      on top of the home page.',
    },
    {
      question: 'How does Artisan RPC refund work?',
      answer: 'Artisan creates an efficient bidding system where arbitrageurs and searchers compete using an auction mechanism to win the right to perform Good MEV opportunities. When a Good MEV \
      operation occurs, you will receive up to 90% of the profit made.',
    },
    {
      question: 'How much could I expect as a user?',
      answer: 'The amount refunded is not predictable since it depends on both your transaction size and the winning bid amount.',
    },
    {
      question: 'As a searcher, what are the benefits of using Artisan private pool?',
      answer: 'You benefit from the best MEV opportunities and fine-tuned feedback/logs on your submitted bundles.',
    },
    //{
    //  question: 'What are the key specificities of Artisan private pool?',
    //  answer: '',
    //},
    {
      question: 'How could I contribute to Artisan suite of tools?',
      answer: 'Visit our `Careers` page and reach out to us by email or using our social networks!',
    },
    {
      question: 'Can I invest in the company?',
      answer: 'More information very soon...',
    },
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-start justify-center gap-4 text-left">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Here are some common questions asked by our community.
        </p>
        <div className="mt-6">
          {faqData.map((item, index) => (
            <div className="mb-4" key={index}>
              <div
                className={`cursor-pointer text-xl font-medium leading-[1.25] ${
                  expandedIndex === index ? 'pb-2' : 'pb-4'
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>{' '}
                {expandedIndex === index ? '-' : '+'}
              </div>
              {expandedIndex === index && (
                <p className="text-left leading-6 text-muted-foreground">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div id="rpc_main" className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/*
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          */}
          <ConnectRPC />
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            The MEV Supply chain at your benefit
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            As a <b>User</b>, submit your operations to our MEV-protected private mempool and benefit from MEV refunds.
          </p>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            As a <b>Searcher</b>, enter the most efficient P2P private network.
          </p>
          <div className="space-x-4">
            <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our research and development company, managed by Artisan DAO creates a suite products
            and tools to participate in the thriving MEV Supply Chain.
          </p>
        </div>

        <div className="mx-auto grid gap-4 text-xl sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <Link href="/docs/rpcnode">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold ">RPC Node</h3>
                  <p className="text-sm text-muted-foreground">
                    Access our protective RPC endpoint, submit your operations and benefit from MEV refunds.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <Link href="/docs/privatemempool">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Artisan Private Pool</h3>
                <p className="text-sm text-muted-foreground">
                  A private mempool, rewarding end-users for submitting operations.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <Link href="/docs/bidsystem">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Bid System</h3>
                <p className="text-sm">
                  An efficient auction mechanism where searchers benefit from the most rich order flow.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <Link href="/docs/bundlesender">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Bundle Sender</h3>
                <p className="text-sm text-muted-foreground">
                  A dedicated endpoint that carefully distribute searchers bundles to block builders, so that they don&apos;t have to.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="mx-auto overflow-hidden rounded-lg border bg-background p-2">
            <Link href="/docs/artisanbuilder">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Artisan Builder</h3>
                <p className="text-sm text-muted-foreground">
                  Our neutral and protective block builder, creating the most lucrative blocks, while preserving redistribution to operations originators.
                </p>
              </div>
            </div>
            </Link>
          </div>
          <div className="mx-auto overflow-hidden rounded-lg border bg-background p-2">
            <Link href="/docs/artisandao">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Artisan DAO</h3>
                <p className="text-sm text-muted-foreground">
                  The organization that powers the Artisan Ecosystem.
                </p>
              </div>
            </div>
            </Link>
          </div>
          
          {/*
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Subscriptions</h3>
                <p className="text-sm text-muted-foreground">
                  Free and paid subscriptions using Stripe.
                </p>
              </div>
            </div>
          </div>
        */}
        </div>         
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Artisan also includes a blog and a detailed documentation to easily use our tools.
          </p>
        </div>
      </section>

      < FAQSection />

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            We Open Source most of our technical stack for the benefit of our community.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
