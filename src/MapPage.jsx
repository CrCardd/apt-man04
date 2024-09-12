import { Map } from './components/Map'
import style from './App.module.css'

import { Link } from "react-router-dom";



function MapPage() {

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
        
        <h2>Mapa</h2>
            <div>
                <Map/>
            </div>
        </div>
    </>
  )
}

export default MapPage
