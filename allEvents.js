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

	//Retrieves each instance of year
	const allYearsArr = []
	const dataMap = data.map(d => {allYearsArr.push(d.year)})

	// Removes any duplicates of a year, i.e. [2021, 2021, 2021] => [2021]
	const eachYear = new Set(allYearsArr)
	// Pulls out first year to use for initial DOM load  
	const pullOutYears = eachYear.values()
	const mostCurrentYear = pullOutYears.next().value

	// Creates and loads individual buttons for each existing year
	yearNavigation(eachYear)
	const btns = document.querySelectorAll('.year-btn')

	/**
	* Initial render of event info
	* @param {object} data - public_spreadsheet_url 
	* @return {html} - of events related to most current year
	*/
	const update = data.map(data => {
		if (data.year === mostCurrentYear) {
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
		)}
	})
	// Appends events to DOM
	document.getElementById("list-container").innerHTML = update.join(" ")

	// Appends most current year
	const backgroundYear = document.querySelector('.background-year')
	backgroundYear.textContent = mostCurrentYear

	btnClick(btns, data)
}

//TODO: CREATE TOGGLE FOR FONT STAYING BIG ON CLICK , AND TRANSITION EASE OUT AFTER
/**
 * @param {array} buttons - 
 * @param {object} data - 
 */
function btnClick(btns, data){
	btns.forEach(b => b.addEventListener('click', function (){
		const btnYear = b.getAttribute('data-year')
		const backgroundYear = document.querySelector('.background-year')

		updateUI(data, btnYear)
		backgroundYear.textContent = btnYear
	}))
}

/**
 * @param {object} years
 * @return
 */
function yearNavigation(eachYear, allBtns){
	const yearNav = document.querySelector('.year-nav')

	for (year of eachYear){
		let btn = `<button class='year-btn' type="button" data-year="${year}">${year}</button>`

		yearNav.insertAdjacentHTML('beforeend', btn)
	}
}

//TODO: figure out how to make initial render of _most recent year_ and then all others on year-btn click
/**
* The updateUI function updates based on which year is clicked in yearNav
* @param {array of objects} data - based on year
* @return {html} renders onto DOM
*/
function updateUI(data, btnYear){
	const update = data.map(data => {
    if (data.year === btnYear) {
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
  document.getElementById("list-container").innerHTML = update.join(" ")
}
