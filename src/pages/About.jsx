import { Link } from 'react-router-dom'
import Stats from '../components/sections/Stats'
import Approach from '../components/sections/Approach'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              About Our Dance School
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded with a vision to cultivate the importance of classical dance art forms. Our aim is to focus on teaching and promoting the performing art form among people across borders and identities for the sheer joy of celebration of cultural dance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                The foundation aims to provide cultural education of the art of dance by imparting the essence of the Guru-Sishya Parampara system through a contemporary approach. We want your journey towards self-expression to be a path of discovery and learning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As an important step to enhance your experience in learning and exploring classical dance, we wanted you to be inclusive of the Global Performing Arts scenario, and get access to the global performing arts communities along with an indigenous understanding of Indian – Classical Dance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Logo Story */}
      <section className="section-padding bg-gray-50">
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
      </section>

      <Approach />

      {/* Certifications */}
      <section className="section-padding bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our community and begin your path towards mastering the art of classical dance.
          </p>
          <Link to="/trainings" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
            Explore Our Trainings
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

