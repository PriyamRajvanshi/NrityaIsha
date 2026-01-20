import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
// import Trainings from './pages/Trainings'
// import GoGlobal from './pages/GoGlobal'
import Performances from './pages/Performances'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        {/* <section id="trainings">
          <Trainings />
        </section> */}
        {/* <section id="go-global">
          <GoGlobal />
        </section> */}
        <section id="performances">
          <Performances />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

