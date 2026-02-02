"use strict";

document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    //Anropa och läs ut data
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.table(data);

    } catch (error) {
        console.error("Fel " + error);
    }
}