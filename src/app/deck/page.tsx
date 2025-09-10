export default function DeckPage() {
  return (
    <div className="min-h-screen bg-[#FDF7F4]">
      {/* Header with download button */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Agent Avocado Pitch Deck</h1>
          <a
            href="/deck.pdf"
            download="agent-avocado-pitch-deck.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
      
      {/* PDF Viewer */}
      <div className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="/deck.pdf#toolbar=1&navpanes=1&scrollbar=1"
          width="100%"
          height="100%"
          className="border-0"
          title="Agent Avocado Pitch Deck"
        />
      </div>
    </div>
  );
}