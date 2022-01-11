import { useEffect, useState } from "react"
import "assets/css/Reset.css"
import "App.css"
import DoorDashFavorite from "components/DoorDashFavorite"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/naldorck01/atalia/main/src/data/products.v4.json",
        )
        const data = await res.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }, 3000)
    

  }, [])

  const SkeletonProductsLoading = ({ children, ...props }) => {
    return <DoorDashFavorite />
  }

  const ProductList = ({ children, ...props }) => {
    const template = (
      <ul className="catalog--grid--container">
        {products.map((product) => (
          <li className="catalog--item" key={product.id}>
              <img src={require(`assets/images/FOTOS-ATALIA/${product.img}`)} alt={product.name} />
              <p className="catalog--item--title"><b>{product.name}</b></p>
              <p className="catalog--item--brand">{product.brand}</p>
              <p className="catalog--item--price">COP $1</p>
          </li>
        ))}
      </ul>
    )

    return template
  }

  const template = (
    <main className="container--fluid">
      <section className="catalog--grid">
        {loading && !products.length && <SkeletonProductsLoading />}
        {!loading && products.length && <ProductList />}
      </section>
    </main>
  )

  return template
}

export default App
