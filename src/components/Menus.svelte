<script>
    import {
        settingsSubMenuVisisble,
        settingsVisible,
        walletsVisible,
        networksVisible,
        generateWalletVisible,
    } from "../store/visibles";
    import {
        currentSettingMenu,
        currentNetwork,
        currentWallet,
        activeTabIndex,
    } from "../store/currents";
    import { fly } from "svelte/transition";
    import { wallets } from "../domain/wallets";
    import { altNetworks, networks, testNetworks } from "../domain/networks";
    import WalletMenu from "./WalletMenu.svelte";
    import settings from "../domain/settings";
    import MainMenuHeader from "./MainMenuHeader.svelte";
    import NetworkMenu from "./NetworkMenu.svelte";
    import SettingsMenu from "./SettingsMenu.svelte";
    import SettingsSubMenu from "./SettingsSubMenu.svelte";
    import GenerateNewWallet from "./GenerateNewWallet.svelte";
    import fetchEthereumNfts from "../utils/fetchEthereumNfts";
    import { nfts } from "../store/nfts";
    import NfTview from "./NFTview.svelte";
    import fetchNFTsByAddress from "../utils/fetchNFTsByAddress";
    import WalletBalance from "./WalletBalance.svelte";
    import fetchSolanaNfts from "../utils/fetchSolanaNfts";
    import UnlockLoopring from "./buttons/UnlockLoopring.svelte";
    currentWallet.set(wallets[0]);
    currentNetwork.set(networks[0]);
    let tabs = ["Tokens", "NFTs", "Swap", "Recent Activity"];
</script>

<MainMenuHeader />
{#if $activeTabIndex == 0}
    <div>
        {#if $currentWallet}
            <WalletBalance />
        {/if}
    </div>
{/if}
<div class="nftTab">
    {#if $activeTabIndex == 1}
        <div>
            {#if $currentWallet && $currentWallet.chain === "Ethereum"}
                <button
                    on:click={() =>
                        fetchNFTsByAddress($currentWallet.address).then(
                            (data) => {
                                // ToDo: Refactor
                                function pushNFTsToCollection($nfts, data) {
                                    if ($nfts && $nfts.length) {
                                        $nfts = $nfts.concat(data);
                                        $nfts.forEach(function (nft, index) {
                                            nft.index = index;
                                        });
                                    } else {
                                        nfts.set(data);
                                    }
                                }
                                pushNFTsToCollection(nfts, data);
                            }
                        )}
                >
                    Fetch NFTs</button
                >
            {:else if $currentWallet && $currentWallet.chain === "Solana"}
                <button
                    on:click={() =>
                        fetchSolanaNfts($currentWallet.address).then((data) => {
                            // ToDo: Refactor
                            function pushNFTsToCollection($nfts, data) {
                                if ($nfts && $nfts.length) {
                                    $nfts = $nfts.concat(data);
                                    $nfts.forEach(function (nft, index) {
                                        nft.index = index;
                                    });
                                } else {
                                    nfts.set(data);
                                }
                            }
                            pushNFTsToCollection(nfts, data);
                        })}
                >
                    Fetch NFTs</button
                >
            {:else}
                Connect Wallet
            {/if}
        </div>
        {#if $nfts}
            <div style="position:absolute; top:50px;">
                <NfTview />
            </div>
        {/if}
    {/if}
</div>
{#if $activeTabIndex == 2}
    <UnlockLoopring/>
{/if}

{#if $activeTabIndex == 3}
    <div>content 4</div>
{/if}

{#if $activeTabIndex >= 0 && $activeTabIndex <= 3}
    <div class="tabs footer">
        {#each tabs as tab, index}
            <a
                class="tab tab-bordered"
                class:tab-active={$activeTabIndex == index}
                on:click={() => ($activeTabIndex = index)}
            >
                {tab}
            </a>
        {/each}
    </div>
{/if}
{#if $walletsVisible}
    <WalletMenu />
{/if}
{#if $generateWalletVisible}
    <GenerateNewWallet />
{/if}
{#if $networksVisible}
    <NetworkMenu />
{/if}

{#if $settingsVisible}
    <SettingsMenu />
{/if}
{#if $settingsSubMenuVisisble}
    <SettingsSubMenu />
{:else}{/if}

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

    .nftTab {
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: calc(100% - 100px);
        overflow: scroll;
        /* background-color: red; */
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

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        /* background-color: aqua; */
        column-gap: 0;
    }
    .tabs {
        display: flex;
        flex-wrap: nowrap;
        padding: 0;
    }
    .tab {
        /* width:100px;
      height:50px; */
        width: 25%;
        position: relative;
        /* background-color: red; */
        height: 50px;
        width: 25%;
        margin: 0;
    }

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
        z-index: 10;
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
