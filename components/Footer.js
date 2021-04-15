const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
	<style>
		footer{
			margin-bottom: 5em;
		}
		ul {
			list-style-type: none;
			display: flex;
			justify-content: center;
		}
		li {
			margin-left: .1em;
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
				<li><a href="https://www.instagram.com/erikabell/?hl=en" target="_blank" rel="noreferrer noopener">
					instagram
				</a></li>
				<li><a href="https://open.spotify.com/artist/3XIXVH00m25QAt8yGZZhuj?si=ROFCuKCjQ9mpFt2MiubJcw" target="_blank" rel="noreferrer noopener">
					spotify
				</a></li>
				<li><a href="https://erikabell.bandcamp.com/" target="_blank" rel="noreferrer noopener">
					bandcamp
				</a></li>
				<li><a href="https://soundcloud.com/erikabell" target="_blank" rel="noreferrer noopener">
					soundcloud
				</a></li>
				<li><a href="mailto:erika.h.m.bell@gmail.com" target="_self" rel="noreferrer noopener">
					contact
				</a></li>
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