import { useState } from "react";
import './Ver-lista.css'

const url = "http://localhost:5555/"

function getLista(){
    fetch(url)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
        nome.innerHTML = `${data[0].nome}<br>`
        marca.innerHTML = `<br>${data[0].marca}`
        material.innerText = data[0].material
        tex.innerText = data[0].tex
        cor.innerText = data[0].cor
        quantidade.innerText = data[0].quantidade
    })
    .catch(error => console.error(error))
}


export function VerLista(){
    return(
        <div id="content">
            <h2>Lista de fios</h2>
            <button id='btnLista' onClick={getLista}>Ver lista</button>
            <div id="listDiv">
                <div className="fio">
                    <p id="nome"></p>
                    <p id="marca"></p>
                    <p id="material"></p>
                    <p id="tex"></p>
                    <p id="cor"></p>
                    <p id="quantidade"></p>
                </div>
            </div>
        </div>
    )
}