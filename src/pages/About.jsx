import Stats from '../components/sections/Stats'
import Approach from '../components/sections/Approach'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              About Our NitryaIsha
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded with a vision to cultivate the importance of classical dance art forms. Our aim is to focus on teaching and promoting the performing art form among people across borders and identities for the sheer joy of celebration of cultural dance.
            </p>
          </div>
        </div>
      </section> */}

      {/* Global Dance Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://tnsbfmudt4jtfb5d.public.blob.vercel-storage.com/about_1.jpeg"
                  alt="Iptisha - NrityaIsha Founder"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = e.target.nextSibling
                    if (placeholder) {
                      placeholder.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 items-center justify-center">
                  <div className="text-center p-4">
                    <svg
                      className="w-16 h-16 text-white mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-white text-sm">Add image: /images/global1.jpg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Iptisha
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Iptisha is shaped by fourteen years of uninterrupted sadhana since childhood in Indian classical dance. She mentored at Nritya Kaustubha, the school of Dr. Yamini Krishnamurti, and is rooted in the revered Thanjavur Quartet lineage. Through NrityaIsha, she has spent four years travelling across India, leading workshops that foster dialogue between classical and folk traditions. Teaching across schools, institutions, and community spaces, including work with underprivileged groups, her practice is dedicated to expanding access and reshaping how classical dance is perceived, understood, and lived.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
            {/* Text Content */}
            <div className="md:col-start-1 md:row-start-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Dr. Yamini Krishnamurti
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Yamini Krishnamurti is a legendary exponent of Bharatanatyam, Kuchipudi, and Odissi, widely credited with reviving Kuchipudi and redefining Bharatanatyam for modern stages. A trendsetter in rhythm, repertoire, and presentation, she brought Indian classical dance to national and international prominence. Honoured with the Padma Vibhushan and Sangeet Natak Akademi Fellowship, her work bridges temple tradition and contemporary performance.
              </p>
            </div>

            {/* Image */}
            <div className="md:col-start-2">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://tnsbfmudt4jtfb5d.public.blob.vercel-storage.com/about_2.jpeg"
                  alt="Dr. Yamini Krishnamurti - Legendary Bharatanatyam Exponent"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = e.target.nextSibling
                    if (placeholder) {
                      placeholder.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 items-center justify-center">
                  <div className="text-center p-4">
                    <svg
                      className="w-16 h-16 text-white mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-white text-sm">Add image: about_2.jpeg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Stats /> */}

      {/* Logo Story */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              Our Logo
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-serif text-4xl font-bold">D</span>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    The Cosmic Dance, our Logo was inspired by the interpretation of creation through dance, the prime mover of dance being the divine. Dance exists in every movement of the dancer and they are inseparable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Approach /> */}

      {/* Certifications */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            Our Affiliations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                International Dance Council (UNESCO)
              </h3>
              <p className="text-gray-600 mb-4">
                We are a proud member of the International Dance Council, a part of UNESCO. CID is an umbrella organization for all forms of dances, its schools, companies, and individuals in the world spanning 179 Countries.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                World Artistic Dance Federation
              </h3>
              <p className="text-gray-600 mb-4">
                Connecting with artists around the world, we are a registered member of the World Artistic Dance Federation. WADF is an International Forum whose aim is to create a true democratic organization for dancers, coaches and dance schools.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our community and begin your path towards mastering the art of classical dance.
          </p>
          <button
            onClick={() => document.getElementById('trainings').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4"
          >
            Explore Our Trainings
          </button>
        </div>
      </section> */}
    </div>
  )
}

export default About

