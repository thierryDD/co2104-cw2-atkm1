const apiKey = 'pk.eyJ1IjoiYXRrbSIsImEiOiJjbHZ1eXNrYTQxOHRmMmpudzZ4ZHc2emxwIn0.07xRqYMzPNWptN_9muIX0g';

const map = L.map('map').setView([51.502361, -0.198003], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    accessToken: apiKey
}).addTo(map);


// Arsenal
const arsenal = L.marker([51.5541937, -0.1099923]).addTo(map);

let arsenalTemplate = `
<h3><a href="../html/club/arsenal.html"> Arsenal FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/arsenal.webp"/>
</div>

`
arsenal.bindPopup(arsenalTemplate);

// Chelsea
const chelsea = L.marker([51.4805722, -0.1905265]).addTo(map);

let chelseaTemplate = `
<h3><a href="../html/club/chelsea.html"> Chelsea FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/chelsea.jpeg"/>
</div>

`
chelsea.bindPopup(chelseaTemplate);

// Tottenham
const tottenham = L.marker([51.6036922, -0.0676010]).addTo(map);

let tottenhamTemplate = `
<h3><a href="../html/club/tottenham.html"> Tottenham Hotspurs </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/tottenham.webp"/>
</div>

`
tottenham.bindPopup(tottenhamTemplate);

// West Ham
const westHam = L.marker([51.5385543, -0.0179440]).addTo(map);

let westHamTemplate = `
<h3><a href="../html/club/westHam.html"> West Ham United </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/westHam.jpeg"/>
</div>

`
westHam.bindPopup(westHamTemplate);

// Fulham FC
const fulham = L.marker([51.4751367, -0.2208954]).addTo(map);

let fulhamTemplate = `
<h3><a href="../html/club/fulham.html"> Fulham FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/fulham.jpg"/>
</div>

`
fulham.bindPopup(fulhamTemplate);

// Crystal Palace FC
const crystalPalace = L.marker([51.3986790, -0.0850636]).addTo(map);

let crystalPalaceTemplate = `
<h3><a href="../html/club/crystalPalace.html"> Crystal Palace FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/crystalPalace.jpeg"/>
</div>

`
crystalPalace.bindPopup(crystalPalaceTemplate);

// Brentford FC
const brentford = L.marker([51.4904669, -0.2901748]).addTo(map);

let brentfordTemplate = `
<h3><a href="../html/club/brentford.html"> Brentford FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/brentford.jpg"/>
</div>

`
brentford.bindPopup(brentfordTemplate);

// Millwall FC
const millwall = L.marker([51.4860788, -0.0510649]).addTo(map);

let millwallTemplate = `
<h3><a href="../html/club/millwall.html"> Millwall FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/millwall.jpeg"/>
</div>

`
millwall.bindPopup(millwallTemplate);

// Queens Park Rangers FC
const qpr = L.marker([51.5099893, -0.2317701]).addTo(map);

let qprTemplate = `
<h3><a href="../html/club/qpr.html"> Queens Park Rangers FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/QPR.jpeg"/>
</div>

`
qpr.bindPopup(qprTemplate);

// Charlton Athletic FC
const charlton = L.marker([51.4873650, 0.0371434]).addTo(map);

let charltonTemplate = `
<h3><a href="../html/club/charlton.html"> Charlton Athletic FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/charlton.jpeg"/>
</div>

`
charlton.bindPopup(charltonTemplate);

// Leyton Orient FC
const leyton = L.marker([51.5601129, -0.0118423]).addTo(map);

let leytonTemplate = `
<h3><a href="../html/club/leyton.html"> Leyton Orient </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/leyton.jpeg"/>
</div>

`
leyton.bindPopup(leytonTemplate);

// AFC Wimbledon
const afc = L.marker([51.4308012, -0.1868108]).addTo(map);

let afcTemplate = `
<h3><a href="../html/club/afcWimbledon.html"> AFC Wimbledon </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/afcWimbledon.webp"/>
</div>

`
afc.bindPopup(afcTemplate);

// Sutton United FC
const sutton = L.marker([51.3676850, -0.2038382]).addTo(map);

let suttonTemplate = `
<h3><a href="../html/club/sutton.html"> Sutton United </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/sutton.webp"/>
</div>

`
sutton.bindPopup(suttonTemplate);

// Barnet FC
const barnet = L.marker([51.6024513, -0.2913932]).addTo(map);

let barnetTemplate = `
<h3><a href="../html/club/barnet.html"> Barnet FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/barnet.jpeg"/>
</div>

`
barnet.bindPopup(barnetTemplate);

// Bromlwy FC
const bromley = L.marker([51.3899060, 0.0202400]).addTo(map);

let bromleyTemplate = `
<h3><a href="../html/club/bromley.html"> Bromley FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/bromley.jpg"/>
</div>

`
bromley.bindPopup(bromleyTemplate);

// Dagenham & Redbridge FC
const dr = L.marker([51.5477841, 0.1602818]).addTo(map);

let drTemplate = `
<h3><a href="../html/club/d&r.html"> Dagenham & Redbridge FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/D&R.jpeg"/>
</div>

`
dr.bindPopup(drTemplate);

// Wealdstone FC
const wealdstone = L.marker([51.5693308, -0.4173440]).addTo(map);

let wealdstoneTemplate = `
<h3><a href="../html/club/wealdstone.html"> Wealdstone FC </a><h3>
<div style="text-align:center">
    <img width="150" height="150" src="../images/stadiumView/wealdstone.webp"/>
</div>

`
wealdstone.bindPopup(wealdstoneTemplate);




// function to search for a club
function navigationToFile() {
    //Get the search query from the input field
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();

    //Define the mapping of filenames
    var fileMappings = {
        "arsenal": "../html/club/arsenal.html",
        "chelsea": "../html/club/chelsea.html",
        "tottenham": "../html/club/tottenham.html",
        "west ham": "../html/club/westHam.html",
        "brentford": "../html/club/brentford.html",
        "fulham": "../html/club/fulham.html",
        "crystal palace": "../html/club/crystalPalace.html",
        "millwall": "../html/club/millwall.html",
        "queens park rangers": "../html/club/qpr.html",
        "barnet": "../html/club/barnet.html",
        "bromley": "../html/club/bromley.html",
        "charlton athletic": "../html/club/charlton.html",
        "leyton orient": "../html/club/leyton.html",
        "sutton": "../html/club/sutton.html",
        "wealdstone": "../html/club/wealdstone.html",
        "afc wimbledon": "../html/club/afcWimbledon.html",
        "dagenham & redbridge": "../html/club/d&r.html"
    };

    //Check if the search query matches any file name
    if (searchQuery in fileMappings) {
    window.location.href = fileMappings[searchQuery];
    } else {
    alert("File not found!");
    }
}

const teamMarkers = {
    "arsenal": arsenal,
    "chelsea": chelsea,
    "tottenham": tottenham,
    "west ham": westHam,
    "crystal palace": crystalPalace,
    "fulham": fulham,
    "brentford": brentford,
    "millwall": millwall,
    "queens park rangers": qpr,
    "qpr": qpr,
    "charlton athletic": charlton,
    "charlton": charlton,
    "leyton orient": leyton,
    "afc wimbledon": afc,
    "afc": afc,
    "sutton": sutton,
    "barnet": barnet,
    "bromley": bromley,
    "dagenham & redbridge": dr,
    "d&r": dr,
    "wealdstone": wealdstone
};

function searchTeam() {
    
    var searchQuery = document.getElementById("searchInputMap").value.toLowerCase();
    
    if (searchQuery in teamMarkers) {
        var marker = teamMarkers[searchQuery];
        
        map.setView(marker.getLatLng(), 13);
        
        marker.openPopup();
    } else {
        alert("Team not found!");
    }
}



function OpenSlide(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle('open-slide');
}

function CloseSlide(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove('open-slide');
}