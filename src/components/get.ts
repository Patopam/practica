import { Add } from '../types/store';
import { get } from '../firebaseConfig';
import { addObserver, appState, dispatch } from '../store/store';
import { navigate } from '../store/action';
const FormData: Omit<Add, 'id'> = {
	name: '',
	color: '',
};

class got extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
		const ChangeHome = this.shadowRoot?.querySelector('#cambiar');
		ChangeHome?.addEventListener('click', () => {
			dispatch(navigate('home'));
		});
	}

	async render() {
		const data = await get();
		console.log('render componente', data);
		data.forEach((Box: Add) => {
			const container = this.ownerDocument.createElement('section');
			const name = this.ownerDocument.createElement('h1');
			name.innerText = Box.name;

			this.shadowRoot?.appendChild(name);

			const color = this.ownerDocument.createElement('h1');
			name.innerText = Box.color;
			this.shadowRoot?.appendChild(color);
			const cambiar = this.ownerDocument.createElement('button');
			cambiar.innerText = 'pagina1';
			cambiar.id = 'cambiar';
			this.shadowRoot?.appendChild(cambiar);
			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('custom-objetos', got);
export default got;
