<script>
    import {
        settingsSubMenuVisisble,
        settingsVisible,
        walletsVisible,
        networksVisible,
    } from "../store/visibles";
    import { activeTabIndex, currentSettingMenu } from "../store/currents";

    import AddressBook from "./AddressBook.svelte";
    import ImportWallet from "./ImportWallet.svelte";
    import GeneralSettings from "./GeneralSettings.svelte";
    import Security from "./Security.svelte";
    import ConnectSites from "./ConnectSites.svelte";
    import DeveloperSettings from "./DeveloperSettings.svelte";
    import LockWallet from "./LockWallet.svelte";
</script>

<div class="settingsSubMenu">
    <div id="settingsHeader">
        <button
            on:click={() => activeTabIndex.set(0)}
            on:click={() => settingsVisible.set(true)}
            on:click={() => settingsSubMenuVisisble.set(false)}
            class="btn btn-circle"
        >
            ❮
        </button>
        <div>
            Settings
            <br />
            {$currentSettingMenu}
        </div>
        <div id="closeButtonRight" style="height:50px;" class="card-actions">
            <button
                style="height:50px; width:50px;"
                on:click={() => activeTabIndex.set(0)}
                on:click={() => settingsSubMenuVisisble.set(false)}
                on:click={() => settingsVisible.set(true)}
                class="btn btn-square btn-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    /></svg
                >
            </button>
        </div>
    </div>
</div>

<div style="color:black;">
    {#if $currentSettingMenu === "Address Book"}
        <AddressBook />
    {/if}
    {#if $currentSettingMenu === "Import Wallet"}
        <ImportWallet />
    {/if}
    {#if $currentSettingMenu === "General Settings"}
        <GeneralSettings />
    {/if}
    {#if $currentSettingMenu === "Security & Privacy"}
        <Security />
    {/if}
    {#if $currentSettingMenu === "Connected Sites"}
        <ConnectSites />
    {/if}
    {#if $currentSettingMenu === "Developer Settings"}
        <DeveloperSettings />
    {/if}
    {#if $currentSettingMenu === "Lock Wallet"}
        <LockWallet />
    {/if}
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .appHeader {
        display: flex;
        flex-direction: row;
        left: 0;
        justify-content: space-between;
        width: 520px;
        background-color: grey;
    }
    .appSlideHeader {
        background-color: grey;
    }
    .drawer-content {
        position: absolute;
        top: 0;
        /* z-index: 1;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: #fff;
        transition: transform 0.3s ease-in-out; */
    }
    .drawer {
        position: absolute;
        left: 0;
        top: 45px;
    }

    .drawerWallet {
        height: 50px;
        border: 1px solid white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #walletAddress {
        height: 200px;
    }
    .networks {
    }
    .networkButton {
        height: 50px;
        width: 75%;
        border: 1px solid white;
        border-radius: 10px;
        margin: 5px;
        /* margin-top */
    }
    #settings {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 50px);
        width: 25%;
        background-color: grey;
    }

    .slide-up.show {
        /* transform: translateY(0); */
    }
    .slideUpDiv {
        width: 520px;
        height: 100%;

        background-color: black;
        position: absolute;
        top: 0px;
        left: 0;
    }
    #sliderHeader {
        position: relative;
        left: 45%;
    }
    /* .slide-up-start{
        positon:absolute;
        margin-top:100%;
    }
    div.slide-up {
      height: 200px;
      overflow: hidden;
    }
    
    div.slide-up p {
      animation: 2s slide-up;
      margin-top: 0%;
    }
    
    @keyframes slide-up {
      from {
        margin-top: 100%;
        height: 300%;
      }
      to {
        margin-top: 0%;
        height: 100%;
      }
    } */
    #networks {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        /* justify-content:space-between; */
        /* height:100%; */
    }

    #wallets {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        /* justify-content:space-between; */
        /* height:100%; */
    }
    .walletButtons {
        height: 50px;
        width: 75%;
        border: 1px solid white;
        border-radius: 10px;
        margin: 5px;
        /* margin-top */
    }
    button {
        color: theme("colors.blue.700");
        padding: theme("spacing.2") theme("spacing.4");
        font-size: theme("fontSize.base");
        border: 1px solid theme("borderColor.blue.400");
        box-shadow: theme("boxShadow.lg");
        background-color: theme("backgroundColor.blue.50");
    }

    button:hover,
    button:focus {
        background-color: theme("colors.blue.800");
        color: theme("colors.blue.50");
    }

    .closeButtonRight {
        position: relative;
        right: 0;
        top: 0;
    }

    .settingsSubMenu {
        display: flex;
        width: 100vw;
        height: 100vh;
        /* background-color: red; */
        position: absolute;
        right: 0;
        top: 0;
    }
    #settingsHeader {
        width: 100%;
        height: 50px;
        top: 0;
        /* right:0; */
        display: flex;
        flex-direction: row;
        background-color: blue;
        justify-content: space-between;
    }
</style>
