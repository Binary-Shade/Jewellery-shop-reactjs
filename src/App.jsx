import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Hero from "./components/Hero"
import Cards from './components/Cards'
import Product from "./components/Products"
import Join from "./components/Join"
import Footer from "./components/Footer"
import Maps from "./components/Maps"
import Shop from "./components/Shop"

function App() {

  return (
    <>
      <div className="App gradient__bg">
        <Banner />
        <Nav />
        <Hero />
        <Cards />
        <Shop />
        <Product />
        <Maps />
        <Join />
        <Footer />
      </div>
    </>
  )
}

export default App
