import { useState } from "react";
import './Ver-lista.css'

const url = "http://localhost:5555/"

function getLista(){
    fetch(url)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
        for (let fio in data){
            let divFio = document.createElement('div')
            document.getElementById("listDiv").appendChild(divFio).className += 'fio';

            let nome = document.createElement('p')
            nome.innerHTML = `<strong>Nome:</strong> ${data[fio].nome}`
            divFio.appendChild(nome)

            let marca = document.createElement('p')
            marca.innerHTML = `<strong>Marca:</strong> ${data[fio].marca}`
            divFio.appendChild(marca)

            let material = document.createElement('p')
            material.innerHTML = `<strong>Material:</strong> ${data[fio].material}`
            divFio.appendChild(material)

            let tex = document.createElement('p')
            tex.innerHTML = `<strong>TEX:</strong> ${data[fio].tex}`
            divFio.appendChild(tex)

            let cor = document.createElement('p')
            cor.innerHTML = `<strong>Cor:</strong> ${data[fio].cor}`
            divFio.appendChild(cor)

            let quantidade = document.createElement('p')
            quantidade.innerHTML = `<strong>Quantidade:</strong> ${data[fio].quantidade}`
            divFio.appendChild(quantidade)

            let hr = document.createElement('hr')
            divFio.appendChild(hr);
        }
    })
    .catch(error => console.error(error)) 
}


export function VerLista(){
    return(
        <div id="content">
            <h2>Lista de fios</h2>
            <button id='btnLista' onClick={getLista}>Ver lista</button>
            <div id="listDiv">
            </div>
        </div>
    )
}