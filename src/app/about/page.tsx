import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="p-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Image
            src="/avent avocado avatar.png"
            alt="Agent Avocado"
            width={200}
            height={200}
            priority
            className="mx-auto mb-8 rounded-full shadow-lg"
            style={{ background: 'transparent' }}
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Agent Avocado</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your intelligent AI companion, ready to revolutionize how you work and create.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Agent Avocado is designed to be more than just another AI tool. We're building 
              an intelligent agent that understands context, learns from interactions, and 
              adapts to your unique workflow.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to create a seamless bridge between human creativity and artificial 
              intelligence, empowering users to achieve more while maintaining the personal 
              touch that makes work meaningful.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Why Avocado?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🥑</span>
                <span>Nutritious for your productivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🌱</span>
                <span>Grows and adapts with you</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">💚</span>
                <span>Healthy for your workflow</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🎯</span>
                <span>Focused on what matters most</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">What's Coming</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Automation</h3>
              <p className="text-gray-600">
                Intelligent task automation that learns your preferences and optimizes your workflow.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Conversation</h3>
              <p className="text-gray-600">
                Communicate naturally with your AI agent using everyday language and context.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect with your favorite tools and platforms for a unified experience.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">The Team Behind Agent Avocado</h2>
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              We're a passionate team of developers, designers, and AI enthusiasts who believe 
              in the power of intelligent automation to enhance human potential. Our diverse 
              backgrounds in machine learning, user experience, and software engineering come 
              together to create something truly special.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every feature we build is guided by one principle: making AI accessible, 
              reliable, and genuinely helpful for real people solving real problems.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-emerald-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Agent Avocado is coming soon. Be among the first to experience the future of AI assistance.
          </p>
          <div className="space-y-4">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Join the Waitlist
            </button>
            <p className="text-emerald-200 text-sm">
              No spam, just updates on our progress and early access opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
