const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs, query, orderBy } = require('firebase/firestore');
import { Add } from './types/store';

const firebaseConfig = {
	apiKey: 'AIzaSyDgAJvGH4dhqzoRVxqP7xB48nCS9HspO4g',
	authDomain: 'sai-project-9c598.firebaseapp.com',
	projectId: 'sai-project-9c598',
	storageBucket: 'sai-project-9c598.appspot.com',
	messagingSenderId: '133078057541',
	appId: '1:133078057541:web:c94d6d0fb1f2648dd0992c',
	measurementId: 'G-XSVD4VFKFS',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const add = async (FormData: Omit<Add, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'data'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const get = async () => {
	const querySnapshot = await getDocs(query(collection(db, 'data'), orderBy('pTitle', 'desc')));
	const Array: Array<Add> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Array.push({ id: doc.id, ...data });
	});
	console.log('get', Array);
	return Array;
};
