import { useState } from "react";
import '../App.css'

const Itemcount = (props) => {

    const [valoraciones, setValoraciones] = useState(0);

    const increment = () => {
        if (valoraciones < props.max) {
            setValoraciones(valoraciones+1);
        }
        
    }

    const decrement = () => {
        if (valoraciones > 0) {
            setValoraciones(valoraciones-1);
        }
       
    }

    return (
        <div>
            <div className="divButtons">
            <button className="buttons" onClick={decrement}>-</button>
            {valoraciones}
            <button className="buttons" onClick={increment}>+</button>
            </div>
            <button className="buttonBuy">Comprar</button>
        </div>
    )

}

export default Itemcount;