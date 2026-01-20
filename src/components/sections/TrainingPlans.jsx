import { useState } from 'react'

const TrainingPlans = () => {
  const [isNewLearner, setIsNewLearner] = useState(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Are you new to learning Classical Dance?
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please select "No" only if you have learnt under the guidance of a Guru/Instructor at an Institution physically for at least 3 years
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setIsNewLearner(true)}
              className={`px-8 py-4 rounded-lg font-medium transition-all ${
                isNewLearner === true
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setIsNewLearner(false)}
              className={`px-8 py-4 rounded-lg font-medium transition-all ${
                isNewLearner === false
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-600'
              }`}
            >
              No
            </button>
          </div>

          {isNewLearner !== null && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold mb-4">
                The Training Plans we recommend for you is...
              </h3>
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-serif font-semibold mb-4">
                  Essentials of Classical Dance - Instruction & Evaluation Course
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Video Course Modules
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Text and Audio Materials
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Live Evaluation & Certification
                  </li>
                </ul>
              </div>
              <button
                onClick={() => document.getElementById('trainings').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-block"
              >
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TrainingPlans

