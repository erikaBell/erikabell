var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOnp2BPxtloqa6zrYoyjiS9fJY0Lqq6Bc4yVaUSBdGONBsjZSQXgaScGwdLqhzcYMeS30x_CqHYTp_/pub?gid=435615926&single=true&output=csv';

      function init() {
        Papa.parse(public_spreadsheet_url, {
          download: true,
          header: true,
          complete: showInfo
        })
      }

      window.addEventListener('DOMContentLoaded', init)
      
    function showInfo(results) {
      var archiveBlock = document.getElementById('list-container');
      const data = results.data
      
      const allYears = data.map(data => data.year)

      const uniqueYears = allYears.filter(function(item, index){
         return allYears.indexOf(item) >= index;
     });

 // CHOOSE YEAR BASED OFF INDEX OF ITEM IN UNIQURE YEARS VARIABLE
       const allData = data.map(data => {
         if (data.year === uniqueYears[1]) {
          return (
            `<div class="past-performances"> 
              <div class="datesAndLocations"> 
                <p class="dates"> ${data.date}</p> 
                <p class="locations"> ${data.location}</p>
              </div>
              <div class="piecesAndDescripts">
                <p class="pieces">
                  ${data.type === 'Composition' ? data.premiere + " "+`<i>${data.piece}</i>` : data.piece}
                </p>
                <p class="descriptions"> ${data.description}</p>
              </div>
            <br>
          </div>`
            )
         }
       })

      document.getElementById("list-container").innerHTML = allData.join(" ")

      }