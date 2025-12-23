import Carousel from '../components/sections/Carousel'
import VideoPlayer from '../components/sections/VideoPlayer'
import BlogPreview from '../components/sections/BlogPreview'
import Stats from '../components/sections/Stats'
import TrainingPlans from '../components/sections/TrainingPlans'
import Approach from '../components/sections/Approach'
import Community from '../components/sections/Community'

const Home = () => {
  return (
    <div>
      <Carousel />
      <VideoPlayer />
      <Stats />
      <TrainingPlans />
      <Approach />
      <BlogPreview />
      <Community />
    </div>
  )
}

export default Home

