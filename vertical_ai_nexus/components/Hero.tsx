import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 to-cyber-pink/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float font-heading glow text-cyber-blue">
          Welcome to Vertical AI Nexus
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-float animation-delay-300 text-nexus-200">
          Empowering the future with Vertical AI Agents as Components
        </p>
        <Button
          asChild
          size="lg"
          className="bg-cyber-neon text-black hover:bg-cyber-blue transition-colors duration-300 animate-float animation-delay-600"
        >
          <Link href="/future">
            Explore the Future <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

