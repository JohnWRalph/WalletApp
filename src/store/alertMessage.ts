import { writable } from "svelte/store";

const alertMessage = writable<string>()

export default alertMessage;