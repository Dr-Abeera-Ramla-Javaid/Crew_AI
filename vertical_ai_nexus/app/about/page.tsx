import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Agentia World",
  description: "Learn more about Agentia World and our mission to revolutionize AI technology.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-agentia-800 text-agentia-100">
      <h1 className="text-4xl font-bold mb-8 text-agentia-100">About Agentia World</h1>
      <div className="space-y-6 text-agentia-200">
        <p>
          Agentia World is at the forefront of AI innovation, specializing in the development of Vertical AI Agents as
          Components. Our mission is to empower businesses and developers with cutting-edge AI technology that can be
          seamlessly integrated into various applications and industries.
        </p>
        <p>
          Founded by a team of AI enthusiasts and industry experts, we are committed to pushing the boundaries of what's
          possible with artificial intelligence. Our focus on vertical markets allows us to create specialized AI agents
          that cater to specific industry needs, from e-commerce and ERP systems to social media and beyond.
        </p>
        <p>
          At Agentia World, we believe in the power of collaboration and continuous learning. We work closely with our
          clients and partners to understand their unique challenges and develop tailored AI solutions that drive
          innovation and growth.
        </p>
      </div>
    </div>
  )
}

