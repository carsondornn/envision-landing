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
              Watch how Envision AI transforms dry eye education & support
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-blue-500/10">
            <video
              className="w-full h-full"
              controls
              playsInline
              poster=""
            >
              <source src="/FINAL-DEMO.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Contact Info */}
          <div className="mt-10 text-center">
            <p className="text-gray-400">
              For any questions, please contact{' '}
              <a
                href="mailto:Admin@AskEnvisionAI.com"
                className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold hover:from-blue-300 hover:to-cyan-300 transition-all"
              >
                Admin@AskEnvisionAI.com
              </a>
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}

export default DemoPage
