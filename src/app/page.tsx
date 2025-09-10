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
      <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
    </div>
  );
}
