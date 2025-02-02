import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, BarChart2, Users, Code, Brain, BotIcon as Robot } from "lucide-react"

export const metadata: Metadata = {
  title: "Services - Agentia World",
  description: "Explore the range of AI services offered by Agentia World.",
}

const services = [
  {
    title: "E-commerce AI Agents",
    description: "Intelligent agents to enhance online shopping experiences and optimize sales.",
    icon: ShoppingCart,
  },
  {
    title: "ERP AI Components",
    description: "AI-powered modules to streamline enterprise resource planning and decision-making.",
    icon: BarChart2,
  },
  {
    title: "Social Media AI",
    description: "Advanced AI agents for content creation, audience engagement, and trend analysis.",
    icon: Users,
  },
  {
    title: "Custom AI Development",
    description: "Tailored AI solutions designed to meet your specific business needs and challenges.",
    icon: Code,
  },
  {
    title: "AI Consulting",
    description: "Expert guidance on integrating AI technology into your existing systems and processes.",
    icon: Brain,
  },
  {
    title: "AI Training & Workshops",
    description: "Comprehensive training programs to help your team master agentic AI development.",
    icon: Robot,
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-agentia-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-agentia-100">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-agentia-700 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <service.icon className="w-12 h-12 mb-4 text-blue-400" />
              <CardTitle className="text-agentia-100">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-agentia-200">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

