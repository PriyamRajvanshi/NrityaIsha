const Stats = () => {
  const stats = [
    { number: '18+', label: 'Years into Teaching' },
    { number: '100+', label: 'Performances' },
    { number: '500+', label: 'Students' },
    { number: '25+', label: 'Countries' },
  ]

  return (
    <section className="bg-primary-600 text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

