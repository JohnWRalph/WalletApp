import { writable } from "svelte/store";
import connectedSitesList from "../domain/connectedSites";
const connetedSites = writable<string[]>(connectedSitesList);
export default connetedSites;