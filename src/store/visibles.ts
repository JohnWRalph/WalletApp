import { writable } from "svelte/store";

const settingsSubMenuVisisble = writable<boolean>(false);
const settingsVisible = writable<boolean>(false);
const networksVisible = writable<boolean>(false);
const walletsVisible = writable<boolean>(false);
const generateWalletVisible = writable<boolean>(false);
export { settingsSubMenuVisisble, settingsVisible, networksVisible, walletsVisible, generateWalletVisible };