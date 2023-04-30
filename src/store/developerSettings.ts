import { writable } from "svelte/store"

type DeveloperSettings = {
    isDeveloperMode: boolean,
    testNetsOn: boolean,
}

const developerSettings = writable<DeveloperSettings>({
    isDeveloperMode: false,
    testNetsOn: false,
})

export default developerSettings;
export type {DeveloperSettings};