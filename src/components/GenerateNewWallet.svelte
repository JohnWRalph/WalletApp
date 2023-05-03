<script lang="ts">
    import {
        generateWalletVisible,
        settingsSubMenuVisisble,
        settingsVisible,
        walletsVisible,
    } from "../store/visibles";
    import { wallets } from "../domain/wallets";
    import type { Wallet } from "../domain/wallets";
    import { currentSettingMenu } from "../store/currents";
    import { ethers } from "ethers";
    // import HDKey from "hdkey";
    import { currentWallet } from "../store/currents";

    import { fly } from "svelte/transition";

    import * as solanaWeb3 from "@solana/web3.js";
    import { Keypair } from "@solana/web3.js";
    import bs58 from "bs58";
    let accountName = "Account" + ($wallets.length + 1).toString();
    let newWalletChain = "Ethereum";

    async function generateWallet(chain, name) {
        if (chain == "Ethereum") {
            // let generatedWallet;
            
            
            const generatedWallet = ethers.Wallet.createRandom();
            // console.log(importWallet);
           

           
            
            console.log(generatedWallet);
            const newWallet: Wallet = {
                walletName: name,
                chain: newWalletChain,
                address: generatedWallet.address,
                privateKey: generatedWallet.privateKey,
                mnemonicPhrase: generatedWallet.mnemonic,
                isImported: false,
            };

            console.log("new wallet:", newWallet);

            var existingWallets = JSON.parse(localStorage.getItem("wallets"));

            if (existingWallets) {
                existingWallets.push(newWallet);
                console.log(existingWallets);
                localStorage.setItem(
                    "wallets",
                    JSON.stringify(existingWallets)
                );
                const newStoredWallets = localStorage.getItem("wallets");
                wallets.set(JSON.parse(newStoredWallets));
            } else {
                localStorage.setItem("wallets", JSON.stringify([newWallet]));
                wallets.set([newWallet]);
            }

            
        } else if (chain == "Solana") {
            console.log(solanaWeb3);
            let keypair = Keypair.generate();
            console.log(keypair);
            console.log(keypair.publicKey.toBase58());
            console.log(bs58.encode(keypair.secretKey));
            const newWallet: Wallet = {
                walletName: name,
                chain: newWalletChain,
                address: keypair.publicKey.toBase58(),
                privateKey: keypair.secretKey,
                mnemonicPhrase: "Solana does not use a mnemonic phrase",
                isImported: false,
            };
            console.log("new wallet:", newWallet);
            var existingWallets = JSON.parse(localStorage.getItem("wallets"));
            if (existingWallets) {
                existingWallets.push(newWallet);
                console.log(existingWallets);
                localStorage.setItem(
                    "wallets",
                    JSON.stringify(existingWallets)
                );
                const newStoredWallets = localStorage.getItem("wallets");
                wallets.set(JSON.parse(newStoredWallets));
            } else {
                localStorage.setItem("wallets", JSON.stringify([newWallet]));
                wallets.set([newWallet]);
            }
           
        }

       
    }

 
   
</script>

<div transition:fly={{ y: 600, duration: 200 }} class="slideUpDiv">
    <div class="appHeader">
        <button
            on:click={() => walletsVisible.set(true)}
            on:click={() => generateWalletVisible.set(false)}
            class="btn btn-circle"
        >
            ❮
        </button>
        <div id="sliderHeader">Wallets</div>
        <div style="height:50px;" class="card-actions justify-start">
            <button
                style="height:50px; width:50px;"
                on:click={() => generateWalletVisible.set(false)}
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
    <div class="newWallet">
        <h1>Generate New Wallet</h1>
        <p>{newWalletChain}</p>
        <p>{accountName}</p>
        Ethereum:<input
            bind:group={newWalletChain}
            type="radio"
            name="radio-2"
            class="radio radio-primary"
            value="Ethereum"
            checked
        />
        Solana:<input
            bind:group={newWalletChain}
            type="radio"
            name="radio-2"
            class="radio radio-primary"
            value="Solana"
        />
        <input
            bind:value={accountName}
            type="text"
            placeholder={accountName}
            class="input input-bordered w-full max-w-xs"
        />
        <button
            on:click={() => generateWallet(newWalletChain, accountName)}
            class="btn btn-secondary">Generate</button
        >

       
       
    </div>
  
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
        /* position: relative;
        left: 45%; */
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
</style>
