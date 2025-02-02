import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const latestPosts = [
  {
    title: "The Rise of Vertical AI Agents in Modern Business",
    excerpt:
      "Explore how specialized AI agents are reshaping industries and driving innovation across various sectors.",
    slug: "rise-of-vertical-ai-agents",
    image: "/blog/vertical-ai-agents.jpg",
  },
  {
    title: "Revolutionizing E-commerce with AI-Powered Personalization",
    excerpt:
      "Discover how AI agents are transforming online shopping experiences through advanced personalization techniques.",
    slug: "ai-powered-ecommerce-personalization",
    image: "/blog/ecommerce-ai.jpg",
  },
  {
    title: "The Future of ERP Systems: AI-Driven Insights and Automation",
    excerpt:
      "Learn how artificial intelligence is revolutionizing enterprise resource planning and decision-making processes.",
    slug: "future-of-erp-systems",
    image: "/blog/erp-ai.jpg",
  },
]

export default function LatestBlogPosts() {
  return (
    <section className="py-20 px-4 bg-black bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyber-blue glow font-heading">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
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
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2 text-cyber-blue glow font-heading">{post.title}</CardTitle>
                <p className="text-nexus-300 mb-4">{post.excerpt}</p>
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
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

