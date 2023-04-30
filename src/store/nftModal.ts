import { writable} from "svelte/store";

const shown = writable<boolean>();
const modalTitle = writable<string>();
const nftModalDescription = writable<string>();
const nftModalImage = writable<string>();
const nftModalAnimationImage = writable<string>();
const nftModalName = writable<string>();
const nftModalNftType = writable<number>();
const nftModalCreator =writable<string>();
const nftModalExternalUrl = writable<string>();
const nftModalAttributes = writable<string>();

shown.set(false)

export {shown, modalTitle, nftModalDescription, 
    nftModalImage,nftModalAnimationImage, nftModalName,nftModalNftType,
nftModalCreator,nftModalExternalUrl,nftModalAttributes};