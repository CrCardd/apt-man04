import style from '../components/cardprod.module.css';


// eslint-disable-next-line react/prop-types
export const CardProd = ({name,desc,value,image,status}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <div>
            <img src={image} alt={name} width={150} height={"auto"}/>
          </div>
          <h2>{desc}</h2>
          <p>{value}</p>
          <div className={status ? style.true : style.false}></div>
      </div>
  )
}