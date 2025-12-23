import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const GoGlobal = () => {
  const videoRef = useRef(null)
  const progressBarRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)

  const videoSrc = '/videos/NI.mov'

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleTimeUpdate = () => {
    if (videoRef.current && !isSeeking) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    if (!videoRef.current || !progressBarRef.current) return
    
    const progressBar = progressBarRef.current
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    const newTime = percentage * duration
    
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleSeekStart = () => {
    setIsSeeking(true)
  }

  const handleSeekEnd = () => {
    setIsSeeking(false)
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  // Update time as video plays
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [isSeeking])

  // Content sections with alternating image-text layout
  const sections = [
    {
      id: 1,
      title: "Classes are Inclusive, Catered towards your needs",
      description: "Our goal is for you to learn classical dance regardless of your age or gender. Our Programs are structured to help you grow individually. The virtual classes are flexible by way of enabling you to book your preferred slots from our scheduling calendar.",
      image: "/images/global1.jpg", // Placeholder - update with your image
      imagePosition: "left", // Image on left, text on right
      ctaText: "Know More",
      ctaLink: "/trainings"
    },
    {
      id: 2,
      title: "Lessons focused on building movement and self-awareness",
      description: "We want your learning experience to be more than just plain instructive monologues. We help learners build movement confidence and establish the traditional significance of the form. Our approach combines body conditioning exercises, free body movements in vocabulary of classical dance, and training in choreographic nuances and performance.",
      image: "/images/global2.jpg", // Placeholder - update with your image
      imagePosition: "right", // Text on left, image on right
      ctaText: "Know More",
      ctaLink: "/trainings"
    },
    {
      id: 3,
      title: "Get your time and commitment rewarded",
      description: "At our school, your commitment towards learning classical dance is not taken lightly. After 150 plus hours of training you are eligible to get certified by the International Dance Council (UNESCO) which we are a registered member of.",
      image: "/images/global3.jpg", // Placeholder - update with your image
      imagePosition: "left", // Image on left, text on right
      ctaText: "Join the program",
      ctaLink: "/trainings"
    },
    {
      id: 4,
      title: "Connecting with Global Performing Arts Community",
      description: "As an important step to enhance your experience in learning and exploring classical dance, we wanted you to be inclusive of the Global Performing Arts scenario, and get access to the global performing arts communities along with an indigenous understanding of Indian – Classical Dance.",
      image: "/images/global4.jpg", // Placeholder - update with your image
      imagePosition: "right", // Text on left, image on right
      ctaText: "Learn More",
      ctaLink: "/about"
    }
  ]

  return (
    <div>
      {/* Video Section at the top */}
      <section className="relative bg-black">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            controls={false}
            playsInline
            preload="metadata"
            onPlay={handlePlay}
            onPause={handlePause}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onError={(e) => {
              e.target.style.display = 'none'
              const errorDiv = e.target.nextSibling
              if (errorDiv) {
                errorDiv.style.display = 'flex'
              }
            }}
          />
          <div className="hidden absolute inset-0 bg-gray-800 items-center justify-center">
            <div className="text-center p-4">
              <p className="text-white text-lg mb-2">Video not found or format not supported</p>
              <p className="text-gray-400 text-sm">File: {videoSrc}</p>
            </div>
          </div>

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="container-custom">
              {/* Progress Bar / Seek Bar */}
              <div className="mb-3">
                <div
                  ref={progressBarRef}
                  className="w-full h-2 bg-white/20 rounded-full cursor-pointer group"
                  onClick={handleSeek}
                  onMouseDown={handleSeekStart}
                  onMouseUp={handleSeekEnd}
                  onTouchStart={handleSeekStart}
                  onTouchEnd={handleSeekEnd}
                >
                  <div className="relative h-full">
                    {/* Progress Track */}
                    <div
                      className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-100"
                      style={{ width: `${progressPercentage}%` }}
                    />
                    {/* Progress Handle */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ left: `calc(${progressPercentage}% - 8px)` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Time Display */}
                <div className="text-white text-sm font-mono min-w-[100px]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>

                <button
                  onClick={toggleMute}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 text-white">
                  <p className="text-sm font-medium">Go Global - Dance Across Borders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Image-Text Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`section-padding ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="container-custom">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                section.imagePosition === 'right' ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  section.imagePosition === 'right' ? 'md:col-start-2' : ''
                }`}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      const placeholder = e.target.nextSibling
                      if (placeholder) {
                        placeholder.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 items-center justify-center">
                    <div className="text-center p-4">
                      <svg
                        className="w-16 h-16 text-white mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-white text-sm">Add image: {section.image}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`${
                  section.imagePosition === 'right' ? 'md:col-start-1 md:row-start-1' : ''
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {section.description}
                </p>
                <Link
                  to={section.ctaLink}
                  className="btn-primary inline-block"
                >
                  {section.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our global community and connect with dancers and artists from around the world. Experience the beauty of classical dance across borders and cultures.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default GoGlobal

