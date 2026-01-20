
import { useState } from 'react'

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const blogPosts = [
    {
      title: '5 Surprising reasons to start a classical dance class Today',
      excerpt: 'Why Classical Dance Is More Than Just Dancing Hey there! Have you ever seen someone twirl, jump, and strike beautiful poses like a graceful...',
      category: 'Getting Started',
      date: 'January 15, 2024',
      content: `
        <h2>Why Classical Dance Is More Than Just Dancing</h2>
        <p>Hey there! Have you ever seen someone twirl, jump, and strike beautiful poses like a graceful swan on stage? That's the magic of classical dance. But beyond the visual spectacle, classical dance offers profound benefits that touch every aspect of your life.</p>

        <h3>1. Enhanced Physical Fitness and Flexibility</h3>
        <p>Classical dance demands strength, balance, and incredible flexibility. Regular practice builds muscle tone, improves posture, and increases overall body awareness. Many students find themselves becoming more coordinated and physically capable than they ever imagined.</p>

        <h3>2. Mental Discipline and Focus</h3>
        <p>Mastering complex movements requires intense concentration and mental discipline. This mental training extends beyond the dance studio, helping you develop better focus in all areas of life, from work to personal relationships.</p>

        <h3>3. Cultural Appreciation and Heritage</h3>
        <p>Classical dance is a living connection to ancient traditions and cultural heritage. Learning these forms connects you to centuries of artistic expression and helps preserve cultural traditions for future generations.</p>

        <h3>4. Emotional Expression and Healing</h3>
        <p>Dance provides a powerful outlet for emotional expression. The combination of movement, music, and storytelling can be deeply therapeutic, helping you process emotions and find inner peace.</p>

        <h3>5. Community and Connection</h3>
        <p>Joining a dance class means becoming part of a supportive community. You'll meet like-minded people, form lasting friendships, and share in the joy of artistic expression together.</p>

        <p>Ready to discover the transformative power of classical dance? Your journey starts with that first graceful step!</p>
      `,
    },
    {
      title: 'What is an Arangetram/Rangapravesam',
      excerpt: 'The term Arangetram comes from Tamil, where "Arangu" means stage and "Etram" means ascending. Rangapravesam is also a similar word where "Rangam"...',
      category: 'Culture',
      date: 'January 10, 2024',
      content: `
        <h2>Understanding Arangetram and Rangapravesam</h2>
        <p>The term <strong>Arangetram</strong> comes from Tamil, where "Arangu" means stage and "Etram" means ascending. It literally translates to "ascending the stage" or "debut performance." This marks the completion of a student's formal training and their first public performance as a professional dancer.</p>

        <h3>The Significance of Arangetram</h3>
        <p>An Arangetram is more than just a performance—it's a rite of passage. It represents years of dedication, countless hours of practice, and the mastery of complex techniques. The dancer presents a repertoire that showcases their skills in various aspects of classical dance.</p>

        <h3>The Ceremony</h3>
        <p>The Arangetram typically includes:</p>
        <ul>
          <li><strong>Puja (Prayer)</strong> - Seeking blessings from deities</li>
          <li><strong>Guru Vandana</strong> - Paying respects to the teacher</li>
          <li><strong>Various Items</strong> - Showcasing different dance forms and techniques</li>
          <li><strong>Mangalam</strong> - Auspicious conclusion</li>
        </ul>

        <h3>Rangapravesam</h3>
        <p><strong>Rangapravesam</strong> is the Telugu equivalent, where "Rangam" means stage and "Pravesam" means entry. Though the terminology differs, the essence remains the same—a celebratory debut performance marking the transition from student to artist.</p>

        <p>Both Arangetram and Rangapravesam represent the culmination of years of learning and the beginning of a lifelong journey in the world of classical dance.</p>
      `,
    },
    {
      title: 'Divinity as Inspiration: Exploring the Divine\'s Role in the Art',
      excerpt: 'Classical dance has a deep-rooted connection with divinity. Originating in the temples, it represents a beautiful blend of spirituality and artistry...',
      category: 'Philosophy',
      date: 'January 5, 2024',
      content: `
        <h2>The Divine Connection in Classical Dance</h2>
        <p>Classical dance has a deep-rooted connection with divinity. Originating in the temples of ancient India, it represents a beautiful blend of spirituality and artistry that continues to inspire dancers and audiences alike.</p>

        <h3>Temple Origins</h3>
        <p>Indian classical dance forms originated as offerings to deities in temple settings. Dance was not merely entertainment but a form of worship, a way to connect with the divine through movement and expression.</p>

        <h3>Spiritual Significance</h3>
        <p>Each movement, gesture, and expression in classical dance carries spiritual meaning:</p>
        <ul>
          <li><strong>Mudras (Hand Gestures)</strong> - Symbolic representations of divine qualities</li>
          <li><strong>Bhava (Expressions)</strong> - Emotional states that connect human and divine</li>
          <li><strong>Nritta (Pure Dance)</strong> - Abstract movements representing cosmic rhythms</li>
          <li><strong>Nritya (Expressive Dance)</strong> - Storytelling with spiritual themes</li>
        </ul>

        <h3>The Dancer as Devadasi</h3>
        <p>Traditionally, dancers were considered "Devadasis" or servants of the divine. Their art was a form of spiritual service, bridging the gap between human and divine realms.</p>

        <h3>Modern Relevance</h3>
        <p>Today, this divine inspiration continues to guide classical dancers. The spiritual foundation provides depth and meaning, transforming dance from mere movement into a profound meditative practice.</p>

        <p>The divine essence of classical dance reminds us that art, at its highest level, connects us to something greater than ourselves.</p>
      `,
    },
    {
      title: 'The Iconic Pose: Symbolism and Significance',
      excerpt: 'Classical dance is deeply rooted in spirituality, storytelling, and intricate symbolism. One of the most iconic poses represents...',
      category: 'Technique',
      date: 'December 28, 2023',
      content: `
        <h2>The Power of Symbolic Poses in Classical Dance</h2>
        <p>Classical dance is deeply rooted in spirituality, storytelling, and intricate symbolism. Every pose, gesture, and movement carries layers of meaning that connect the dancer to ancient traditions and divine narratives.</p>

        <h3>The Ardha Mandali Pose</h3>
        <p>One of the most iconic poses is the <strong>Ardha Mandali</strong>, where the dancer forms a half-circle with their arms. This pose symbolizes:</p>
        <ul>
          <li>The cycle of life and rebirth</li>
          <li>The connection between human and divine</li>
          <li>Completeness and harmony</li>
        </ul>

        <h3>Tribhangi: The Triple Bend</h3>
        <p>The <strong>Tribhangi</strong> pose divides the body into three equal parts, representing the three worlds in Hindu cosmology: Bhuloka (earth), Antariksha (atmosphere), and Swargaloka (heaven).</p>

        <h3>Symbolism in Movement</h3>
        <p>Beyond static poses, classical dance uses symbolic movements:</p>
        <ul>
          <li><strong>Circular movements</strong> represent the cycle of life</li>
          <li><strong>Upward gestures</strong> symbolize spiritual ascension</li>
          <li><strong>Grounded stances</strong> connect to earthly stability</li>
        </ul>

        <p>Each pose tells a story, carries philosophical meaning, and connects the performer to centuries of artistic and spiritual tradition.</p>
      `,
    },
    {
      title: 'How to Practise at Home: Tips for Online Learners',
      excerpt: 'With the rise of online resources and virtual classes post pandemic, learning art forms online have become more accessible to learners...',
      category: 'Practice',
      date: 'December 20, 2023',
      content: `
        <h2>Mastering Classical Dance from Home</h2>
        <p>With the rise of online resources and virtual classes post-pandemic, learning classical dance at home has become more accessible than ever. However, successful home practice requires structure, discipline, and the right approach.</p>

        <h3>Create a Dedicated Space</h3>
        <p>Set up a specific area for practice:</p>
        <ul>
          <li>Clear, open space with good ventilation</li>
          <li>Non-slip surface (yoga mat or carpet)</li>
          <li>Full-length mirror for self-correction</li>
          <li>Good lighting to see your movements clearly</li>
        </ul>

        <h3>Establish a Routine</h3>
        <p>Consistency is key:</p>
        <ul>
          <li>Set fixed practice times each day</li>
          <li>Start with warm-up exercises</li>
          <li>Break practice into focused segments</li>
          <li>End with cool-down stretches</li>
        </ul>

        <h3>Essential Tools for Home Practice</h3>
        <ul>
          <li><strong>Recording device</strong> to review your practice</li>
          <li><strong>Metronome</strong> for rhythm practice</li>
          <li><strong>Practice notebook</strong> to track progress</li>
          <li><strong>Online resources</strong> for reference and inspiration</li>
        </ul>

        <h3>Common Challenges and Solutions</h3>
        <ul>
          <li><strong>Limited space</strong>: Focus on upper body and facial expressions</li>
          <li><strong>No teacher</strong>: Record yourself and compare with tutorials</li>
          <li><strong>Motivation</strong>: Set small goals and reward achievements</li>
        </ul>

        <p>Remember, home practice is about steady progress, not perfection. Stay patient, stay consistent, and enjoy the journey!</p>
      `,
    },
    {
      title: '5 Important Tips for Dancers before stepping on Stage',
      excerpt: 'How to Improve Your Performance: Essential Tips for Dancers. Classical dance combines grace, technique, and expression. Here are...',
      category: 'Performance',
      date: 'December 15, 2023',
      content: `
        <h2>Essential Pre-Performance Preparation</h2>
        <p>The moments before stepping on stage can make or break your performance. Here are five crucial tips to ensure you shine when the spotlight hits.</p>

        <h3>1. Master Your Breathing</h3>
        <p>Proper breathing is essential for control and expression:</p>
        <ul>
          <li>Practice deep diaphragmatic breathing</li>
          <li>Use breath control for emotional expression</li>
          <li>Calm nerves through rhythmic breathing patterns</li>
        </ul>

        <h3>2. Warm Up Thoroughly</h3>
        <p>A proper warm-up prevents injury and ensures peak performance:</p>
        <ul>
          <li>Start with gentle stretches</li>
          <li>Practice basic movements at half speed</li>
          <li>Focus on joints and muscle groups</li>
          <li>Include facial exercises for expressions</li>
        </ul>

        <h3>3. Mental Preparation</h3>
        <p>Your mindset is as important as your physical preparation:</p>
        <ul>
          <li>Visualize successful performance</li>
          <li>Focus on the joy of dancing, not perfection</li>
          <li>Remember why you love this art form</li>
        </ul>

        <h3>4. Technical Check</h3>
        <p>Ensure everything is performance-ready:</p>
        <ul>
          <li>Costume and accessories properly fitted</li>
          <li>Footwear comfortable and secure</li>
          <li>Props and music cues prepared</li>
        </ul>

        <h3>5. Connect with Your Audience</h3>
        <p>Remember, dance is communication:</p>
        <ul>
          <li>Make eye contact when appropriate</li>
          <li>Feel the energy of the audience</li>
          <li>Dance from the heart, not just technique</li>
        </ul>

        <p>Preparation transforms good dancers into great performers. Take these moments seriously, and the stage will become your greatest ally.</p>
      `,
    },
    {
      title: 'Can I Learn at Home? A Comprehensive Guide',
      excerpt: 'To answer the above question, two important differences must be understood - (i)assisted learning (ii)self learning...',
      category: 'Learning',
      date: 'December 10, 2023',
      content: `
        <h2>Learning Classical Dance at Home: A Complete Guide</h2>
        <p>The question "Can I learn classical dance at home?" is common in today's digital age. The answer is yes, but success depends on understanding the differences between assisted and self-learning.</p>

        <h3>Assisted Learning vs. Self-Learning</h3>
        <p><strong>Assisted Learning:</strong> Working with a qualified teacher who can:</p>
        <ul>
          <li>Correct your technique in real-time</li>
          <li>Provide personalized feedback</li>
          <li>Guide you through complex concepts</li>
          <li>Motivate and inspire you</li>
        </ul>

        <p><strong>Self-Learning:</strong> Using online resources independently:</p>
        <ul>
          <li>Video tutorials and demonstrations</li>
          <li>Practice without immediate correction</li>
          <li>Slower progress due to trial and error</li>
          <li>Requires strong self-discipline</li>
        </ul>

        <h3>When Home Learning Works Best</h3>
        <ul>
          <li>As a supplement to regular classes</li>
          <li>For maintaining existing skills</li>
          <li>For basic foundation building</li>
          <li>When professional instruction isn't available</li>
        </ul>

        <h3>Challenges of Home Learning</h3>
        <ul>
          <li><strong>Self-correction</strong>: Hard to identify mistakes</li>
          <li><strong>Motivation</strong>: Easy to skip practice</li>
          <li><strong>Technique development</strong>: May develop bad habits</li>
          <li><strong>Assessment</strong>: No objective evaluation</li>
        </ul>

        <h3>Making Home Learning Effective</h3>
        <ul>
          <li>Use multiple camera angles for self-assessment</li>
          <li>Record practice sessions regularly</li>
          <li>Join online communities for feedback</li>
          <li>Set realistic goals and track progress</li>
          <li>Consider periodic professional evaluation</li>
        </ul>

        <p>Home learning can be effective, but the best results come from combining self-practice with professional guidance whenever possible.</p>
      `,
    },
    {
      title: 'The Essential Guide to Starting Lessons Abroad',
      excerpt: 'Classical dance is not just an art; it\'s a beautiful expression of culture, tradition, and spirituality. Starting your journey abroad...',
      category: 'Getting Started',
      date: 'December 5, 2023',
      content: `
        <h2>Beginning Your Classical Dance Journey Abroad</h2>
        <p>Classical dance is not just an art; it's a beautiful expression of culture, tradition, and spirituality. Starting your journey abroad brings unique challenges and opportunities.</p>

        <h3>Understanding Cultural Context</h3>
        <p>Before beginning lessons abroad:</p>
        <ul>
          <li>Learn about the cultural significance of the dance form</li>
          <li>Understand basic terminology in the original language</li>
          <li>Research the historical context and traditions</li>
          <li>Respect local customs and etiquette</li>
        </ul>

        <h3>Finding Quality Instruction</h3>
        <p>Locating authentic teachers abroad:</p>
        <ul>
          <li>Research certified institutions and teachers</li>
          <li>Check for lineage and traditional training methods</li>
          <li>Read reviews from other international students</li>
          <li>Visit multiple schools before committing</li>
        </ul>

        <h3>Language and Communication</h3>
        <p>Overcoming language barriers:</p>
        <ul>
          <li>Learn basic dance terminology</li>
          <li>Use translation apps during lessons</li>
          <li>Focus on visual learning and demonstration</li>
          <li>Find bilingual instructors when possible</li>
        </ul>

        <h3>Practical Considerations</h3>
        <ul>
          <li><strong>Cost of lessons</strong>: Varies significantly by country</li>
          <li><strong>Practice space</strong>: May need to find suitable venues</li>
          <li><strong>Costume and props</strong>: Sourcing authentic attire</li>
          <li><strong>Community</strong>: Building connections with local dancers</li>
        </ul>

        <h3>Mental Preparation</h3>
        <p>Be ready for:</p>
        <ul>
          <li>Cultural adjustment and homesickness</li>
          <li>Physical demands of intensive training</li>
          <li>Learning curve with new teaching methods</li>
          <li>Building patience and perseverance</li>
        </ul>

        <p>Learning classical dance abroad is a transformative experience that combines artistic growth with cultural immersion. Approach it with respect, dedication, and an open heart.</p>
      `,
    },
    {
      title: 'Exploring the Hand Gestures',
      excerpt: 'In the tapestry of classical dance, every movement holds meaning beyond its physicality. The art of dance, with its intricate...',
      category: 'Technique',
      date: 'November 28, 2023',
      content: `
        <h2>The Language of Hand Gestures in Classical Dance</h2>
        <p>In the tapestry of classical dance, every movement holds meaning beyond its physicality. The art of dance, with its intricate hand gestures, creates a visual language that tells stories and conveys emotions.</p>

        <h3>Hastas: The Hand Language</h3>
        <p><strong>Mudras</strong> or hand gestures are the alphabet of classical dance:</p>
        <ul>
          <li><strong>Asamyukta Hastas</strong>: Single-hand gestures (28 basic forms)</li>
          <li><strong>Samyukta Hastas</strong>: Two-hand gestures (23 combinations)</li>
          <li><strong>Nritta Hastas</strong>: Dance-specific gestures (many variations)</li>
        </ul>

        <h3>Common Gestures and Meanings</h3>
        <ul>
          <li><strong>Pataka</strong>: Flag - Used for commands, pointing, or emphasis</li>
          <li><strong>Tripataka</strong>: Three flags - Represents three eyes of Shiva</li>
          <li><strong>Ardhapataka</strong>: Half flag - For delicate expressions</li>
          <li><strong>Kartarimukha</strong>: Scissors mouth - For cutting or separation</li>
          <li><strong>Mayura</strong>: Peacock - Symbolizes beauty and grace</li>
          <li><strong>Varaha</strong>: Boar - Represents strength and determination</li>
        </ul>

        <h3>The Importance of Precision</h3>
        <p>Each gesture must be executed with precision:</p>
        <ul>
          <li>Fingers properly aligned and extended</li>
          <li>Thumb positioned correctly</li>
          <li>Wrist and arm positioning</li>
          <li>Timing and flow with body movements</li>
        </ul>

        <h3>Learning Hand Gestures</h3>
        <p>Mastering mudras requires:</p>
        <ul>
          <li>Regular practice with a mirror</li>
          <li>Understanding the symbolic meaning</li>
          <li>Coordination with facial expressions</li>
          <li>Integration with full body movements</li>
        </ul>

        <p>Hand gestures transform dance from mere movement into a sophisticated form of visual storytelling, where every finger position carries meaning and intention.</p>
      `,
    },
    {
      title: 'Can I Start Learning at 35?',
      excerpt: 'The world of classical dance, with its elegance, discipline, and deep cultural roots, often attracts enthusiasts of all ages...',
      category: 'Getting Started',
      date: 'November 20, 2023',
      content: `
        <h2>Age Is Just a Number: Starting Classical Dance at 35+</h2>
        <p>The world of classical dance, with its elegance, discipline, and deep cultural roots, often attracts enthusiasts of all ages. The question "Can I start learning at 35?" is not uncommon, and the answer is a resounding YES!</p>

        <h3>Advantages of Starting Later</h3>
        <p>Mature learners bring unique strengths:</p>
        <ul>
          <li><strong>Life experience</strong>: Better understanding of emotions and expressions</li>
          <li><strong>Discipline</strong>: Usually more committed and consistent</li>
          <li><strong>Patience</strong>: Better able to handle the learning curve</li>
          <li><strong>Financial stability</strong>: Can invest more time and resources</li>
        </ul>

        <h3>Physical Considerations</h3>
        <p>While age brings challenges, they're manageable:</p>
        <ul>
          <li><strong>Flexibility</strong>: May take longer but is achievable with consistent practice</li>
          <li><strong>Strength building</strong>: Adult bodies respond well to targeted training</li>
          <li><strong>Injury prevention</strong>: Mature learners are often more cautious</li>
          <li><strong>Body awareness</strong>: Adults understand their bodies better</li>
        </ul>

        <h3>Realistic Expectations</h3>
        <p>Be prepared for:</p>
        <ul>
          <li>Slower initial progress compared to children</li>
          <li>More time needed for muscle memory development</li>
          <li>Possible physical limitations to work around</li>
          <li>The joy of learning for personal fulfillment</li>
        </ul>

        <h3>Success Stories</h3>
        <p>Many successful dancers started in adulthood:</p>
        <ul>
          <li>Professional transitions to dance careers</li>
          <li>Personal growth and confidence building</li>
          <li>Therapeutic benefits and stress relief</li>
          <li>Community building and social connections</li>
        </ul>

        <h3>Practical Tips for Adult Learners</h3>
        <ul>
          <li>Start with beginner-friendly classes</li>
          <li>Consider private lessons for personalized pace</li>
          <li>Combine dance with strength training</li>
          <li>Listen to your body and rest when needed</li>
          <li>Celebrate small victories and progress</li>
        </ul>

        <p>It's never too late to start classical dance. Your life experience, maturity, and dedication are assets that will enrich your journey and deepen your appreciation for this beautiful art form.</p>
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

