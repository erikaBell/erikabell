
const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
	<style>
		header {
			margin-bottom: 5em;
		}
		ul{
			list-style-type: none;
			display: flex;
			justify-content: space-around;
		}
		a {
			text-decoration: none;
			color: #333333;
			transition: font-size 0.5s;
		}
		a:hover {
			font-size: 2rem;
			font-weight: bold;
		}
		a:focus {
		}

	</style>
	<header>
		<nav>
			<ul>
				<li><a href="index.html">ERIKA BELL</a></li>
				<li><a href="allEvents.html">EVENTS</a></li>
				<li><a href="work.html">MUSIC</a></li>
				<li><a href="mailto:erika.h.m.bell@gmail.com" target="_self">CONTACT</a></li>
			</ul>	
		</nav>	
	</header>
	`
	
class Header extends HTMLElement {
	constructor(){
		super()
	}

	connectedCallback(){
		const shadowRoot = this.attachShadow({mode: 'closed'})
		shadowRoot.appendChild(headerTemplate.content)
	}
}

customElements.define('header-component', Header)



