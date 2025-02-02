import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Network, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Explore the Future - Vertical AI Nexus",
  description: "Discover the cutting-edge technologies and innovations shaping the future of AI agents.",
}

const futureTechnologies = [
  {
    title: "Quantum AI",
    description: "Harnessing quantum computing to exponentially increase AI processing power and capabilities.",
    icon: Cpu,
  },
  {
    title: "Neuromorphic Computing",
    description: "AI systems that mimic the structure and function of the human brain for more efficient processing.",
    icon: Brain,
  },
  {
    title: "Swarm Intelligence",
    description: "Distributed AI agents working together to solve complex problems and make decisions.",
    icon: Network,
  },
  {
    title: "Self-Evolving AI",
    description: "AI systems that can autonomously improve and adapt their own algorithms and architectures.",
    icon: Zap,
  },
]

export default function FuturePage() {
  return (
    <div className="min-h-screen py-16 bg-black bg-opacity-80">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-blue mb-8 text-center font-heading glow">
          Explore the Future of AI
        </h1>
        <p className="text-xl text-nexus-200 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Dive into the cutting-edge technologies and innovations that are shaping the future of AI agents and
          transforming industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {futureTechnologies.map((tech, index) => (
            <Card
              key={index}
              className="bg-nexus-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 neon-border"
            >
              <CardHeader>
                <tech.icon className="w-12 h-12 mb-4 text-cyber-neon" />
                <CardTitle className="text-2xl font-bold text-cyber-blue glow font-heading">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-nexus-200">{tech.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden neon-border">
          <Image src="/future-ai.jpg" alt="The future of AI" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/50 to-cyber-pink/50 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-bold text-white text-center max-w-2xl px-4">
              "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

