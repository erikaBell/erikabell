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