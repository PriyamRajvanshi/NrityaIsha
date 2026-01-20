const GoGlobal = () => {
  return (
    <div>
      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our global community and connect with dancers and artists from around the world. Experience the beauty of classical dance across borders and cultures.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}

export default GoGlobal

