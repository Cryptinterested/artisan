import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          This section is dedicated to MEV Searchers.
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We only charge a small portion of Successful MEV operations.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included with our access token
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited order flow access
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to our high frequency P2P network
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited requests to our API
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Execution state monitoring
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Pre-block state streaming
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Operations simulation
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to our fine-tuned Bidding System
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access our ground-breaking Bundle Sender
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support on Discord
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">1%</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed on Successful MEV operations.
            </p>
          </div>
          <Link href='mailto:contact@artisan.xyz' className={cn(buttonVariants({ size: "lg" }))}>
            Request your access token
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Artisan gives you access to the best order flow, before everyone else.{" "}
          <strong>You can test our private network for free. </strong>
          <a href='mailto:contact@artisan.xyz' style={{ textDecoration: 'underline' }}>
          <strong style={{ textDecoration: 'inherit' }}>Contact us</strong>
          </a><strong> for a test token access.</strong>
        </p>
      </div>
    </section>
  )
}
