$(document).ready(function() {

    var allGames = [
        { date: "August 10, 2024", teams: "Millwall vs. Watford", location: "The Den", match: "Championship League" },
        { date: "August 10, 2024", teams: "Leyton Orient vs. Exeter City", location: "Brisbane Road", match: "League 1" },
        { date: "August 12, 2024", teams: "Arsenal vs. Leeds", location: "Emirates Stadium", match: "EFL" },
        { date: "August 12, 2024", teams: "Barnet vs. Bromley", location: "The Hive Stadium", match: "National League" },
        { date: "August 15, 2024", teams: "Chelsea vs. Middlesbrough", location: "Stamford Bridge", match: "EFL" },
        { date: "August 19, 2024", teams: "Brentford vs. Norwich City", location: "Brentford Community Stadium", match: "FA" },
        { date: "August 20, 2024", teams: "West Ham vs. Fulham", location: "London Stadium", match: "EFL" },
        { date: "August 21, 2024", teams: "Tottenham vs. Arsenal", location: "Tottenham Hotspur Stadium", match: "EFL" },
        { date: "August 21, 2024", teams: "Arsenal vs. PSV", location: "Emirates Stadium", match: "Champions League" },
        { date: "August 22, 2024", teams: "Queens Park Rangers vs. Crystal Palace", location: "Loftus Road Stadium", match: "EFL" },
        { date: "August 23, 2024", teams: "Leyton Orient vs. Millwall", location: "The Breyer Group Stadium", match: "EFL" },
        { date: "August 24, 2024", teams: "Charlton Athletic vs. Chelsea", location: "The Valley", match: "EFL" },
        { date: "August 24, 2024", teams: "Dagenham & Redbridge vs. Wealdstone", location: "Chigwell Construction Stadium", match: "National League" },
        { date: "August 25, 2024", teams: "AFC Wimbledon vs. Brentford", location: "Plough Lane", match: "EFL" },
        { date: "August 26, 2024", teams: "Crystal Palace vs. West Ham", location: "Selhurst Park", match: "EFL" },
        { date: "August 27, 2024", teams: "Tottenham vs. West Brom", location: "Tottenham Hotspur Stadium", match: "EFL" },
        { date: "August 31, 2024", teams: "Arsenal vs. Crystal Palace", location: "Emirates Stadium", match: "EFL" },
        { date: "September 1, 2024", teams: "Millwall vs. QPR", location: "The Den", match: "Championship League" },
        { date: "September 3, 2024", teams: "Chelsea vs. Bristol City", location: "Stamford Bridge", match: "EFL" },
        { date: "September 4, 2024", teams: "West Ham vs. Nottingham Forest", location: "London Stadium", match: "EFL" },
        { date: "September 5, 2024", teams: "Queens Park Rangers vs. Blackburn Rovers", location: "Loftus Road Stadium", match: "EFL" },
        { date: "September 7, 2024", teams: "Sutton United vs. Crewe", location: "Gander Green Lane", match: "League 2" },
        { date: "September 7, 2024", teams: "AFC Wimbledon vs. Bradford City", location: "Plough Lane", match: "League 2" },
        { date: "September 7, 2024", teams: "Leyton Orient vs. Bristol Rovers", location: "Brisbane Road", match: "League 1" },
        { date: "September 7, 2024", teams: "Bromley vs. Aldershot Town", location: "Hayes Lane", match: "National League" },
        { date: "September 9, 2024", teams: "Fulham vs. Huddersfield", location: "Craven Cottage", match: "EFL" },
        { date: "September 14, 2024", teams: "AFC Wimbledon vs. Barrow", location: "Plough Lane", match: "League 2" },
        { date: "September 14, 2024", teams: "Charlton Athletic vs. Chelsea", location: "The Valley", match: "EFL" },
        { date: "September 14, 2024", teams: "Dagenham & Redbridge vs. Bromley", location: "Chigwell Construction Stadium", match: "National League" },
        { date: "September 14, 2024", teams: "Wealdstone vs. Southend United", location: "Grosvenor Vale", match: "National League" },
        { date: "September 21, 2024", teams: "Barnet vs. Maidenhead United", location: "The Hive Stadium", match: "National League" },
        { date: "September 21, 2024", teams: "Bromley vs. Altrincham", location: "Hayes Lane", match: "National League" },
        { date: "September 21, 2024", teams: "Charlton Athletic vs. Derby", location: "The Valley", match: "League 1" },
        { date: "September 21, 2024", teams: "Dagenham & Redbridge vs. Bromley", location: "Chigwell Construction Stadium", match: "National League" },
        { date: "September 21, 2024", teams: "Wealdstone vs. Oldham Athletic", location: "Grosvenor Vale", match: "National League" },
        { date: "September 22, 2024", teams: "West Ham vs. Newcastle", location: "London Stadium", match: "Premier League" },
        { date: "October 12, 2024", teams: "AFC Wimbledon vs. Sutton United", location: "Plough Lane", match: "League 2" },
        { date: "October 12, 2024", teams: "AFC Wimbledon vs. Gillingham", location: "Plough Lane", match: "League 2" },
        { date: "October 12, 2024", teams: "Dagenham & Redbridge vs. York City", location: "Chigwell Construction Stadium", match: "National League" },
        { date: "October 12, 2024", teams: "Wealdstone vs. Rochdale", location: "Grosvenor Vale", match: "National League" },
        { date: "October 19, 2024", teams: "Arsenal vs. Manchester City", location: "Emirates Stadium", match: "Premier League" },
        { date: "October 19, 2024", teams: "Charlton Athletic vs. Fleetwood Town", location: "The Valley", match: "League 1" },
        { date: "October 26, 2024", teams: "Crystal Palace vs. Stockport", location: "Selhurst Park", match: "FA" },
        { date: "October 27, 2024", teams: "AFC Wimbledon vs. Southampton", location: "Plough Lane", match: "FA" },
        { date: "October 29, 2024", teams: "Queens Park Rangers vs. Lincoln City", location: "Kiyan Prince Foundation Stadium", match: "FA" },
        { date: "November 2, 2024", teams: "Tottenham vs. Wolves", location: "Tottenham Hotspur Stadium", match: "Premier League" },
        { date: "November 9, 2024", teams: "Chelsea vs. Bournemouth", location: "Stamford Bridge", match: "Premier League" },
        { date: "November 12, 2024", teams: "Arsenal vs. Lens", location: "Emirates Stadium", match: "Champions League" },
        { date: "November 23, 2024", teams: "West Ham vs. Manchester United", location: "London Stadium", match: "Premier League" },
        { date: "December 1, 2024", teams: "Arsenal vs. Sevilla", location: "Emirates Stadium", match: "Champions League" },
        { date: "December 7, 2024", teams: "Crystal Palace vs. Burnley", location: "Selhurst Park", match: "Premier League" },
        { date: "December 14, 2024", teams: "Fulham vs. Nottingham Forest", location: "Craven Cottage", match: "Premier League" },
        { date: "December 28, 2024", teams: "Arsenal vs. Sheffield United", location: "Emirates Stadium", match: "Premier League" },
        { date: "January 11, 2025", teams: "Tottenham vs. Brighton", location: "Tottenham Hotspur Stadium", match: "Premier League" },
        { date: "January 11, 2025", teams: "Queens Park Rangers vs. Millwall", location: "Loftus Road Stadium", match: "Championship League" },
        { date: "January 18, 2025", teams: "West Ham vs. Luton", location: "London Stadium", match: "Premier League" },
        { date: "January 20, 2025", teams: "Arsenal vs. Lens", location: "Emirates Stadium", match: "Champions League" },
        { date: "February 3, 2025", teams: "Arsenal vs. PSV", location: "Emirates Stadium", match: "Champions League" },
        { date: "February 25, 2025", teams: "Arsenal vs. Sevilla", location: "Emirates Stadium", match: "Champions League" }
    ]
    

    $('#search-input').on('keyup', function(){
        var value = $(this).val()
        console.log('Value:', value)
        var data = searchTable(value, allGames)
        buildTable(data)
    })


    buildTable(allGames)

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

function OpenSlide(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle('open-slide');
}

function CloseSlide(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove('open-slide');
}