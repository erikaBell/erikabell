// import React from 'react'
// import Header from './Header'
// import papaparse from './papaparse.js'
// import {Switch, Route, Link} from 'react-router-dom'



//  FIGURE OUT HOW TO MAKE THIS INTO DYNAMIC REUSABLE COMPONENT

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOnp2BPxtloqa6zrYoyjiS9fJY0Lqq6Bc4yVaUSBdGONBsjZSQXgaScGwdLqhzcYMeS30x_CqHYTp_/pub?output=csv';

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
          </div>`)
    

    


      document.getElementById("list-container").innerHTML = allData.join(" ")
      }





