
import { useState } from 'react'

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const blogPosts = [
    {
      title: 'The Thanjavur Quartet: Lineage, Legacy, and Learning',
      excerpt: 'Indian classical dance is not merely inherited through technique—it is transmitted through lineage, lived philosophy, and disciplined devotion...',
      category: 'History',
      date: 'January 15, 2025',
      content: `
        <p>Indian classical dance is not merely inherited through technique—it is transmitted through <strong>lineage, lived philosophy, and disciplined devotion</strong>. Few legacies embody this truth as powerfully as that of the <strong>Thanjavur Quartet</strong>.</p>

        <p>The Thanjavur Quartet—<strong>Chinnayya, Ponnayya, Sivanandam, and Vadivelu</strong>—were visionaries who shaped Bharatanatyam into the structured, expressive, and codified art form we recognize today. Their contributions span choreography, pedagogy, music, and performance grammar, laying the foundation for the <em>margam</em> system and elevating dance as both a spiritual and performative discipline. Every <em>adavus</em>, every <em>abhinaya nuance</em>, and every compositional choice carries echoes of their thought.</p>

        <p>To learn within this lineage is not simply to acquire skill—it is to absorb <strong>responsibility</strong>.</p>

        <p>I have been deeply fortunate to learn from the <strong>seventh generation of this lineage</strong>, from the family of <strong>Kitappa Pillai</strong>. This experience has been humbling in ways that transcend words. Training here is not rushed; it is rooted. Precision is demanded, but so is understanding—of why a movement exists, what it conveys, and how it must be carried forward with integrity.</p>

        <p>What struck me most was the quiet rigor of the pedagogy. Tradition was never presented as static, but as something living—requiring discipline, reflection, and reverence. Each correction carried centuries of refinement; each lesson reinforced that dance is not performance alone, but <strong>practice, patience, and purpose</strong>.</p>

        <p>This privilege has shaped not only how I dance, but how I think about art, lineage, and stewardship. To be part of such a continuum is to recognize that we are not owners of tradition—we are its temporary custodians.</p>

        <p>At NrityaIsha, this ethos guides everything we do: honoring where we come from, while preparing ourselves to carry the art forward with sincerity, depth, and humility.</p>
      `,
    },
    {
      title: 'Bharatanatyam Banis',
      excerpt: 'Bharatanatyam as we know it today evolved from the temple tradition of Sadir or Dasi Attam. While the core grammar remains the same...',
      category: 'History',
      date: 'January 10, 2024',
      content: `
        <p>Bharatanatyam as we know it today evolved from the temple tradition of Sadir or Dasi Attam. While the core grammar of Bharatanatyam remains the same across regions, the way it is taught, performed, and interpreted differs based on lineage. These stylistic traditions are known as <strong>banis</strong>.</p>

        <p>A bani reflects the aesthetic, technique, and pedagogical approach passed down through a Guru Parampara. It is not a separate form, but a way of inhabiting the same classical structure with distinct emphasis.</p>

        <h3>Pandanallur Bani</h3>
        <p>A bani known for its clarity, linear movements, and precision in footwork. Abhinaya is restrained and refined, allowing the music and structure to lead. Many compositions of the Thanjavur Quartet are central to this tradition.</p>

        <h3>Vazhuvur Bani</h3>
        <p>Vazhuvur style is lyrical and expansive. It emphasises graceful movements, expressive abhinaya, and dynamic use of space. The dance often feels fluid and musical, with attention to rhythm variations.</p>

        <h3>Melattur Bani</h3>
        <p>Rooted in temple and Bhagavata Mela traditions, this bani places strong emphasis on rhythm, characterisation, and expressive detail. It integrates nritta and abhinaya closely and allows interpretive depth.</p>

        <h3>Thanjavur Tradition</h3>
        <p>The Thanjavur lineage forms the foundation of most Bharatanatyam training today. The margam structure and much of the repertoire trace back to this tradition, making it central to the classical form.</p>

        <p>Institutions such as Kalakshetra represent modern pedagogical approaches shaped by traditional banis, particularly Pandanallur, adapted for structured classroom learning.</p>

        <p>Each bani carries the same soul of Bharatanatyam, expressed through different sensibilities. Understanding these traditions deepens practice and strengthens respect for lineage.</p>

        <p>At NrityaIsha, this awareness guides how we learn, practise, and pass the art forward.</p>
      `,
    },
    {
      title: 'From Temple to Stage',
      excerpt: 'Bharatanatyam did not begin as performance. It began as offering. In its early form, known as Sadir Attam, dance lived within temple spaces...',
      category: 'History',
      date: 'January 5, 2024',
      content: `
        <p>Bharatanatyam did not begin as performance.</p>

        <p>It began as offering.</p>

        <p>In its early form, known as Sadir Attam, dance lived within temple spaces. It was woven into ritual, season, and devotion. Movement was not designed to face an audience, but a deity. Expression was inward. Precision carried meaning because it served prayer.</p>

        <p>As social and political landscapes changed, these spaces shifted. Temple traditions declined, and with them, the visible presence of Sadir. What remained was the grammar of the form. The adavus, the abhinaya, the relationship between rhythm and stillness waited to be recontextualised.</p>

        <p>In the early twentieth century, Bharatanatyam began its journey to the public stage. Artists and scholars restructured the form, bringing it into proscenium spaces while preserving its classical framework. The margam was codified. Repertoire was curated. Teaching moved from private lineages into institutions.</p>

        <p>Figures such as Rukmini Devi Arundale played a significant role in shaping this transition, presenting Bharatanatyam as a classical art rooted in aesthetics, discipline, and cultural pride. What emerged was not a break from tradition, but a careful reframing of it.</p>

        <p>The stage changed how the dance was seen. It did not change why it mattered.</p>

        <p>Even today, when Bharatanatyam is performed under lights and before audiences, its foundation remains devotional. The body still holds the memory of ritual. The pauses still carry silence. The gaze still knows where it comes from.</p>

        <p>Understanding this journey from temple to stage reminds us that Bharatanatyam is both ancient and alive. It adapts without forgetting. It travels without losing its centre.</p>

        <p>At NrityaIsha, this awareness shapes how we practise. We train for performance, but we return to intention. Because every step on stage carries the echo of where the dance once began.</p>
      `,
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
                  <button
                    onClick={() => setSelectedBlog(post)}
                    className="text-primary-600 font-medium text-sm hover:underline inline-flex items-center"
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="section-padding bg-gray-50">
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
      </section> */}

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-2 inline-block">
                    {selectedBlog.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                    {selectedBlog.title}
                  </h2>
                  <p className="text-sm text-gray-500">{selectedBlog.date}</p>
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog

