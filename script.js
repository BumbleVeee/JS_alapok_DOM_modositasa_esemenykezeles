window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elelmekElerese3();
    elelmekElerese4();
   
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