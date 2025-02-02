import { CheckCircle } from "lucide-react"
import Link from "next/link"

const features = [
  "Specialized AI agents for various industries",
  "Seamless integration into existing systems",
  "Continuous learning and improvement",
  "Customizable to specific business needs",
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyber-blue glow font-heading">
          About Vertical AI Nexus
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-nexus-200">
              At Vertical AI Nexus, we're pioneering the development of Vertical AI Agents as Components. Our focus is
              on creating intelligent, specialized agents that can be seamlessly integrated into various applications
              and industries.
            </p>
            <p className="text-lg text-nexus-200">
              We're currently in the learning phase, mastering the art of building AI Agents as components with a
              horizontal focus. This approach allows us to create versatile agents that can be adapted to multiple use
              cases.
            </p>
            <p className="text-lg text-nexus-200">
              Our goal is to empower developers and businesses to leverage the power of agentic AI, revolutionizing how
              we interact with technology and solve complex problems.
            </p>
            <Link
              href="https://github.com/panaversity/learn-agentic-ai/blob/main/AGENTIA_PROJECTS/readme.md"
              className="inline-block bg-cyber-blue hover:bg-cyber-neon text-black font-bold py-2 px-4 rounded transition duration-300 neon-border"
            >
              Learn more about our Agentia Projects
            </Link>
          </div>
          <div className="bg-nexus-800 p-6 rounded-lg shadow-xl neon-border">
            <h3 className="text-2xl font-semibold mb-6 text-cyber-pink glow font-heading">Key Features</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-nexus-200">
                  <CheckCircle className="text-cyber-neon mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

