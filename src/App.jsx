import { useState } from 'react'
//import './App.css'

import { Home } from './Home/Home.jsx'
// import { AdicionarFio } from './Adicionar-fio/Adicionar-fio.jsx'
// import { ConsultarFio } from './Consultar-fio/Consultar-fio.jsx'
// import { VerLista } from './Ver-lista/Ver-lista.jsx'

export function App() {
    const [ showHome, setShowHome ] = useState(true)
/*
    const [ showAdicionarFio, setShowAdicionarFio ] = useState(false)
    const [ showConsultarFio, setShowConsultarFio ] = useState(false)
    const [ showVerLista, setShowVerLista] = useState(false) */

/*     const handleClickHome = () => {
        setShowHome(true)
        setShowAdicionarFio(false)
        setShowConsultarFio(false)
        setShowVerLista(false)
    }

    const handleClickAdicionarFio = () => {
        setShowHome(false)
        setShowAdicionarFio(true)
        setShowConsultarFio(false)
        setShowVerLista(false)
    }

    const handleClickConsultarFio = () => {
        setShowHome(false)
        setShowAdicionarFio(false)
        setShowConsultarFio(true)
        setShowVerLista(false)
    }

    const handleClickVerLista = () => {
        setShowHome(false)
        setShowAdicionarFio(false)
        setShowConsultarFio(false)
        setShowVerLista(true)
    } */

    return(
      <div className="app">
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Adicionar fio</a>
            </li>
            <li>
              <a href="#">Consultar fio</a>
            </li>
            <li>
              <a href="#">Ver lista completa</a>
            </li>
          </ul>
        </div>
        <div className="content">
          { showHome && <Home />}
{/*       { showAdicionarFio && <AdicionarFio /> }
          { showConsultarFio && <ConsultarFio/>  }
          { showVerLista && <VerLista/>  } */}
        </div>
      </div>
    )
}
