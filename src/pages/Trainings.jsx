import { Link } from 'react-router-dom'

const Trainings = () => {
  const trainingPrograms = [
    {
      title: 'Essentials of Classical Dance',
      subtitle: 'Instruction & Evaluation Course',
      description: 'A comprehensive beginner-friendly online program to get you started. It offers a compendium of video, audio and written course materials.',
      features: [
        'Video Course Modules',
        'Text and Audio Materials',
        'Live Assessments and Evaluation',
        'Certification Program',
        'Flexible Scheduling',
      ],
      level: 'Beginner',
    },
    {
      title: 'One-to-One Intensive Sessions',
      description: 'Personalized sessions helping students to build unique learning style. Body conditioning exercise regimen for adult learners to equip for the physicality of movements.',
      features: [
        'Personalized Instruction',
        'Body Conditioning Exercises',
        'Individual Learning Style Focus',
        'Flexible Scheduling',
        'Performance Training',
      ],
      level: 'All Levels',
    },
    {
      title: 'Group Classes',
      description: 'Learn with peers in a supportive group environment. Classes are structured to further explore advanced concepts and enhance your unique skills.',
      features: [
        'Group Learning Environment',
        'Advanced Concepts',
        'Peer Interaction',
        'Regular Classes',
        'Performance Opportunities',
      ],
      level: 'Intermediate/Advanced',
    },
    {
      title: 'Certification Program',
      description: 'After 150+ hours of training, you are eligible to get certified from the International Dance Council (UNESCO) – Long Term Program Certification.',
      features: [
        '150+ Hours of Training',
        'International Certification',
        'UNESCO Recognition',
        'Comprehensive Evaluation',
        'Professional Credential',
      ],
      level: 'Advanced',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Training Programs
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Classes are inclusive, catered towards your needs. Our Programs are structured to help you grow individually. The virtual classes are flexible by way of enabling you to book your preferred slots from our scheduling calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {program.level}
                    </span>
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {program.title}
                    </h3>
                    {program.subtitle && (
                      <p className="text-primary-600 font-medium mb-2">
                        {program.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center block"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            What Makes Our Training Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Lessons Focused on Building Movement
              </h3>
              <p className="text-gray-600">
                We help learners build movement confidence and establish the traditional significance of the form.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Free Body Movements
              </h3>
              <p className="text-gray-600">
                Creative movement sequences taught for building vocabulary of classical dance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                Training in Choreography
              </h3>
              <p className="text-gray-600">
                Learn choreographic nuances and performance techniques from expert instructors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Book a Free Guidance Session!
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Take a free 30-minute guidance class, get to meet your Guru and learn more about how you learn with us.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Trainings

