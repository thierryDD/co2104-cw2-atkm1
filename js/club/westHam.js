$(document).ready(function() {

    var westHamGames = [
        { date: "August 20, 2024", teams: "West Ham vs. Fulham", location: "London Stadium", match: "EFL" },
        { date: "August 26, 2024", teams: "Crystal Palace vs. West Ham", location: "Selhurst Park", match: "EFL" },
        { date: "September 4, 2024", teams: "West Ham vs. Nottingham Forest", location: "London Stadium", match: "EFL" },
        { date: "September 22, 2024", teams: "West Ham vs. Newcastle", location: "London Stadium", match: "Premier League" },
        { date: "November 23, 2024", teams: "West Ham vs. Manchester United", location: "London Stadium", match: "Premier League" },
        { date: "January 18, 2025", teams: "West Ham vs. Luton", location: "London Stadium", match: "Premier League" }
    ];
    
    

    $('#search-input').on('keyup', function(){
        var value = $(this).val()
        console.log('Value:', value)
        var data = searchTable(value, westHamGames)
        buildTable(data)
    })


    buildTable(westHamGames)

    function searchTable(value, data){
        var filteredData = []

        for (var i = 0; i < data.length; i ++){
            value = value.toLowerCase()
            var team = data[i].teams.toLowerCase()

            if (team.includes(value)){
                filteredData.push(data[i])
            }
        }

        return filteredData
    }



    function buildTable(data) {
        var table = document.getElementById('myTable');
        table.innerHTML = '';
    
        for (var i = 0; i < data.length; i++) {
            var row = `<tr>
                            <td>${data[i].date}</td>
                            <td>${data[i].teams}</td>
                            <td>${data[i].location}</td>
                            <td>${data[i].match}</td>
                            <td><a class="btn btn-outline-success my-2 my-sm-0 btn-get-tickets" href="https://www.livefootballtickets.com/?gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWjgdAF0lWXGqKgrq0XeJFrPmCaNkCQwWs4-L4dZqYXNVUAm34dxcbRoCegUQAvD_BwE">Get Tickets</a></td>
                        </tr>`;
            table.innerHTML += row;
        }
    }
})

// function to search for a club
function navigationToFile() {
    //Get the search query from the input field
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();

    //Define the mapping of filenames
    var fileMappings = {
        "arsenal": "../../html/club/arsenal.html",
        "chelsea": "../../html/club/chelsea.html",
        "tottenham": "../../html/club/tottenham.html",
        "west ham": "../../html/club/westHam.html",
        "brentford": "../../html/club/brentford.html",
        "fulham": "../../html/club/fulham.html",
        "crystal palace": "../../html/club/crystalPalace.html",
        "millwall": "../../html/club/millwall.html",
        "queens park rangers": "../../html/club/qpr.html",
        "barnet": "../../html/club/barnet.html",
        "bromley": "../../html/club/bromley.html",
        "charlton athletic": "../../html/club/charlton.html",
        "leyton orient": "../../html/club/leyton.html",
        "sutton": "../../html/club/sutton.html",
        "wealdstone": "../../html/club/wealdstone.html",
        "afc wimbledon": "../../html/club/afcWimbledon.html",
        "dagenham & redbridge": "../../html/club/d&r.html"
    };

    //Check if the search query matches any file name
    if (searchQuery in fileMappings) {
    window.location.href = fileMappings[searchQuery];
    } else {
    alert("File not found!");
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