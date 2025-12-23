import { useRef, useState, useEffect } from 'react'

const Performances = () => {
  const topVideoRef = useRef(null)
  const bottomVideoRef = useRef(null)
  const topProgressBarRef = useRef(null)
  const bottomProgressBarRef = useRef(null)
  
  const [topVideoState, setTopVideoState] = useState({
    isPlaying: false,
    isMuted: true,
    currentTime: 0,
    duration: 0,
    isSeeking: false
  })
  
  const [bottomVideoState, setBottomVideoState] = useState({
    isPlaying: false,
    isMuted: true,
    currentTime: 0,
    duration: 0,
    isSeeking: false
  })

  const topVideoSrc = '/videos/NI.mov'
  const bottomVideoSrc = '/videos/NI.mov'

  // Top Video Controls
  const toggleTopPlay = () => {
    if (topVideoRef.current) {
      if (topVideoState.isPlaying) {
        topVideoRef.current.pause()
      } else {
        topVideoRef.current.play()
      }
      setTopVideoState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
    }
  }

  const toggleTopMute = () => {
    if (topVideoRef.current) {
      topVideoRef.current.muted = !topVideoState.isMuted
      setTopVideoState(prev => ({ ...prev, isMuted: !prev.isMuted }))
    }
  }

  const handleTopTimeUpdate = () => {
    if (topVideoRef.current && !topVideoState.isSeeking) {
      setTopVideoState(prev => ({ ...prev, currentTime: topVideoRef.current.currentTime }))
    }
  }

  const handleTopLoadedMetadata = () => {
    if (topVideoRef.current) {
      setTopVideoState(prev => ({ ...prev, duration: topVideoRef.current.duration }))
    }
  }

  const handleTopSeek = (e) => {
    if (!topVideoRef.current || !topProgressBarRef.current) return
    const progressBar = topProgressBarRef.current
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    const newTime = percentage * topVideoState.duration
    topVideoRef.current.currentTime = newTime
    setTopVideoState(prev => ({ ...prev, currentTime: newTime }))
  }

  // Bottom Video Controls
  const toggleBottomPlay = () => {
    if (bottomVideoRef.current) {
      if (bottomVideoState.isPlaying) {
        bottomVideoRef.current.pause()
      } else {
        bottomVideoRef.current.play()
      }
      setBottomVideoState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
    }
  }

  const toggleBottomMute = () => {
    if (bottomVideoRef.current) {
      bottomVideoRef.current.muted = !bottomVideoState.isMuted
      setBottomVideoState(prev => ({ ...prev, isMuted: !prev.isMuted }))
    }
  }

  const handleBottomTimeUpdate = () => {
    if (bottomVideoRef.current && !bottomVideoState.isSeeking) {
      setBottomVideoState(prev => ({ ...prev, currentTime: bottomVideoRef.current.currentTime }))
    }
  }

  const handleBottomLoadedMetadata = () => {
    if (bottomVideoRef.current) {
      setBottomVideoState(prev => ({ ...prev, duration: bottomVideoRef.current.duration }))
    }
  }

  const handleBottomSeek = (e) => {
    if (!bottomVideoRef.current || !bottomProgressBarRef.current) return
    const progressBar = bottomProgressBarRef.current
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    const newTime = percentage * bottomVideoState.duration
    bottomVideoRef.current.currentTime = newTime
    setBottomVideoState(prev => ({ ...prev, currentTime: newTime }))
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const topProgressPercentage = topVideoState.duration > 0 ? (topVideoState.currentTime / topVideoState.duration) * 100 : 0
  const bottomProgressPercentage = bottomVideoState.duration > 0 ? (bottomVideoState.currentTime / bottomVideoState.duration) * 100 : 0

  // Performance images - add your images to public/images/performances/ folder
  // 3x3 grid = 9 images total
  const performanceImages = [
    { id: 1, src: '/images/performances/performance1.jpg', alt: 'Performance 1' },
    { id: 2, src: '/images/performances/performance2.jpg', alt: 'Performance 2' },
    { id: 3, src: '/images/performances/performance3.jpg', alt: 'Performance 3' },
    { id: 4, src: '/images/performances/performance4.jpg', alt: 'Performance 4' },
    { id: 5, src: '/images/performances/performance5.jpg', alt: 'Performance 5' },
    { id: 6, src: '/images/performances/performance6.jpg', alt: 'Performance 6' },
    { id: 7, src: '/images/performances/performance7.jpg', alt: 'Performance 7' },
    { id: 8, src: '/images/performances/performance8.jpg', alt: 'Performance 8' },
    { id: 9, src: '/images/performances/performance9.jpg', alt: 'Performance 9' },
  ]

  // Event listeners for top video
  useEffect(() => {
    const video = topVideoRef.current
    if (video) {
      video.addEventListener('timeupdate', handleTopTimeUpdate)
      video.addEventListener('loadedmetadata', handleTopLoadedMetadata)
      return () => {
        video.removeEventListener('timeupdate', handleTopTimeUpdate)
        video.removeEventListener('loadedmetadata', handleTopLoadedMetadata)
      }
    }
  }, [topVideoState.isSeeking])

  // Event listeners for bottom video
  useEffect(() => {
    const video = bottomVideoRef.current
    if (video) {
      video.addEventListener('timeupdate', handleBottomTimeUpdate)
      video.addEventListener('loadedmetadata', handleBottomLoadedMetadata)
      return () => {
        video.removeEventListener('timeupdate', handleBottomTimeUpdate)
        video.removeEventListener('loadedmetadata', handleBottomLoadedMetadata)
      }
    }
  }, [bottomVideoState.isSeeking])

  return (
    <div>
      {/* Top Video Section */}
      <section className="relative bg-black">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <video
            ref={topVideoRef}
            src={topVideoSrc}
            className="w-full h-full object-cover"
            controls={false}
            playsInline
            preload="metadata"
            onPlay={() => setTopVideoState(prev => ({ ...prev, isPlaying: true }))}
            onPause={() => setTopVideoState(prev => ({ ...prev, isPlaying: false }))}
            onTimeUpdate={handleTopTimeUpdate}
            onLoadedMetadata={handleTopLoadedMetadata}
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
              <p className="text-white text-lg mb-2">Video not found</p>
              <p className="text-gray-400 text-sm">File: {topVideoSrc}</p>
            </div>
          </div>

          {/* Top Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="container-custom">
              <div className="mb-3">
                <div
                  ref={topProgressBarRef}
                  className="w-full h-2 bg-white/20 rounded-full cursor-pointer group"
                  onClick={handleTopSeek}
                  onMouseDown={() => setTopVideoState(prev => ({ ...prev, isSeeking: true }))}
                  onMouseUp={() => setTopVideoState(prev => ({ ...prev, isSeeking: false }))}
                >
                  <div className="relative h-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-100"
                      style={{ width: `${topProgressPercentage}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ left: `calc(${topProgressPercentage}% - 8px)` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTopPlay}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={topVideoState.isPlaying ? 'Pause' : 'Play'}
                >
                  {topVideoState.isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <div className="text-white text-sm font-mono min-w-[100px]">
                  {formatTime(topVideoState.currentTime)} / {formatTime(topVideoState.duration)}
                </div>

                <button
                  onClick={toggleTopMute}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={topVideoState.isMuted ? 'Unmute' : 'Mute'}
                >
                  {topVideoState.isMuted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Side by Side Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12 text-center">
            Our Performances
          </h2>
          
          {/* Grid Layout - 3x3 Grid (3 rows, 3 columns) */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
            {performanceImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <p className="text-white text-sm">Add image: {image.src}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Video Section */}
      <section className="relative bg-black">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <video
            ref={bottomVideoRef}
            src={bottomVideoSrc}
            className="w-full h-full object-cover"
            controls={false}
            playsInline
            preload="metadata"
            onPlay={() => setBottomVideoState(prev => ({ ...prev, isPlaying: true }))}
            onPause={() => setBottomVideoState(prev => ({ ...prev, isPlaying: false }))}
            onTimeUpdate={handleBottomTimeUpdate}
            onLoadedMetadata={handleBottomLoadedMetadata}
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
              <p className="text-white text-lg mb-2">Video not found</p>
              <p className="text-gray-400 text-sm">File: {bottomVideoSrc}</p>
            </div>
          </div>

          {/* Bottom Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="container-custom">
              <div className="mb-3">
                <div
                  ref={bottomProgressBarRef}
                  className="w-full h-2 bg-white/20 rounded-full cursor-pointer group"
                  onClick={handleBottomSeek}
                  onMouseDown={() => setBottomVideoState(prev => ({ ...prev, isSeeking: true }))}
                  onMouseUp={() => setBottomVideoState(prev => ({ ...prev, isSeeking: false }))}
                >
                  <div className="relative h-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary-600 rounded-full transition-all duration-100"
                      style={{ width: `${bottomProgressPercentage}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ left: `calc(${bottomProgressPercentage}% - 8px)` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleBottomPlay}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={bottomVideoState.isPlaying ? 'Pause' : 'Play'}
                >
                  {bottomVideoState.isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <div className="text-white text-sm font-mono min-w-[100px]">
                  {formatTime(bottomVideoState.currentTime)} / {formatTime(bottomVideoState.duration)}
                </div>

                <button
                  onClick={toggleBottomMute}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={bottomVideoState.isMuted ? 'Unmute' : 'Mute'}
                >
                  {bottomVideoState.isMuted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Performances

