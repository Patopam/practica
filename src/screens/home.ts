import Card from '../components/add';
import '../components/export';

class home extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('custom-add') as Card;
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-home', home);
