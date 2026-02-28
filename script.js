window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elelmekElerese3();
    elelmekElerese4();
    elemekFormazasa();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3(feladatElem);

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
    
    gombElem.addEventListener("click", function () {
        feladatElem.innerHTML +=`<div>
        <img src="https://paradepets.com/.image/w_640,q_auto:good,c_limit/NTowMDAwMDAwMDAwMDQyNDA2/smoke-black-maine-coon.jpg?arena_f_auto" alt="random kép"></div>`;
    });

    const kepElem = feladatElem.querySelector("img");

    esemenyKezeles3(kepElem);
}

function esemenyKezeles3(kepElem) {

    kepElem.addEventListener("mouseover", function () {
        kepElem.style.transform = "scale(1.2)";
    });

    kepElem.addEventListener("mouseout", function() {
        kepElem.style.transform = "scale(1)";
    })
}