import Link from "next/link"
import { Facebook, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-70 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyber-blue glow font-heading">Vertical AI Nexus</h3>
            <p className="text-sm text-nexus-300">Empowering the future with Vertical AI Agents as Components</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyber-pink glow font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-nexus-300 hover:text-cyber-neon transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-nexus-300 hover:text-cyber-neon transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-nexus-300 hover:text-cyber-neon transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-nexus-300 hover:text-cyber-neon transition duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyber-blue glow font-heading">Contact</h4>
            <p className="text-nexus-300">Dr.arjavaid701.pk@gmail.com</p>
            <p className="text-nexus-300">Phone:03217106893</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyber-pink glow font-heading">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571653240549"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nexus-300 hover:text-cyber-neon transition duration-300"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/in/abeera-javaid-356612323/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nexus-300 hover:text-cyber-neon transition duration-300"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Dr-Abeera-Ramla-Javaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nexus-300 hover:text-cyber-neon transition duration-300"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-nexus-700 text-center text-sm text-nexus-300">
          © {new Date().getFullYear()} Vertical AI Nexus. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

