window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elelmekElerese3();
    elelmekElerese4();
    elemekFormazasa();
    esemenyKezeles1();
    esemenyKezeles2();
    /*elelmekElerese3(kepElem);*/
    esemenyKezeles4();
    //feladat8();

});

function elemekElerese1() {
    const f1Elem=document.querySelectorAll("section h2") [0] 
    console.log(f1Elem.innerHTML)
}

function elemekElerese2() {
    const f2Elem=document.getElementById("ide")
    f2Elem.innerHTML="<p>Jó reggelt kis csicseri borsó!</p>"
}

function elelmekElerese3() {
    const f3Elem=document.querySelectorAll(".ide") [0]
    f3Elem.innerHTML="<p>Jó reggelt!</p>"
}


function elelmekElerese4() {
    const listaElem=document.querySelectorAll(".lista") [0]
    let szoveg="<ul>"
    for (let index = 0; index < 5; index++) {
        let szam = Math.floor(Math.random()*21+10)
        szoveg += `<li>${szam}</li>` 
    }
    szoveg +="</ul>"
    listaElem.innerHTML=szoveg
}

function elemekFormazasa() {
    const listaElem=document.querySelectorAll(".lista") [0]
    listaElem.classList.add("formazott");
}

function esemenyKezeles1() {
    const listaElem=document.querySelectorAll(".lista") [0]
    const kattintasUtan = document.querySelectorAll(".kattintasutan")[0];

    listaElem.addEventListener("click", function () {
        kattintasUtan.innerHTML = listaElem.innerHTML;
    });

}

function esemenyKezeles2() {
    const feladatElem=document.querySelectorAll(".feladat") [0]
    feladatElem.innerHTML="<button>OK</button>";
    const gombElem=document.querySelectorAll(".feladat button") [0];

    const kepElem = feladatElem.querySelector("img");
    
    gombElem.addEventListener("click", function () {
        feladatElem.innerHTML +=`<div>
        <img id="kep" src="https://paradepets.com/.image/w_640,q_auto:good,c_limit/NTowMDAwMDAwMDAwMDQyNDA2/smoke-black-maine-coon.jpg?arena_f_auto" alt="random kép"></div>`;
    });

}

/*
function esemenyKezeles3(kepElem) {

    const img = document.getElementById("kep");

    kepElem.addEventListener("mouseover", function () {
        kepElem.style.transform = "scale(1.2)";
    });

    kepElem.addEventListener("mouseout", function() {
        kepElem.style.transform = "scale(1)";
    })
}
*/

function esemenyKezeles4() {
    const elem = document.getElementsByClassName("elem");
    const megjelenito = document.getElementsByClassName("megjelenito")[0];

    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener("click", function() {
            megjelenito.innerHTML += elem[index].innerHTML;
        })
    }
}

/*
function feladat8(){
    // tanárnőt megkérdezni, mi a különbsélg a kettő között, miért nenm futott le először az eseménykezelés4, de a feladat8 igen, ctr x, ctr v után pedig mindkettő???
    
    HTMLCollection-t - nem tudom mi ez, de nekem ez marad lista , tömb 
    const elemek=document.getElementsByClassName("elem");
    const megjelenito=document.getElementsByClassName("megjelenito")[0];

    for (let index = 0; index < elemek.length; index++) {
        elemek[index].addEventListener("click",function(){
            megjelenito.innerHTML+=elemek[index].innerHTML

        });
    }
}
*/
