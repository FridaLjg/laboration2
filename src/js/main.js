"use strict";
let allData = [];

document.addEventListener("DOMContentLoaded", async () => {
    loadData();
});

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    //Anropa och läs ut data
    try {
        const response = await fetch(url);
        const data = await response.json();

        //Lagra globalt
        allData = data;

        displayData(data);

    } catch (error) {
        console.error("Fel " + error);
    }
}

function displayData(data) {
    const dataListEl = document.querySelector("#course-table");
    //Radera listan
    dataListEl.innerHTML = ""

    //Loopa genom och skriv ut
    data.forEach(data => {
        dataListEl.innerHTML += `
        <div class="course-row">
            <div class="code">${data.code}</div>
            <div class="name">${data.coursename}</div>
            <div class="progression"> ${data.progression}</div> 
        </div>
        `;
    });
}

window.onload = () => {
    //Händelselyssnare
    document.querySelector("#search").addEventListener("input", filterData);
}

//Funktion för att söka
function filterData() {
    let searchPhrase = document.querySelector("#search").value.toLowerCase();

    if (searchPhrase === "") {
        displayData(allData);
    } else {
        let filteredData = allData.filter((data) => data.code.substring(0, searchPhrase.length).toLowerCase() === searchPhrase || data.coursename.substring(0, searchPhrase.length).toLowerCase() === searchPhrase);
        displayData(filteredData);
    }
}



