import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Eye, Menu, Play, MessageCircle, Calculator, Video,
  FileText, Mic, BookOpen, Shield, Check, Zap,
  Lightbulb, X, Sparkles, Star, Users,
  ChevronDown, ArrowRight, AlertTriangle, Thermometer,
  Target, Activity, ClipboardCopy, History
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Is Envision AI a replacement for proper clinical training?",
      answer: "No. Envision AI is a reference and decision-support tool designed to complement your clinical training — not replace it. All treatment decisions should be made by qualified practitioners using their professional judgment."
    },
    {
      question: "How accurate is the AI?",
      answer: "Envision AI achieves 97% accuracy on clinical questions based on our testing. All information is sourced directly from Inmode & Dr. Dornn verified clinical protocols. The AI will tell you when it doesn't have enough information to answer confidently."
    },
    {
      question: "What InMode devices does it support?",
      answer: "Envision AI currently supports Forma I (RF), Lumecca I (IPL), and Morpheus8 protocols. We're continuously expanding our knowledge base as new devices and techniques become available."
    },
    {
      question: "Is my conversation data secure?",
      answer: "Yes. We use enterprise-grade encryption and never share your data with third parties. Conversations are stored securely to maintain your chat history across sessions."
    },
    {
      question: "Can my staff use it too?",
      answer: "Yes! Your subscription includes access for your entire clinical team. Staff can use Envision AI to answer patient questions, prep for treatments, and learn protocols."
    },
    {
      question: "What if I have a question the AI can't answer?",
      answer: "If Envision AI doesn't have the information you need, it will tell you honestly. You can also access our Resource Library for original documentation or reach out to InMode support directly for device-specific technical issues."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Envision AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
            <a href="#who-its-for" className="text-gray-400 hover:text-white transition">Who's This For?</a>
            <Link to="/demo" className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Watch Demo
            </Link>
          </div>

          <button
            className="md:hidden text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-4">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#who-its-for" className="block text-gray-400 hover:text-white">Who's This For?</a>
            <Link to="/demo" className="block bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg font-medium text-center">
              Watch Demo
            </Link>
          </div>
        )}
      </nav>

      {/* Hero + Devices Wrapper with Video Background */}
      <div className="relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/ENVISION-ANIMATED.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/30 to-gray-950"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Trusted by Eye Care Professionals Worldwide</span>
            </div>

            {/* Blinking Eye */}
            <div className="flex justify-center mb-6">
              <Eye className="w-16 h-16 text-blue-400 blinking-eye" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI-Powered Clinical Support for {' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Envision
              </span>{' '}
              Users
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              The clinical knowledge of a dry eye specialist, available 24/7. Treatment protocols, device settings, contraindications, and consultation frameworks — all in one AI-powered platform.
            </p>

            <div className="flex items-center justify-center">
              <Link to="/demo" className="border-2 border-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-green-500 hover:text-green-500 transition flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </Link>
            </div>
          </div>

          </div>
        </section>

        {/* Devices Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-blue-400 font-semibold mb-2 tracking-wide">POWERED BY INMODE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Ultimate Guide for Every Handpiece
            </h2>
          </div>

          {/* Rotating border container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Rotating glow border */}
            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rotating-border"></div>
            </div>
            {/* Inner container */}
            <div className="relative grid md:grid-cols-3 gap-1 bg-gray-800/30 rounded-2xl p-1">
            {/* Forma I */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-5 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="mb-4 flex items-center justify-center h-32">
                  <img
                    src="/images/i.shgcdn.webp"
                    alt="Forma I Handpiece"
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium mb-2">
                    RADIOFREQUENCY
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">Forma I</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Treatment Focus</p>
                  <p className="text-sm text-gray-300 mt-1">Meibomian Gland Dysfunction</p>
                </div>
              </div>
            </div>

            {/* Lumecca I */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-5 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="mb-4 flex items-center justify-center h-32">
                  <img
                    src="/images/Lumecca-I-Handpiece.png"
                    alt="Lumecca I Handpiece"
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 font-medium mb-2">
                    INTENSE PULSED LIGHT
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">Lumecca I</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Treatment Focus</p>
                  <p className="text-sm text-gray-300 mt-1">Demodex & Inflammation</p>
                  <p className="text-sm text-gray-300">Meibomian Gland Dysfunction</p>
                  <p className="text-sm text-gray-300">Rosacea</p>
                </div>
              </div>
            </div>

            {/* Morpheus8 */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-5 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="mb-4 flex items-center justify-center h-32">
                  <img
                    src="/images/64614114-0-Morpheus8-handpiece-.png"
                    alt="Morpheus8 Handpiece"
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 font-medium mb-2">
                    MICRONEEDLING RF
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">Morpheus8</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Treatment Focus</p>
                  <p className="text-sm text-gray-300 mt-1">Collagen Stimulation</p>
                  <p className="text-sm text-gray-300">Dermatochalasis</p>
                  <p className="text-sm text-gray-300">Skin Tightening</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          </div>
        </section>
      </div>

      {/* SECTION A: The Problem Section - Floating Problem Cards */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Main content area with floating cards */}
          <div className="relative min-h-[auto] lg:min-h-[600px] flex items-center justify-center">

            {/* Floating problem cards - positioned around the center */}
            {/* Card 1 - Top Left */}
            <div className="hidden lg:block absolute top-0 left-0 lg:left-[5%] floating-card-1">
              <div className="group bg-gray-900/90 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 max-w-[240px] hover:border-red-500/40 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">200-page manuals</p>
                    <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">Flipping through docs mid-treatment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div className="hidden lg:block absolute top-8 right-0 lg:right-[5%] floating-card-2">
              <div className="group bg-gray-900/90 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 max-w-[240px] hover:border-orange-500/40 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">On hold with support</p>
                    <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">Waiting for simple answers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Middle Left */}
            <div className="hidden lg:block absolute top-1/3 left-0 lg:left-[2%] floating-card-3">
              <div className="group bg-gray-900/90 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 max-w-[240px] hover:border-yellow-500/40 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Guessing settings</p>
                    <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">Uncertain about skin types</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Middle Right */}
            <div className="hidden lg:block absolute top-1/2 right-0 lg:right-[3%] floating-card-4">
              <div className="group bg-gray-900/90 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 max-w-[240px] hover:border-red-500/40 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Inconsistent protocols</p>
                    <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">Staff doing things differently</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Bottom Left */}
            <div className="hidden lg:block absolute bottom-16 left-0 lg:left-[8%] floating-card-5">
              <div className="group bg-gray-900/90 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 max-w-[240px] hover:border-orange-500/40 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Months to train staff</p>
                    <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">Slow onboarding process</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Bottom Right */}
            <div className="hidden lg:block absolute bottom-8 right-0 lg:right-[10%] floating-card-6">
              <div className="group bg-gray-900/90 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 max-w-[240px] hover:border-yellow-500/40 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Missed contraindications</p>
                    <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">Forgetting during consults</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Managing Dry Eye Treatments{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Shouldn't Be This Hard
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                You invested in premium InMode technology. But without instant access to expert protocols, you're leaving treatment quality and revenue on the table.
              </p>

              {/* Solution hint */}
              <div className="relative inline-flex group cursor-pointer">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full px-8 py-4 text-lg font-semibold">
                  <Zap className="w-6 h-6 text-white" />
                  <span className="text-white">Envision AI solves all of this</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Feature Deep Dive - AI Clinical Assistant */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-blue-500/10">
                <img src="/images/chat-interface.png" alt="AI Chat Interface" className="w-full h-auto" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">AI Clinical Assistant</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your AI Clinical Expert,{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Available 24/7
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8">
                Ask anything about dry eye treatment protocols, device settings, contraindications, or patient consultations — get expert-backed answers in seconds.
              </p>

              <div className="space-y-3">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">What you can ask:</p>
                {[
                  '"What Lumecca settings should I use for a Fitzpatrick IV patient?"',
                  '"Is IPL safe for a patient on doxycycline?"',
                  '"How do I explain RF treatment benefits to a skeptical patient?"',
                  '"What\'s the post-treatment protocol for Demodex?"',
                  '"When should I adjust temperature settings on Forma I?"'
                ].map((question, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 hover:border-blue-500/50 transition-colors">
                    {question}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Feature Deep Dive - Treatment Calculator */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Treatment Calculator</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Precise Treatment Settings{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  in Seconds
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8">
                Stop guessing. Input your patient's characteristics and get exact device parameters instantly.
              </p>

              {/* Input → Output Flow */}
              <div className="space-y-6">
                {/* Inputs */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <p className="text-sm text-blue-400 font-semibold mb-4 uppercase tracking-wider">Inputs</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Fitzpatrick Skin Type (I-VI)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Activity className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Meibomian Gland Dropout %</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">SPK Staining Score</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Associated Conditions</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white rotate-90" />
                  </div>
                </div>

                {/* Outputs */}
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-xl p-6">
                  <p className="text-sm text-cyan-400 font-semibold mb-4 uppercase tracking-wider">Outputs</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Thermometer className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Forma I temperature & count</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Lumecca I joules by session</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Activity className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Cooling/pulse width settings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Safety warnings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="lg:scale-125 lg:translate-x-8">
              <div className="rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-cyan-500/10">
                <img src="/images/Tx-Calculator.png" alt="Treatment Calculator" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C2: Feature Deep Dive - Resource Library */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="lg:scale-110 lg:-translate-x-4">
              <div className="rounded-2xl border border-gray-700 overflow-hidden shadow-2xl shadow-blue-500/10">
                <img src="/images/resource-library.png" alt="Resource Library" className="w-full h-auto" />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Resource Library</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Every Document You Need,{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Instantly Accessible
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8">
                Stop digging through folders and emails. Access video demonstrations, consent forms, case studies, and training materials all in one searchable library.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">What's included:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Patient consent forms",
                    "Contraindications checklists",
                    "Full treatment video tutorials",
                    "Device operation manual",
                    "Case study references",
                    "Clinical supplies list",
                    "Consultation frameworks",
                    "Access to Dr. Dornn's Masterclass"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 hover:border-blue-500/50 transition-colors">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Circular Hub */}
      <section id="features" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Treat with Confidence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed specifically for eye care professionals using InMode's Envision device.
            </p>
          </div>

          {/* Circular Hub Layout */}
          <div className="relative">
            {/* Center Hub */}
            <div className="flex justify-center mb-12 lg:mb-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
              <div className="relative">
                {/* Glowing rings - enhanced pulsation */}
                <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-xl hub-pulse"></div>
                <div className="absolute -inset-4 w-48 h-48 rounded-full border border-blue-500/30 hub-ring-1"></div>
                <div className="absolute -inset-8 w-56 h-56 rounded-full border border-cyan-500/20 hub-ring-2"></div>
                <div className="absolute -inset-12 w-64 h-64 rounded-full border border-blue-500/10 hub-ring-3"></div>

                {/* Center content */}
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-blue-500/50 flex flex-col items-center justify-center hub-center">
                  <Eye className="w-10 h-10 text-blue-400 mb-2" />
                  <span className="text-sm font-bold text-white">Envision AI</span>
                  <span className="text-xs text-gray-500">Platform</span>
                </div>
              </div>
            </div>

            {/* Features Grid - wraps around center on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Feature 1 - AI Clinical Assistant */}
              <div className="group lg:text-right lg:pr-8">
                <div className="flex items-start gap-4 lg:flex-row-reverse">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                    <MessageCircle className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">AI Clinical Assistant</h3>
                    <p className="text-gray-500 text-sm">
                      Get instant answers about protocols, device settings, and contraindications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Treatment Calculator */}
              <div className="group lg:text-left lg:pl-8 lg:col-start-3">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <Calculator className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Treatment Calculator</h3>
                    <p className="text-gray-500 text-sm">
                      Get precise joules, temperature, and protocol settings instantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Video Demonstrations */}
              <div className="group lg:text-right lg:pr-8">
                <div className="flex items-start gap-4 lg:flex-row-reverse">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                    <Video className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Video Demonstrations</h3>
                    <p className="text-gray-500 text-sm">
                      Watch expert treatment videos for all Envision handpieces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spacer for center hub on desktop */}
              <div className="hidden lg:block"></div>

              {/* Feature 4 - Resource Library */}
              <div className="group lg:text-left lg:pl-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <FileText className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Resource Library</h3>
                    <p className="text-gray-500 text-sm">
                      Consent forms, documents, and case studies in one place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 - Voice Input */}
              <div className="group lg:text-right lg:pr-8">
                <div className="flex items-start gap-4 lg:flex-row-reverse">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                    <Mic className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Voice Input</h3>
                    <p className="text-gray-500 text-sm">
                      Ask questions hands-free.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6 - Masterclass Access */}
              <div className="group lg:text-left lg:pl-8 lg:col-start-3">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <BookOpen className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Masterclass Access</h3>
                    <p className="text-gray-500 text-sm">
                      Dr. Dornn's comprehensive training and certification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 7 - EMR-Ready Settings */}
              <div className="group lg:text-right lg:pr-8">
                <div className="flex items-start gap-4 lg:flex-row-reverse">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                    <ClipboardCopy className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">EMR-Ready Settings</h3>
                    <p className="text-gray-500 text-sm">
                      Copy and paste treatment settings directly into your EMR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 8 - Conversation History */}
              <div className="group lg:text-left lg:pl-8 lg:col-start-3">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <History className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Conversation History</h3>
                    <p className="text-gray-500 text-sm">
                      All your queries saved for future reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 90%, 100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }
        .blinking-eye {
          animation: blink 5s infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotating-border {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            #3b82f6 30deg,
            #22d3ee 60deg,
            transparent 90deg,
            transparent 360deg
          );
          animation: rotate 4s linear infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes hubPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        @keyframes hubRingPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.6;
          }
        }
        @keyframes hubCenterPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(34, 211, 238, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(34, 211, 238, 0.3);
          }
        }
        .hub-pulse {
          animation: hubPulse 2s ease-in-out infinite;
        }
        .hub-ring-1 {
          animation: hubRingPulse 2s ease-in-out infinite;
        }
        .hub-ring-2 {
          animation: hubRingPulse 2s ease-in-out infinite;
          animation-delay: 0.3s;
        }
        .hub-ring-3 {
          animation: hubRingPulse 2s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        .hub-center {
          animation: hubCenterPulse 2s ease-in-out infinite;
        }
        .floating-card-1 {
          animation: float 4s ease-in-out infinite;
        }
        .floating-card-2 {
          animation: float 4.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .floating-card-3 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .floating-card-4 {
          animation: float 4.2s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .floating-card-5 {
          animation: float 4.8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .floating-card-6 {
          animation: float 4.3s ease-in-out infinite;
          animation-delay: 0.8s;
        }
      `}</style>

      {/* SECTION E: Who It's For - Timeline Style */}
      <section id="who-its-for" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Every Role in Your Practice
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you're just getting started or scaling your dry eye services, Envision AI adapts to your needs.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 md:-translate-x-1/2"></div>

            {/* Timeline Item 1 - New Owners */}
            <div className="relative flex flex-col md:flex-row items-start mb-16 group">
              {/* Left content (desktop) */}
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold mb-2">New Envision Owners</h3>
                <p className="text-gray-400 mb-4">
                  Just invested in InMode technology? Get up to speed 10x faster. Learn protocols, understand settings, and start treating patients confidently from day one.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Center icon */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gray-950 border-4 border-blue-500 rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-blue-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Right content (desktop) / Mobile content */}
              <div className="md:w-1/2 md:pl-12 pl-24">
                <div className="md:hidden">
                  <h3 className="text-2xl font-bold mb-2">New Envision Owners</h3>
                  <p className="text-gray-400 mb-4">
                    Just invested in InMode technology? Get up to speed 10x faster. Learn protocols, understand settings, and start treating patients confidently from day one.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                    Start Learning
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="hidden md:flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Learn protocols</span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Understand settings</span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Build confidence</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Practitioners */}
            <div className="relative flex flex-col md:flex-row items-start mb-16 group">
              {/* Left content (desktop) - tags */}
              <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end">
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Quick reference</span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Verify settings</span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Optimize protocols</span>
                </div>
              </div>

              {/* Center icon */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gray-950 border-4 border-cyan-500 rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
                <Star className="w-7 h-7 text-cyan-400 group-hover:text-blue-400 transition-colors" />
              </div>

              {/* Right content */}
              <div className="md:w-1/2 md:pl-12 pl-24">
                <h3 className="text-2xl font-bold mb-2">Experienced Practitioners</h3>
                <p className="text-gray-400 mb-4">
                  Already treating patients? Use Envision AI as your quick-reference guide. Double-check settings, refresh on contraindications, and optimize your protocols.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  Enhance Your Practice
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Timeline Item 3 - Clinical Staff */}
            <div className="relative flex flex-col md:flex-row items-start group">
              {/* Left content (desktop) */}
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold mb-2">Clinical Staff & Technicians</h3>
                <p className="text-gray-400 mb-4">
                  Empower your entire team. Staff can answer patient questions, prep for treatments, and follow protocols accurately — without pulling you out of the exam room.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  Train Your Team
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Center icon */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gray-950 border-4 border-blue-500 rounded-full flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                <Users className="w-7 h-7 text-blue-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Right content (desktop) / Mobile content */}
              <div className="md:w-1/2 md:pl-12 pl-24">
                <div className="md:hidden">
                  <h3 className="text-2xl font-bold mb-2">Clinical Staff & Technicians</h3>
                  <p className="text-gray-400 mb-4">
                    Empower your entire team. Staff can answer patient questions, prep for treatments, and follow protocols accurately — without pulling you out of the exam room.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                    Train Your Team
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="hidden md:flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Answer questions</span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Prep treatments</span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Follow protocols</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: FAQ Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about Envision AI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-colors"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              See how Envision AI can help you deliver better dry eye treatments with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo" className="w-full sm:w-auto border-2 border-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-green-500 hover:text-green-500 transition flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </Link>
              <a href="mailto:admin@askenvisionai.com" className="w-full sm:w-auto text-gray-400 hover:text-white transition">
                Contact Sales →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Envision AI</span>
            </div>

            <div className="flex items-center gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Support</a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 Envision AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
