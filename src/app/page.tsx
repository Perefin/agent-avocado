import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <a href="https://demo.agentavocado.ai" target="_blank" rel="noopener noreferrer">
        <Image
          src="/avent avocado avatar.png"
          alt="Agent Avocado"
          width={300}
          height={300}
          priority
          className="mb-8 cursor-pointer hover:opacity-80 transition-opacity"
          style={{ background: 'transparent' }}
        />
      </a>
      <h1 className="text-4xl font-bold text-gray-800 text-center">Coming Soon</h1>
    </div>
  );
}