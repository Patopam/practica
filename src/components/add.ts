import { Add } from '../types/store';
import { add } from '../firebaseConfig';
import { addObserver, appState, dispatch } from '../store/store';
import { navigate } from '../store/action';
const FormData: Omit<Add, 'id'> = {
	name: '',
	color: '',
};

class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
		const ChangeHome = this.shadowRoot?.querySelector('#cambiar');
		ChangeHome?.addEventListener('click', () => {
			dispatch(navigate('obejetos'));
		});
	}

	changeName(e: any) {
		FormData.name = e?.target?.value;
	}
	changeColor(e: any) {
		FormData.color = e?.target?.value;
	}

	submitForm() {
		add(FormData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'hola';
			this.shadowRoot?.appendChild(title);

			const name = this.ownerDocument.createElement('input');
			name.placeholder = 'Name';
			name.addEventListener('change', this.changeName);
			this.shadowRoot?.appendChild(name);

			const color = this.ownerDocument.createElement('input');
			color.type = 'color';
			color.addEventListener('change', this.changeColor);
			this.shadowRoot?.appendChild(color);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'ADD';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);

			const cambiar = this.ownerDocument.createElement('button');
			cambiar.innerText = 'pagina2';
			cambiar.id = 'cambiar';
			this.shadowRoot?.appendChild(cambiar);

			const songs = this.ownerDocument.createElement('custom-songs');
			this.shadowRoot?.appendChild(songs);
		}
	}
}

customElements.define('custom-add', Card);
export default Card;
