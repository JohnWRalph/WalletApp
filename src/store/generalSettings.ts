import { writable } from "svelte/store"

type GenralSettings = {
    primaryCurrency: string,
    language: string,
    theme: string,
    isDarkMode: boolean,
    isAdvancedMode: boolean,
    profilePicture: string,
    isWalletLocked: boolean,
}
const generalSettings = writable<GenralSettings>({
    primaryCurrency: "USD",
    language: "English",
    theme: "Light",
    isDarkMode: false,
    isAdvancedMode: false,
    profilePicture: "https://i.pinimg.com/originals/0f/6d/9a/0f6d9a4e2b5e1e1e0f0f0f0f0f0f0f0f.jpg",
    isWalletLocked: false,
})

if (localStorage.getItem("generalSettings") === null) {
    localStorage.setItem("generalSettings", JSON.stringify(generalSettings))

} else {
    generalSettings.set(JSON.parse(localStorage.getItem("generalSettings")))
}

export default generalSettings
export type { GenralSettings }