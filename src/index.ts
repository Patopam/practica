import './components/export';
import './screens/home';
import './screens/objetos';
import { appState } from './store/store';
import { addObserver } from './store/store';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		addObserver(this);
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		switch (appState.screen) {
			case 'Home':
				const Home = this.ownerDocument.createElement('app-home');
				this.shadowRoot?.appendChild(Home);
				break;
			case 'objetos':
				const objetos = this.ownerDocument.createElement('app-objetos');
				this.shadowRoot?.appendChild(objetos);
				break;
			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
