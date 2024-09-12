import style from './modal.module.css'
import Draggable from 'react-draggable'



export function Modal({data, close}) {


  return (
    <>
        <Draggable>
            <div  className={style.Modal}>
                <button onClick={close}>❌</button>

                <div>
                    <img src={data.image} alt={data.image} />
                </div>
                <div className={style.info}>
                    <div className={style.text}> 
                        <strong> NAME: </strong> 
                        <h4> {data.name}</h4>
                    </div>
                    <div className={style.text}> 
                        <strong> STATUS: </strong> 
                        <h4> {data.status == "Dead" ? '💀' : '❤'} </h4>
                    </div>
                    <div className={style.text}> 
                        <strong> SPECIE: </strong> 
                        <h4> {data.species} </h4>
                    </div>
                    <div className={style.text}> 
                        <strong> TYPE: </strong> 
                        <h4> {data.type} </h4>
                    </div>
                    <div className={style.text}> 
                        <strong> GENDER: </strong> 
                        <h4> {data.gender} </h4>
                    </div>
                </div>
            </div>
        </Draggable>
    </>
  );
}

