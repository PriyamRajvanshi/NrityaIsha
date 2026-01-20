
const BlogPreview = () => {
  const blogPosts = [
    {
      title: '5 Surprising reasons to start a classical dance class Today',
      excerpt: 'Why Classical Dance Is More Than Just Dancing Hey there! Have you ever seen someone twirl, jump, and strike beautiful poses like a graceful...',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
    },
    {
      title: 'What is an Arangetram/Rangapravesam',
      excerpt: 'The term Arangetram comes from Tamil, where "Arangu" means stage and "Etram" means ascending. Rangapravesam is also a similar word where "Rangam"...',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
    },
    {
      title: 'Divinity as Inspiration: Exploring the Divine\'s Role in the Art',
      excerpt: 'Classical dance has a deep-rooted connection with divinity. Originating in the temples, it represents a beautiful blend of spirituality and artistry...',
      image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Latest from our Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <button
              key={index}
              onClick={() => document.getElementById('blog').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-primary-600 font-medium text-sm group-hover:underline">
                  Read More →
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('blog').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview

