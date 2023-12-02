import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import ConnectRPC from '../../../app/rpcconnect';


export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Discover our open positions.
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
		Artisan is constantly looking for talents! Write us a line at <a href="mailto:contact@artisanbuilder.xyz" className="underline">contact@artisanbuilder.xyz</a>
        </p>
      </div>        
    </section>
  )
}

