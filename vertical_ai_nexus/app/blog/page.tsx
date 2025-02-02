import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog - Vertical AI Nexus",
  description: "Explore the latest insights and trends in Vertical AI Agents and their impact across industries.",
}

const blogPosts = [
  {
    title: "The Rise of Vertical AI Agents in Modern Business",
    excerpt:
      "Explore how specialized AI agents are reshaping industries and driving innovation across various sectors.",
    date: "June 15, 2023",
    readTime: "5 min read",
    slug: "rise-of-vertical-ai-agents",
    image: "/blog/vertical-ai-agents.jpg",
    category: "AI Trends",
    imageCommand: "A futuristic cityscape with holographic AI agents assisting in various business operations",
  },
  {
    title: "Revolutionizing E-commerce with AI-Powered Personalization",
    excerpt:
      "Discover how AI agents are transforming online shopping experiences through advanced personalization techniques.",
    date: "June 10, 2023",
    readTime: "7 min read",
    slug: "ai-powered-ecommerce-personalization",
    image: "/blog/ecommerce-ai.jpg",
    category: "E-commerce",
    imageCommand:
      "An AI-powered virtual shopping assistant helping a customer in a sleek, futuristic online store interface",
  },
  {
    title: "The Future of ERP Systems: AI-Driven Insights and Automation",
    excerpt:
      "Learn how artificial intelligence is revolutionizing enterprise resource planning and decision-making processes.",
    date: "June 5, 2023",
    readTime: "6 min read",
    slug: "future-of-erp-systems",
    image: "/blog/erp-ai.jpg",
    category: "Enterprise Solutions",
    imageCommand: "A sophisticated 3D dashboard showcasing AI-driven ERP analytics and automated processes",
  },
  {
    title: "Building Scalable AI Agents: Best Practices and Challenges",
    excerpt:
      "An in-depth look at the best practices for developing scalable AI agents and overcoming common challenges.",
    date: "May 28, 2023",
    readTime: "8 min read",
    slug: "building-scalable-ai-agents",
    image: "/blog/scalable-ai.jpg",
    category: "Development",
    imageCommand: "A network of interconnected AI agents scaling across multiple servers and devices",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16 bg-black bg-opacity-80">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-blue mb-8 text-center font-heading glow">
          Vertical AI Nexus Blog
        </h1>
        <p className="text-xl text-nexus-200 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Dive into the latest insights, trends, and innovations in the world of Vertical AI Agents and their
          transformative impact across industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-nexus-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 neon-border"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-cyber-neon text-black px-2 py-1 rounded text-sm font-medium">
                    {post.category}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2 text-cyber-blue glow font-heading">{post.title}</CardTitle>
                <p className="text-nexus-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-nexus-400 text-sm">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 text-nexus-400 text-xs italic">Image: {post.imageCommand}</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between text-cyber-pink hover:text-cyber-neon"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-cyber-neon text-black hover:bg-cyber-blue transition-colors duration-300"
          >
            <Link href="/blog/archive">View All Posts</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

