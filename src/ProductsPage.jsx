import { CardProd } from './components/CardProd'
import produtos from './constants/produtos.json'
import style from './App.module.css'

import { Link } from "react-router-dom";





function ProductsPage() {
  return (
    <>

    <div className={style.wrapBtns}>
      <Link to={`/ProductsPage`} className={style.link}>Products</Link>
      <Link to={`/ApiPage`} className={style.link}>Api</Link>
      <Link to={`/MapPage`} className={style.link}>Map</Link>
      <Link to={`/GraphPage`} className={style.link}>Graph</Link>  
    </div>

    <div  className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        <h2>Showroom de produtos</h2>
        <div className={style.card_deck}>
            {produtos.map((item) => {
              return(
                <CardProd status={item.status} name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
              )
             })}
        </div>
      
    </div>
    </>
  )
}

export default ProductsPage
