
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
			
		}
		a:hover {
			font-size: 2rem;
		}

	</style>
	<header>
		<nav>
			<ul>
				<li><a href="about.html">ERIKA BELL</a></li>
				<li><a href="performance-main.html">EVENTS</a></li>
				<li><a href="work.html">WORK</a></li>
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



