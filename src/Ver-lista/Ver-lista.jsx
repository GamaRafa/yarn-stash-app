import { useState } from "react";
import './Ver-lista.css'

const url = "http://localhost:5555/"

function getLista(){
    fetch(url)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
        nome.innerHTML = `Nome: ${data[0].nome}`
        marca.innerHTML = `Marca: ${data[0].marca}`
        material.innerText = `Material: ${data[0].material}`
        tex.innerText = `TEX: ${data[0].tex}`
        cor.innerText = `Cor: ${data[0].cor}`
        quantidade.innerText = `Quantidade: ${data[0].quantidade}`
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