// Importeer express uit de node_modules map
import express from "express";

// Maak een nieuwe express app aan
const app = express();

// Stel ejs in als template engine en geef de 'views' map door
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'))

// Gegevens ophalen
const url = "https://whois.fdnd.nl/api/v1/squad/squad-a-2022";
const data = await fetch(url).then((response) => response.json());

// Gebruik de map 'public' voor statische resources
app.use(express.static("public"));

// Maak een route voor de index
app.get("/", function (request, response) {
	// let slug = request.query.squad || "squad-a-2022"
  	let orderBy = request.query.orderBy || "name"
	let direction = request.query.direction || "ASC"
  	let squadUrl = url + "?orderBy=" + orderBy + "&direction=" + direction

	fetch(squadUrl)
		.then((response) => response.json())
		.then((data) => response.render('index', data));
	}

// 	fetchJson(squadUrl).then((data) => {
//     response.render('index', data)
//   })
);

// Stel het poortnummer in waar express op gaat luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
	// Toon een bericht in de console en geef het poortnummer door
	console.log(`Application started on http://localhost:${app.get("port")}`);
});
