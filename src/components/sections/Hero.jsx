import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Learn the art of{' '}
              <span className="text-primary-600">Classical Dance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              "The Science, Movement and Performance…"
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bringing to you centuries old art form through comprehensive learning and nurturing your artistic expression and cultural reverence. Offline and Online classes by expert instructors.
            </p>
            <Link to="/trainings" className="btn-primary text-lg px-8 py-4">
              Know more about our Trainings
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-serif text-2xl font-semibold">Dance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

