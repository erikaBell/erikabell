const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
	<style>
		nav, footer{
			margin-bottom: 5em;
		}
		ul, li, footer{
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
	<footer>
		<nav>
			<ul>
				<li><a href="#">instagram</a></li>
				<li><a href="#">spotify</a></li>
				<li><a href="#">bandcamp</a></li>
				<li><a href="#">soundcloud</a></li>
				<li><a href="#">contact</a></li>
			</ul>	
		</nav>	
	</footer>
`


class Footer extends HTMLElement {
	constructor(){
		super()
	}

	connectedCallback(){
		const shadowRoot = this.attachShadow({mode: 'open'})
		shadowRoot.appendChild(footerTemplate.content)
	}
}

customElements.define('footer-component', Footer)