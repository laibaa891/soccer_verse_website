document.addEventListener("DOMContentLoaded", function () {
    const dataContainer = document.getElementById("data-container");

    // Make an HTTP request to fetch the JSON data
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Iterate through each object in the JSON data and create HTML elements
            data.forEach(item => {
                const itemDiv = document.createElement("tr");
                itemDiv.innerHTML = `
                    <td> ${item.sno}</td>
                    <td><img src="${item.teamimg}" alt="${item.team}" width="50" height="50"></td>
                  
                    <td style="text-align:left"> ${item.team}</td>
                    <td> ${item.matches}</td>
                    <td>${item.win}</td>
                    <td> ${item.draw}</td>
                    <td> ${item.lose}</td>
                    <td> ${item.points}</td>
                   
                `;
                dataContainer.appendChild(itemDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
