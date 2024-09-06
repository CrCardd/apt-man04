import style from '../components/cardapi.module.css';


// eslint-disable-next-line react/prop-types
export const CardApi = ({name,status,species,type,gender,image}) => {
  return(
      <div className={style.card}>
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{type}</p>
          <div>
            <img src={image} alt={name} width={150} height={"auto"}/>
            <div className={status ? style.true : style.false}></div>
          </div>
      </div>
  )
}