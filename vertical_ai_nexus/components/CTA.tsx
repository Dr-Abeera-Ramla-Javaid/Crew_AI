import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 text-center bg-black bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyber-pink glow font-heading">
          Become a World-Class Agentic AI Developer
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-nexus-200">
          Join us on the journey to revolutionize technology with Vertical AI Agents. Start your path to becoming an
          expert in agentic AI development.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-cyber-neon text-black hover:bg-cyber-blue transition-colors duration-300"
        >
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

