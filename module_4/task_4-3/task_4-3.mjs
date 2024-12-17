"use strict";

const dateStart = Date.now();

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------

window.onload = function () {
    // Part 1:
    document.getElementById("cmbTask1Calculate").addEventListener("click", function () {
        const width = parseFloat(document.getElementById("txtTask1Width").value);
        const height = parseFloat(document.getElementById("txtTask1Height").value);
        if (!isNaN(width) && !isNaN(height)) {
            const perimeter = 2 * (width + height);
            const area = width * height;
            document.getElementById("txtTask1Output").innerText = `Perimeter: ${perimeter}, Area: ${area}`;
        } else {
            document.getElementById("txtTask1Output").innerText = "Please enter valid numbers.";
        }
    });

    // Part 2:
    const task2Words = [];
    document.getElementById("txtTask2Word").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const wordInput = document.getElementById("txtTask2Word");
            const word = wordInput.value.trim();
            if (word) {
                task2Words.push(word);
                document.getElementById("txtTask2Output").innerText = `Words (${task2Words.length}): ${task2Words.join(", ")}`;
                wordInput.value = "";
            }
        }
    });

    // Part 3:
    document.getElementById("cmbTask3Evaluate").addEventListener("click", function () {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        const selected = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
        document.getElementById("txtTask3Output").innerText = `Selected: ${selected.join(", ")}`;
    });

    // Part 4:
    const divTask4Cars = document.getElementById("divTask4Cars");
    CarTypes.forEach(car => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "carType";
        radio.value = car;
        const label = document.createElement("label");
        label.innerText = car;
        label.appendChild(radio);
        divTask4Cars.appendChild(label);
        divTask4Cars.appendChild(document.createElement("br"));
    });
    document.getElementById("cmbTask4Select").addEventListener("click", function () {
        const selected = document.querySelector("input[name='carType']:checked");
        document.getElementById("txtTask4Output").innerText = selected ? `Selected car: ${selected.value}` : "No car selected.";
    });

    // Part 5:
    document.getElementById("selectTask5Animals").addEventListener("change", function () {
        const dropdown = document.getElementById("selectTask5Animals");
        document.getElementById("txtTask5Output").innerText = `Selected: ${dropdown.value}`;
    });

    // Part 6:
    const selectTask6Girls = document.getElementById("selectTask6Girls");
    GirlsNames.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.innerText = name;
        selectTask6Girls.appendChild(option);
    });
    selectTask6Girls.addEventListener("change", function () {
        const dropdown = document.getElementById("selectTask6Girls");
        document.getElementById("txtTask6Output").innerText = `Selected: ${dropdown.value}`;
    });

    // Part 7:
    const selectMovieGenre = document.getElementById("selectMovieGenre");
    MovieGenre.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.innerText = genre;
        selectMovieGenre.appendChild(option);
    });
    document.getElementById("cmbAddMovie").addEventListener("click", function () {
        const title = document.getElementById("filmtittel").value;
        const genre = document.getElementById("selectMovieGenre").value;
        const director = document.getElementById("filmregissør").value;
        const rating = document.getElementById("filmrate").value;

        if (title && genre && director && rating) {
            const table = document.getElementById("movieTable");
            const row = table.insertRow();
            row.insertCell(0).innerText = title;
            row.insertCell(1).innerText = genre;
            row.insertCell(2).innerText = director;
            row.insertCell(3).innerText = rating;
        } else {
            alert("Please fill out all fields.");
        }
    });
};

const dateStop = Date.now();
const dateTime = dateStart - dateStop;
console.log(dateTime);