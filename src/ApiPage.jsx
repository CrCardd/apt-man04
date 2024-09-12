import { useState, useEffect } from 'react'
import { CardApi } from './components/CardApi'
import { Alert } from './components/Found'
import { api } from "./api/rmApi"
import style from './App.module.css'
import {Modal} from './components/Modal'
import { Link } from "react-router-dom";
import { Tilt } from 'react-tilt'









function ApiPage() {
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [found, setFound] = useState("")

  const [modal, setModal] = useState();


  useEffect(() => {
    setFound(true);
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
      console.log(response.data.results);
    }).catch((error) => {
      if(error.response.status === 404){
        setFound(false);
      }
      console.error(error)
    })  
  }, [page,name])






  return (
    <>
    {modal !== undefined && <Modal data={data[modal]} close={() => setModal()}/>}

    <div className={style.wrapBtns}>
    <Link to={`/ProductsPage`} className={style.link}>Products</Link>
      <Link to={`/ApiPage`} className={style.link}>Api</Link>
      <Link to={`/MapPage`} className={style.link}>Map</Link>
      <Link to={`/GraphPage`} className={style.link}>Graph</Link>  
    </div>

  

    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
   
     
        
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="character name" value={name} onChange={(event) => setName(event.target.value)}/>
               { found ? <Alert message={'Encontrado'} color={'green'}/> : <Alert message={'Não encontrado'} color={'red'}/>}
            </div>
            <div className={style.card_deck}>
            {data.map((item, index) => { 
             return(
              <Tilt key={item.id}>
                <div onClick={() => setModal(index)}>
                  <CardApi name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender} image={item.image} /> 
                </div>
              </Tilt>
              )
           })}
            </div>
      
    </div>
    </>
  )
}

export default ApiPage
