"use strict";
let allData = [];

document.addEventListener("DOMContentLoaded", async () => {
    loadData();

    //Händelselyssnare för sortering
    document.querySelector("#sort-by-code").addEventListener

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
    //Radera
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


