import style from '../components/found.module.css';


// eslint-disable-next-line react/prop-types
export const Alert = ({message, color}) => {
  return(
      <div className={style.alert} style={{background: `${color}`}}>
          <h3>{message}</h3>
      </div>
  )
}