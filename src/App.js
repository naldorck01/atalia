import { useEffect, useState } from "react"
import "assets/css/Reset.css"
import "App.css"
import DoorDashFavorite from "components/DoorDashFavorite"

import Products from "data/products.json"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetch("data/products.json")
        console.log(res)
        const data = await res.json()
      } catch (error) {
        console.log(error)
      }
    }, 2000)
  }, [])

  const template = (
    <main className="container--fluid">
      <section className="catalog--grid">
        <ul className="catalog--grid--container">
          {Products.map((product) => (
            <li className="catalog--item" key={product.index}>
              <img src={require(`assets/images/FOTOS-ATALIA/${product.img}`)} alt={product.name} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )

  return template
}

export default App
