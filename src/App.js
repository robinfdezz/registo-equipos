import { useState } from 'react';
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

  //? Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    }
    ,
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    }
    ,
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0fbe2"
    }
    ,
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    }
    ,
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ];

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
        />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
