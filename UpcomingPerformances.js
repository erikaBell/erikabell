// import React from 'react'
// import Header from './Header'
// import papaparse from './papaparse.js'
// import {Switch, Route, Link} from 'react-router-dom'

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOnp2BPxtloqa6zrYoyjiS9fJY0Lqq6Bc4yVaUSBdGONBsjZSQXgaScGwdLqhzcYMeS30x_CqHYTp_/pub?gid=1983379765&single=true&output=csv';

      function init() {
        Papa.parse(public_spreadsheet_url, {
          download: true,
          header: true,
          complete: showInfo
        })
      }

      window.addEventListener('DOMContentLoaded', init)


      function showInfo(results) {
        const data = results.data


        const allData = data.map(data => 
          `<div class="upcoming-performances"> 
              <div class="upcoming-datesAndLocations"> 
                <p class="upcoming-dates"> ${data.date}</p> 
                <p class="upcoming-locations"> ${data.location}</p>
              </div>
              <div class="upcoming-piecesAndDescripts">
                <p class="upcoming-pieces">
                  ${data.type === 'Composition' ? data.premiere + " "+`<i>${data.piece}</i>` : data.piece}
                </p>
                <p class="upcoming-descriptions"> ${data.description}</p>
              </div>
            <br>
          </div>`)
    
console.log(allData)
    


      document.getElementById("list-container-upcoming").innerHTML = allData.join(" ")
      }