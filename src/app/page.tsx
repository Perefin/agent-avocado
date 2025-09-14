import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/avent avocado avatar.png"
        alt="Agent Avocado"
        width={300}
        height={300}
        priority
        className="mb-8"
        style={{ background: 'transparent' }}
      />
      <h1 className="text-4xl font-bold text-gray-800 text-center">Coming Soon
        <br /><a href="https://demo.agentavocado.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline text-sm">(Early Demo)</a>

        
      </h1>
    </div>
  );
}
