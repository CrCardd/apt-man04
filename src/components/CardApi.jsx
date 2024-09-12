import style from './cardapi.module.css';


// eslint-disable-next-line react/prop-types
export const CardApi = ({name,status,species,type,gender,image}) => {
  return(
    <div  className={style.Card}>

      <div>
          <img className={style.img} src={image} alt={image} />
      </div>
      <div className={style.info}>
          <div className={style.text}> 
              <strong> NAME: </strong> 
              <h4> {name}</h4>
          </div>
          <div className={style.text}> 
              <strong> STATUS: </strong> 
              <h4> {status == "Dead" ? '💀' : '❤'} </h4>
          </div>
          <div className={style.text}> 
              <strong> SPECIE: </strong> 
              <h4> {species} </h4>
          </div>
          <div className={style.text}> 
              <strong> TYPE: </strong> 
              <h4> {type} </h4>
          </div>
          <div className={style.text}> 
              <strong> GENDER: </strong> 
              <h4> {gender} </h4>
          </div>
      </div>
    </div>
  )
}