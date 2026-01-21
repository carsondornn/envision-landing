import { useState } from 'react'
import {
  Eye, Menu, Play, MessageCircle, Calculator, Video,
  FileText, Mic, BookOpen, Shield, Check, Zap,
  Lightbulb, X, Sparkles, Star, Users,
  ChevronDown, ArrowRight, AlertTriangle, Thermometer,
  Target, Activity
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
      answer: "Envision AI achieves 97% accuracy on clinical questions based on our testing. All information is sourced directly from verified clinical protocols and Dr. Dornn's treatment documentation. The AI will tell you when it doesn't have enough information to answer confidently."
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
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Get Started
            </a>
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
            <a href="#how-it-works" className="block text-gray-400 hover:text-white">How It Works</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
            <a href="#" className="block bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg font-medium text-center">
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Trusted by 100+ Eye Care Professionals</span>
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
              The clinical knowledge of a dry eye specialist, available 24/7. Protocols, settings, contraindications, and consultation frameworks — all in one AI-powered platform.
            </p>

            <div className="flex items-center justify-center">
              <a href="#" className="border border-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative max-h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none h-full"></div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-2 shadow-2xl shadow-blue-500/10">
              <img
                src="/images/app-preview.png"
                alt="Envision AI Interface"
                className="rounded-xl w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 border-y border-gray-800 bg-gradient-to-b from-gray-900/30 to-transparent relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
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
                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION A: The Problem Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Managing Dry Eye Treatments{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Shouldn't Be This Hard
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                You invested in premium InMode technology. But without instant access to expert protocols, you're leaving treatment quality and revenue on the table.
              </p>
            </div>

            {/* Right side - Pain points */}
            <div className="space-y-4">
              {[
                "Flipping through 200-page manuals mid-treatment to find the right settings",
                "Calling InMode support and waiting on hold for simple protocol questions",
                "Second-guessing joule settings for different Fitzpatrick skin types",
                "Forgetting contraindications during patient consultations",
                "Inconsistent treatment protocols across your clinical staff",
                "New staff taking months to get up to speed on device operation"
              ].map((pain, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/30 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-gray-300">{pain}</p>
                </div>
              ))}
            </div>
          </div>

          {/* With Envision AI Callout */}
          <div className="mt-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/30 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">With Envision AI</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Instant answers to any clinical question",
                "Precise settings calculated in seconds",
                "Complete protocol library at your fingertips",
                "Train staff 10x faster"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
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
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Powered by Dr. Dornn's clinical expertise and 15+ treatment protocols</span>
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
              <p className="mt-4 text-sm text-gray-500 text-center">
                Settings based on Dr. Dornn's proven treatment protocols used across 100+ practices
              </p>
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
              <p className="mt-4 text-sm text-gray-500 text-center">
                All your clinical documents organized and searchable in one place
              </p>
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
                Stop digging through folders and emails. Access consent forms, clinical protocols, case studies, and training materials all in one searchable library.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">What's included:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Patient consent forms",
                    "Pre & post-treatment checklists",
                    "Clinical protocol PDFs",
                    "Device operation guides",
                    "Staff training materials",
                    "Patient education handouts",
                    "Consultation frameworks",
                    "Case study references"
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
              Powerful features designed specifically for eye care professionals using InMode devices
            </p>
          </div>

          {/* Circular Hub Layout */}
          <div className="relative">
            {/* Center Hub */}
            <div className="flex justify-center mb-12 lg:mb-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
              <div className="relative">
                {/* Glowing rings */}
                <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl animate-pulse"></div>
                <div className="absolute -inset-4 w-48 h-48 rounded-full border border-blue-500/20"></div>
                <div className="absolute -inset-8 w-56 h-56 rounded-full border border-cyan-500/10"></div>

                {/* Center content */}
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-blue-500/50 flex flex-col items-center justify-center">
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
                      Watch expert treatment videos for all InMode procedures.
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
                      Consent forms, protocols, and case studies in one place.
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
                      Ask questions hands-free while treating patients.
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
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: What's Inside - Knowledge Base Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built on{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Real Clinical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Envision AI isn't just another chatbot. It's powered by comprehensive dry eye treatment documentation developed by leading specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Treatment Protocols */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Treatment Protocols</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Forma I RF Treatment Technique</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Lumecca I IPL Protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Morpheus8 Aesthetics Guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Demodex & Blepharitis Treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Chalazion Management</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Safety & Preparation */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Safety & Preparation</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Patient Preparation Checklists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Contraindications by Device</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Fitzpatrick Skin Type Guidelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Post-Treatment Care Protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Complication Management</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Practice Growth */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Practice Growth</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Patient Consultation Frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Pricing & ROI Strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Staff Training Guidelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Diagnostic Testing Protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Scaling Your Dry Eye Practice</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom badges */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Featuring protocols from:</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm">Dr. Dornn's Dry Eye Masterclass</span>
              <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm">InMode Clinical Documentation</span>
              <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm">Peer-Reviewed Research</span>
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
      `}</style>

      {/* SECTION E: Who It's For - Timeline Style */}
      <section className="py-24 px-6">
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
              Join hundreds of eye care professionals using Envision AI to deliver better dry eye treatments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition">
                Start Your Free Trial
              </a>
              <a href="#" className="w-full sm:w-auto text-gray-400 hover:text-white transition">
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
