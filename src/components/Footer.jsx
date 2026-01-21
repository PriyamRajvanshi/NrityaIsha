
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="text-white font-serif text-lg font-semibold mb-4">About</h3>
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                Bringing centuries-old art form through comprehensive learning and nurturing artistic expression.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex-1">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    About
                  </button>
                </li>
                {/* <li>
                  <button
                    onClick={() => document.getElementById('performances').scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    Performances
                  </button>
                </li> */}
                <li>
                  <button
                    onClick={() => document.getElementById('blog').scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="flex-1">
              <div className="space-y-2">
                <p className="text-sm">Email: nitryaisha@gmail.com</p>
                <p className="text-sm">Phone: +91-7011235061</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © Copyrights 2022 – NitryaIsha. All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

