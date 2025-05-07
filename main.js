let haeder=document.getElementsByClassName("header")[0]
haeder.style.color="blue"
haeder.style.backgroundColor = "green";

let paraghrap = document.getElementById("paraghrap");
paraghrap.style.fontWeight = "bold";

let imgtagName=document.getElementsByTagName("img")
imgtagName[0].src="hero.jpg"

let ul=document.querySelector("ul")
ul.style.border="2px solid black"
ul.style.display="flex"
ul.style.justifyContent="space-between"

let list=document.querySelectorAll("li")[0]
list.innerText="1"
list.style.color="red"
// list.style.border="1px solid black"

let listt=document.querySelectorAll("li")[1]
listt.innerText="2"
listt.style.color="red"
// listt.style.border="1px solid black"

let list3=document.querySelectorAll("li")[2]
list3.innerText="3"
list3.style.color="red"
// list3.style.border="1px solid black"

let table=document.createElement('table');
table.classList.add("create-tabel");
for(let i=0;i<2; i++){
    let row = document.createElement('tr');
    for (let j = 0; j < 3; j++) { 
        let data = document.createElement('td');
        data.textContent = `${i + 1}`;
        row.appendChild(data);
    }
    table.appendChild(row)
}
document.getElementById('div-tabel').appendChild(table)