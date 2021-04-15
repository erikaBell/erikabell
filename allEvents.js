// TODO: refactor one JS page maintains all performances 

const public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOnp2BPxtloqa6zrYoyjiS9fJY0Lqq6Bc4yVaUSBdGONBsjZSQXgaScGwdLqhzcYMeS30x_CqHYTp_/pub?gid=435615926&single=true&output=csv';

// Related to papaParse.js, code from github repo
  function init() {
    Papa.parse(public_spreadsheet_url, {
      download: true,
      header: true,
      complete: showInfo
    })
  }
  window.addEventListener('DOMContentLoaded', init)

function renderEvents(results) {
  const data = results.data
  console.log(data)
  

  document.getElementById("list-container").innerHTML = allData.join(" ")
}

//TODO: Years will become buttons, this is for the functions to know which data to render
  button.addEventListener('click', function() {
    
  })

//TODO: make the 'clicked' years at top automated, so i don't need to add on each year as time passes.    Make Year in background (pink big font) also automated to change
/**
 * Renders events onto the DOM
 * @param {Object} eventsData [all events retrieved from google doc]
 * @return {HTML}
 */
function renderPerformances(data){
  if (data.year === data.year) {
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
}

// Removed performances na JS and pasted into allEvents js 
const eventsData = require('./allEvents.js')

const { data } = eventsData.data
console.log(data)
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
       <li><a href="./performance-main.html">2021</a></li>
       <li><a href="./2020.html">2020</a></li>
       <li><a href="./2019.html">2019</a></li>
       <li><a href="./2018.html">2018</a></li>
       <li><a href="./2017.html">2017</a></li>
      </ul>
`
//TODO: for each DATE ... create: button ... ${

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