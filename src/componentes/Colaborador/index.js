import "./Colaborador.css"
import {AiFillDelete, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    const fotoURL = "https://github.com/"+ foto + ".png";
    return <div className="colaborador">
        <AiFillDelete color="" onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={fotoURL} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default  colaborador;