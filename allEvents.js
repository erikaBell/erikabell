// googleSheet data of events - future and past
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOnp2BPxtloqa6zrYoyjiS9fJY0Lqq6Bc4yVaUSBdGONBsjZSQXgaScGwdLqhzcYMeS30x_CqHYTp_/pub?gid=435615926&single=true&output=csv';

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo
  })
}

window.addEventListener('DOMContentLoaded', init)

/**
* 'showInfo' is connected to papaparse.js (code from GitHub), showInfo is acting as 'main'
* @param {object} data - public_spreadsheet_url 
*/
function showInfo(results) {
  const data = results.data
  const allYearsArr = []
  const dataMap = data.map(d => {allYearsArr.push(d.year)})
  const eachYear = new Set(allYearsArr)

  updateUI(data)
}

//TODO: figure out how to make initial render of _most recent year_ and then all othe
/**
* The updateUI function updates based on which year is clicked in yearNav
* @param {array of objects} data - based on year
* @return {html} renders onto DOM
*/
function updateUI(data){
  const eachYear = data.map(data => {
    if (data.year === '2021') {
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
  document.getElementById("list-container").innerHTML = eachYear.join(" ")
}


//TODO: Years will become buttons, this is for the functions to know which data to render
//TODO: make the 'clicked' years at top automated, so i don't need to add on each year as time passes.    Make Year in background (pink big font) also automated to change

// Attribute Button Year === Year in data, render information to DOM
function yearOnClick(e, year){
  if(e.getAttribute('data-year') === year){
      renderEvents()
  }
}
/**
 * @param {object} years
 * @return
 */
function yearNavigation(eachYear){
  for (year of eachYear){
     `<li><button type="button" data-year="${year}" onClick="${yearOnClick(e, year)}">${year}</button></li>`
  }
}
	

const performancesNavTemplate = document.createElement('template')
performancesNavTemplate.innerHTML = `
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		ul{
			margin-bottom: 8em;
			font-weight: bold;
			list-style-type: none;
			display: flex;
			justify-content: space-around;
		}
		a {
			text-decoration: none;
			color: #333333;
			
		}
		a:hover {
			font-size: 2rem;
		}
		.performance-container {
			position: fixed;
			display: inline;
			left: 2em;
			z-index: -10
		}
		.performances-title {
			color: rgba(255, 255, 255, 0.49);
			-webkit-text-stroke-width: 1px;
 			-webkit-text-stroke-color: #333333;
			font-size: 15rem;
			overflow: hidden;
		}
		::slotted(span){
			display: inline;
			position: relative;
			font-size: 6em;
			color: pink;
			-webkit-text-stroke-width: 1px;
 			-webkit-text-stroke-color: #333333;
		}
	</style>
		<div class='performance-container'>
			<h1 class="performances-title">Events</h1>
			<h3 id="year">
			 <slot name="performance-year">default</slot>
			</h3>
		</div>
	
	  <ul>
       placeholder
    </ul>
`
// //TODO: for each DATE ... create: button ... 

class PerformancesNav extends HTMLElement {
	constructor(){
		super()
	}

	connectedCallback(){
		const shadowRoot = this.attachShadow({mode: 'closed'})
		shadowRoot.appendChild(performancesNavTemplate.content)
	}
}

customElements.define('performances-component', PerformancesNav)