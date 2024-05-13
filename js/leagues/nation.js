$(document).ready(function() {

    var nation = [
        {
            date: "August 10, 2024",
            teams: "Barnet vs. Bromley",
            location: "The Hive Stadium, London",
            league: "National League"
        },
        {
            date: "August 24, 2024",
            teams: "Dagenham & Redbridge vs. Wealdstone",
            location: "Chigwell Construction Stadium, Dagenham",
            league: "National League"
        },
        {
            date: "September 7, 2024",
            teams: "Bromley vs. Aldershot Town",
            location: "Hayes Lane, London",
            league: "National League"
        },
        {
            date: "September 14, 2024",
            teams: "Dagenham & Redbridge vs. Bromley",
            location: "Chigwell Construction Stadium, Dagenham",
            league: "National League"
        },
        {
            date: "September 14, 2024",
            teams: "Wealdstone vs. Southend United",
            location: "Grosvenor Vale, London",
            league: "National League"
        },
        {
            date: "September 21, 2024",
            teams: "Barnet vs. Maidenhead United",
            location: "The Hive Stadium, London",
            league: "National League"
        },
        {
            date: "September 21, 2024",
            teams: "Bromley vs. Altrincham",
            location: "Hayes Lane, London",
            league: "National League"
        },
        {
            date: "September 28, 2024",
            teams: "Dagenham & Redbridge vs. Eastleigh",
            location: "Chigwell Construction Stadium, Dagenham",
            league: "National League"
        },
        {
            date: "September 28, 2024",
            teams: "Wealdstone vs. Oldham Athletic",
            location: "Grosvenor Vale, London",
            league: "National League"
        },
        {
            date: "October 5, 2024",
            teams: "Barnet vs. Fylde",
            location: "The Hive Stadium, London",
            league: "National League"
        },
        {
            date: "October 12, 2024",
            teams: "Dagenham & Redbridge vs. York City",
            location: "Chigwell Construction Stadium, Dagenham",
            league: "National League"
        },
        {
            date: "October 12, 2024",
            teams: "Wealdstone vs. Rochdale",
            location: "Grosvenor Vale, London",
            league: "National League"
        }
    ]
    

    $('#search-input').on('keyup', function(){
        var value = $(this).val()
        console.log('Value:', value)
        var data = searchTable(value, nation)
        buildTable(data)
    })


    buildTable(nation)

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
                            <td><a class="btn btn-outline-success my-2 my-sm-0 btn-get-tickets" href="https://www.livefootballtickets.com/?gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWjgdAF0lWXGqKgrq0XeJFrPmCaNkCQwWs4-L4dZqYXNVUAm34dxcbRoCegUQAvD_BwE">Get Tickets</a></td>
                        </tr>`;
            table.innerHTML += row;
        }
    }
    
  
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



})

function OpenSlide(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle('open-slide');
}

function CloseSlide(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove('open-slide');
}