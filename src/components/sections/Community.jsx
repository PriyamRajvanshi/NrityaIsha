const Community = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Join The Community
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            We are proud to have reached millions of people and host thousands of subscribers (and counting) on YouTube. You will be part of a global community who shares the same passion and curiosity for this art-form that binds us beyond all as a culture.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold mb-1">48k+</div>
              <div className="text-sm text-primary-100">YouTube Subscribers</div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Subscribe on YouTube</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Community

