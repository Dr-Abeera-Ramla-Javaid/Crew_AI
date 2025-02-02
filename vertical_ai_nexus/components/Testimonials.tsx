import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Vertical AI Nexus has transformed our business processes. Their AI agents have significantly improved our efficiency and decision-making capabilities.",
    avatar: "/avatars/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    content:
      "The vertical AI agents from Vertical AI Nexus have given us a competitive edge in the market. They're incredibly adaptable and continuously improving.",
    avatar: "/avatars/jane-smith.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Founder, AI Startups",
    content:
      "As someone deeply involved in the AI space, I'm impressed by Vertical AI Nexus's approach to vertical AI agents. They're truly pushing the boundaries of what's possible.",
    avatar: "/avatars/mike-johnson.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyber-blue glow font-heading">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-nexus-800 p-6 rounded-lg shadow-lg neon-border">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-cyber-neon glow">{testimonial.name}</h3>
                  <p className="text-sm text-nexus-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-nexus-200">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

