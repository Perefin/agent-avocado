import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <Image
        src="/avent avocado avatar.png"
        alt="Agent Avocado"
        width={300}
        height={300}
        priority
        className="mb-8 rounded-full shadow-lg"
        style={{ background: 'transparent' }}
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Agent Avocado is your intelligent AI companion, ready to revolutionize how you work and create.
      </p>
      <Link 
        href="/about" 
        className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
      >
        Learn More About Us
      </Link>
    </div>
  );
}
