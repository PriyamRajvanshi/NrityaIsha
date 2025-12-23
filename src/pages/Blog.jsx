import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      title: '5 Surprising reasons to start a classical dance class Today',
      excerpt: 'Why Classical Dance Is More Than Just Dancing Hey there! Have you ever seen someone twirl, jump, and strike beautiful poses like a graceful...',
      category: 'Getting Started',
      date: 'January 15, 2024',
    },
    {
      title: 'What is an Arangetram/Rangapravesam',
      excerpt: 'The term Arangetram comes from Tamil, where "Arangu" means stage and "Etram" means ascending. Rangapravesam is also a similar word where "Rangam"...',
      category: 'Culture',
      date: 'January 10, 2024',
    },
    {
      title: 'Divinity as Inspiration: Exploring the Divine\'s Role in the Art',
      excerpt: 'Classical dance has a deep-rooted connection with divinity. Originating in the temples, it represents a beautiful blend of spirituality and artistry...',
      category: 'Philosophy',
      date: 'January 5, 2024',
    },
    {
      title: 'The Iconic Pose: Symbolism and Significance',
      excerpt: 'Classical dance is deeply rooted in spirituality, storytelling, and intricate symbolism. One of the most iconic poses represents...',
      category: 'Technique',
      date: 'December 28, 2023',
    },
    {
      title: 'How to Practise at Home: Tips for Online Learners',
      excerpt: 'With the rise of online resources and virtual classes post pandemic, learning art forms online have become more accessible to learners...',
      category: 'Practice',
      date: 'December 20, 2023',
    },
    {
      title: '5 Important Tips for Dancers before stepping on Stage',
      excerpt: 'How to Improve Your Performance: Essential Tips for Dancers. Classical dance combines grace, technique, and expression. Here are...',
      category: 'Performance',
      date: 'December 15, 2023',
    },
    {
      title: 'Can I Learn at Home? A Comprehensive Guide',
      excerpt: 'To answer the above question, two important differences must be understood - (i)assisted learning (ii)self learning...',
      category: 'Learning',
      date: 'December 10, 2023',
    },
    {
      title: 'The Essential Guide to Starting Lessons Abroad',
      excerpt: 'Classical dance is not just an art; it\'s a beautiful expression of culture, tradition, and spirituality. Starting your journey abroad...',
      category: 'Getting Started',
      date: 'December 5, 2023',
    },
    {
      title: 'Exploring the Hand Gestures',
      excerpt: 'In the tapestry of classical dance, every movement holds meaning beyond its physicality. The art of dance, with its intricate...',
      category: 'Technique',
      date: 'November 28, 2023',
    },
    {
      title: 'Can I Start Learning at 35?',
      excerpt: 'The world of classical dance, with its elegance, discipline, and deep cultural roots, often attracts enthusiasts of all ages...',
      category: 'Getting Started',
      date: 'November 20, 2023',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore articles, tips, and insights about classical dance, learning techniques, and cultural significance.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-serif font-semibold mb-3 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="text-primary-600 font-medium text-sm hover:underline inline-flex items-center"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to get the latest articles and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

