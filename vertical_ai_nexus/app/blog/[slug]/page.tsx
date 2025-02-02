import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog Post - Vertical AI Nexus",
  description: "Read our latest insights on Vertical AI Agents and their impact on various industries.",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "The Rise of Vertical AI Agents in Modern Business",
    date: "June 15, 2023",
    readTime: "5 min read",
    content: `
      <p>Artificial Intelligence (AI) has been rapidly evolving, and one of the most exciting developments in recent years is the emergence of Vertical AI Agents. These specialized AI systems are designed to tackle specific industry challenges and are revolutionizing the way businesses operate across various sectors.</p>

      <h2>What are Vertical AI Agents?</h2>
      <p>Vertical AI Agents are AI systems that are tailored to specific industries or business functions. Unlike general-purpose AI, these agents are built with deep domain knowledge and are capable of performing complex tasks within their specialized fields.</p>

      <h2>The Impact on Modern Business</h2>
      <p>The adoption of Vertical AI Agents is transforming industries in several ways:</p>
      <ul>
        <li><strong>Increased Efficiency:</strong> By automating industry-specific tasks, these agents significantly reduce the time and resources required for complex operations.</li>
        <li><strong>Enhanced Decision Making:</strong> With access to vast amounts of industry data and advanced analytics capabilities, Vertical AI Agents provide valuable insights for strategic decision-making.</li>
        <li><strong>Improved Customer Experience:</strong> In customer-facing roles, these agents can provide personalized and efficient service, enhancing overall customer satisfaction.</li>
        <li><strong>Innovation Acceleration:</strong> By handling routine tasks, Vertical AI Agents free up human resources to focus on creative and innovative aspects of business.</li>
      </ul>

      <h2>The Future of Vertical AI Agents</h2>
      <p>As technology continues to advance, we can expect Vertical AI Agents to become even more sophisticated and integral to business operations. The future may see these agents collaborating seamlessly with human workers, further blurring the lines between human and artificial intelligence in the workplace.</p>

      <p>In conclusion, the rise of Vertical AI Agents marks a new era in business technology. Companies that embrace these specialized AI systems will likely find themselves at a significant advantage in their respective industries.</p>
    `,
    image: "/blog/vertical-ai-agents.jpg",
  }

  return (
    <div className="min-h-screen py-16 bg-black bg-opacity-80">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8 text-cyber-blue hover:text-cyber-neon">
          <Link href="/blog">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-blue mb-8 font-heading glow">{post.title}</h1>
          <div className="flex items-center text-nexus-400 text-sm mb-8">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span className="mr-4">{post.date}</span>
            <ClockIcon className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden neon-border mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
          </div>
          <div
            className="prose prose-invert prose-cyan max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}

