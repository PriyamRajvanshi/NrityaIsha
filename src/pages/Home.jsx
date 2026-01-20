import { useRef, useState, useEffect } from 'react'
import { VIDEO_URL } from '../config/video'
// import Carousel from '../components/sections/Carousel'
import VideoPlayer from '../components/sections/VideoPlayer'
import BlogPreview from '../components/sections/BlogPreview'
import Stats from '../components/sections/Stats'
import TrainingPlans from '../components/sections/TrainingPlans'
import Approach from '../components/sections/Approach'
import Community from '../components/sections/Community'

const Home = () => {
  const videoRef = useRef(null)
  const progressBarRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)

  // Video URL from config (supports Vercel Blob or local path)
  const videoSrc = VIDEO_URL

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

  return (
    <div>
      {/* Full Width Video Section (Replaced Carousel) */}
      <section className="relative bg-black">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
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
                  <p className="text-sm font-medium">Dance School - Classical Dance Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <VideoPlayer /> */}

      {/* Mission/Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                The foundation aims to provide cultural education of the art of dance by imparting the essence of the Guru-Sishya Parampara system through a contemporary approach. We want your journey towards self-expression to be a path of discovery and learning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As an important step to enhance your experience in learning and exploring classical dance, we wanted you to be inclusive of the Global Performing Arts scenario, and get access to the global performing arts communities along with an indigenous understanding of Indian – Classical Dance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Stats /> */}
      {/* <TrainingPlans /> */}
      {/* <Approach /> */}
      {/* <BlogPreview /> */}
      {/* <Community /> */}
    </div>
  )
}

export default Home

