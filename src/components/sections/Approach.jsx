const Approach = () => {
  const approaches = [
    {
      title: 'Science',
      description: 'Learning the science of dance – origin, influence, propagation and evolution. The impact of history and literature, the reverence to artistic & musical lineage of the art form.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Movement',
      description: 'Improving body awareness by using vocabulary of traditional dance and creative movement. Body conditioning, strength training regimen to acclimatize to the form of movement sustainably.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Performance',
      description: 'Rendering techniques of performance – dramaturgy in dance, music and rhythm significance exploration, formatting and presenting repertoire with a thorough understanding of the exhibits.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Approach to Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging theory with empirical knowledge of performance art
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-4">{approach.icon}</div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                {approach.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach

