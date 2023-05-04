import "../app.css";
import App from '../components/App.svelte';

import {getCurrentTab} from '../../utils';
console.log(getCurrentTab())
const target = document.getElementById('app');

async function render() {


  new App({ target });


}

document.addEventListener('DOMContentLoaded', render);