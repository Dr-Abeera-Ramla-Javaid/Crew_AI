import { ShoppingCart, BarChart2, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const markets = [
  {
    title: "E-commerce",
    description: "Revolutionizing online shopping experiences with AI-powered agents.",
    icon: ShoppingCart,
    color: "text-cyber-blue",
    link: "https://github.com/panaversity/learn-agentic-ai/blob/main/AGENTIA_PROJECTS/13_ecommerce/readme.md",
  },
  {
    title: "ERP Systems",
    description: "Enhancing enterprise resource planning with intelligent AI components.",
    icon: BarChart2,
    color: "text-cyber-neon",
    link: "https://github.com/panaversity/learn-agentic-ai/blob/main/AGENTIA_PROJECTS/16_erp/readme.md",
  },
  {
    title: "Social Media",
    description: "Transforming social interactions and content creation with agentic AI.",
    icon: Users,
    color: "text-cyber-pink",
    link: "https://github.com/panaversity/learn-agentic-ai/tree/main/AGENTIA_PROJECTS/17_socialmedia",
  },
]

export default function MarketFocus() {
  return (
    <section className="py-20 px-4 bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyber-blue glow font-heading">
          Our Market Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <Link href={market.link} key={index} className="transition-transform duration-300 hover:scale-105">
              <Card className="bg-nexus-800 border-none h-full shadow-lg hover:shadow-xl transition-all duration-300 neon-border">
                <CardHeader>
                  <market.icon className={`w-12 h-12 mb-4 ${market.color} glow`} />
                  <CardTitle className={`text-xl font-bold ${market.color} glow`}>{market.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-nexus-200">{market.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

