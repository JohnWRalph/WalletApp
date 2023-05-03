<script>
    import getBalances from "../utils/getBalances";
    import {wallets} from "../domain/wallets";
    import { currentWallet } from "../store/currents";
    import { generateWalletVisible, walletsVisible } from "../store/visibles";
    import { fly } from "svelte/transition";
    console.log($wallets);
</script>

<div transition:fly={{ y: 600, duration: 200 }} class="slideUpDiv">
    <div class="appHeader">
        <div id="sliderHeader">Wallets</div>
        <div style="height:50px;" class="card-actions justify-start">
            <button
                style="height:50px; width:50px;"
                on:click={() => walletsVisible.set(false)}
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
    <div id="wallets">
        <button on:click={() => localStorage.clear()} on:click={() => wallets.set([])}>Clear Storage</button>
        {#each $wallets as wallet}
            <button
                on:click={() => console.log(wallet)}
                on:click={() => localStorage.setItem("currentWallet", JSON.stringify(wallet))}
                on:click={() => currentWallet.set(wallet)}
                on:click={()=> getBalances($currentWallet.address, $currentWallet.chain)}
                on:click={() => walletsVisible.set(false)}
                class="btn btn-primary walletButtons"
            >
                <div class="connectedWalletsChainImage">
                    <img
                        src="../assets/{wallet.chain}-logo.svg"
                        alt="ethereum"
                        width="30"
                        height="30"
                    />
                </div>
                <div>
                    {wallet.walletName}
                    <br />
                    {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                </div>
            </button>
        {/each}
    </div>
    <button
        on:click={() => walletsVisible.set(false)}
        on:click={() => generateWalletVisible.set(true)}
        class="btn btn-secondary">Generate New Wallet</button
    >
    <button on:click={() => console.log(localStorage["wallets"])}
        >Check Storage</button
    >
    
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
    .connectedWalletsChainImage {
        position: relative;
        left: 0;
    }
    .drawer-content {
        position: absolute;
        top: 0;
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
        justify-content: space-between;
        /* margin-top */
    }
</style>
