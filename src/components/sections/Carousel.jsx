import { useState, useEffect } from 'react'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Add your image filenames here (images should be placed in public/images/ folder)
  // Example: If you have image1.jpg, image2.jpg, image3.jpg in public/images/
  // Then use: '/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'
  const images = [
    '/images/Screenshot 2025-06-19 at 4.23.38 PM.png',
    '/images/Screenshot 2025-06-19 at 4.23.52 PM (2).png',
    // Add more image paths as needed
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play carousel
  useEffect(() => {
    if (images.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  // Don't render if no images
  if (images.length === 0) {
    return (
      <section className="relative bg-gray-100 overflow-hidden">
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
          <p className="text-gray-500">Please add images to public/images/ folder and update the images array in Carousel.jsx</p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Slides */}
        {images.map((imagePath, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full w-full">
              <img
                src={imagePath}
                alt={`Carousel slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 items-center justify-center">
                <p className="text-white text-lg">Image not found: {imagePath}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary-600 w-8'
                  : 'bg-white/80 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel

