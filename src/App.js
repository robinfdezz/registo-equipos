import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from "./componentes/header/Header.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg"
import Equipo from './componentes/Equipos';
import Colaborador from './componentes/Colaborador';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    }
    ,
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0fbe2"
    }
    ,
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    }
    ,
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  //? Ternario --> condicion ? seMuestra : noSeMuestra;
  //? Condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //? Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //? Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //? Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
  }

  //? Actualizar color equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //? Crear equipos
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizador = colaboradores.map((colaborador) => {
      if(colaborador.id === id)
      {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    } )

    actualizarColaboradores(colaboradoresActualizador)
  }

  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header></Header> */}
      <Header />
      {/* {mostrarFormulario === true ?  <Formulario/> : <div></div>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        // equipos.map((equipo) => {
        //   return <Equipo datos={equipo} key={equipo.titulo}/>
        // })
        equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }
      <Footer/>

    </div>
  );
}

export default App;