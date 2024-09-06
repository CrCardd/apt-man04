import style from '../components/card.module.css';


// eslint-disable-next-line react/prop-types
export const Card = ({name,desc,value,image,status}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <div>
            <img src={'../../src/assets/' + image} alt={name} width={150} height={"auto"}/>
            <div className={status ? style.true : style.false}></div>
          </div>
      </div>
  )
}