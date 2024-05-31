import got from '../components/get';
import '../components/export';

class objetos extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('custom-objetos') as got;
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-objetos', objetos);
