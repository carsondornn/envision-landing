import { Link } from 'react-router-dom'
import { ArrowLeft, Eye } from 'lucide-react'

function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Site</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Envision AI</span>
          </div>
        </div>
      </header>

      {/* Video Content */}
      <main className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              See Envision AI in Action
            </h1>
            <p className="text-gray-400 text-lg">
              Watch how Envision AI transforms dry eye treatment workflows
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-blue-500/10">
            {/* Placeholder - Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-500">Demo video coming soon</p>
              </div>
            </div>

            {/* Uncomment and replace VIDEO_ID when you have a video */}
            {/* <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Envision AI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>

          {/* Optional: Additional info below video */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Ready to transform your practice?
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DemoPage
