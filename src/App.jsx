import { useState, useEffect } from 'react'
import { CardProd } from './components/CardProd'
import { CardApi } from './components/CardApi'
import { Alert } from './components/Found'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [found, setFound] = useState("")


  useEffect(() => {
    setFound(true);
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        setFound(false);
      }
      console.error(error)
    })
  }, [page,name])

  return (
    <>

    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.card_deck}>
            {produtos.map((item) => {
              return(
                <CardProd status={item.status} name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="character name" value={name} onChange={(event) => setName(event.target.value)}/>
               { found ? <Alert message={'acho'} color={'green'}/> : <Alert message={'Não encontrado'} color={'red'}/>}
            </div>
            <div className={style.card_deck}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <CardApi name={item.name} status={item.status == "Alive" ? true : false} species={item.species} type={item.type} gender={item.gender} image={item.image} />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
