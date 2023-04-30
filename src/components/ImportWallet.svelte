<script lang="ts">
    
    import * as base58 from "base58";
    import {
        settingsSubMenuVisisble,
        settingsVisible,
        walletsVisible,
        networksVisible,
    } from "../store/visibles";
    console.log($settingsSubMenuVisisble);
    import { activeTabIndex } from "../store/currents";
    import type { Wallet } from "../domain/wallets";
    import savedAddresses from "../store/addresses";
    import { wallets, importedWallets } from "../domain/wallets";
    import { ethers } from "ethers";
    import { Keypair } from "@solana/web3.js";
    import * as bs58 from "bs58";
    let tabs = ["Private Key", "Secret Recovery Phrase"];
    let importWalletTabIndex = 1;
    let importAddress;
    let importSRP;
    let importPrivateKey;
    let importAccountName;
    if (localStorage.getItem("wallets")) {
        importAccountName =
            "Account" +
            (JSON.parse(localStorage.getItem("wallets")).length + 1);
    } else {
        importAccountName = "Account1";
    }

    let importChain = "Ethereum";
    async function importWalletFromPrivateKey() {
        console.log(importAccountName);
        console.log(importAddress);
        console.log(importPrivateKey);
        console.log(importChain);
        console.log(importSRP);
        const existingWallets = localStorage.getItem("wallets");
        const existingWalletsParsed = JSON.parse(existingWallets);
        console.log(existingWalletsParsed);

        const privateKey = importPrivateKey;
        if (importChain === "Ethereum") {
            
            const importWallet = new ethers.Wallet(privateKey);
            console.log(importWallet);
            if (localStorage.getItem("wallets")) {
                console.log(importWallet);
                const newWallet: Wallet = {
                    walletName: importAccountName,
                    chain: importChain,
                    address: importWallet.address,
                    privateKey: importWallet.privateKey,
                    mnemonicPhrase: "",
                    isImported: false,
                };
                console.log(newWallet);
                if (existingWalletsParsed) {
                    existingWalletsParsed.push(newWallet);
                    localStorage.setItem(
                        "wallets",
                        JSON.stringify(existingWalletsParsed)
                    );
                    wallets.set(existingWalletsParsed);
                } else {
                    localStorage.setItem(
                        "wallets",
                        JSON.stringify([newWallet])
                    );
                    wallets.set([newWallet]);
                }
            }
        } else if (importChain === "Solana") {
            console.log(importChain);
           
            const uint8array = new Uint8Array(Object.values(privateKey));
            console.log(uint8array);
            const newsol = bs58.decode(privateKey);
            console.log(newsol);
        
            const keypair = Keypair.fromSecretKey(newsol);
            console.log(keypair);
           
            const newWallet: Wallet = {
                walletName: importAccountName,
                address: keypair.publicKey.toBase58(),
                privateKey: keypair.secretKey,
                chain: importChain,
                mnemonicPhrase: "",
                isImported: true,
            };
            console.log(newWallet);

            if (existingWalletsParsed) {
                existingWalletsParsed.push(newWallet);
                localStorage.setItem(
                    "wallets",
                    JSON.stringify(existingWalletsParsed)
                );
                wallets.set(existingWalletsParsed);
            } else {
                localStorage.setItem("wallets", JSON.stringify([newWallet]));
                wallets.set([newWallet]);
            }
        }


    }

    async function importWalletFromPhrase() {
        console.log(importAddress);
        console.log(importPrivateKey);
        console.log(importChain);
        console.log(importSRP);
        const existingWallets = localStorage.getItem("wallets");
        const existingWalletsParsed = JSON.parse(existingWallets);

        console.log(existingWalletsParsed);

   
        const mnemonic = importSRP;
        var importedWalletsList = [];

        if (importChain === "Ethereum") {
            const wallet = ethers.Wallet.fromPhrase(mnemonic);
            console.log(wallet);

            const newWallet: Wallet = {
                walletName: importAccountName,
                address: wallet.address,
                privateKey: wallet.privateKey,
                chain: importChain,
                mnemonicPhrase: mnemonic,
                isImported: true,
            };

            importedWalletsList.push(newWallet);
        } else if (importChain === "Solana") {
            console.log(importChain);
            const privateKey = importPrivateKey;
            console.log(privateKey);
           
        }

     
    }
</script>

<div style="position:relative;">
    Ethereum:<input
        type="radio"
        name="importChain"
        class="radio radio-accent"
        value={"Ethereum"}
        style="z-index:10000"
        bind:group={importChain}
        checked
    />
    Solana:<input
        type="radio"
        name="importChain"
        class="radio radio-accent"
        style="z-index:10000"
        value={"Solana"}
        bind:group={importChain}
    />
  
</div>

<div class="tabs">
    {#each tabs as tab, index}
        <a
            class="tab tab-bordered"
            class:tab-active={importWalletTabIndex == index}
            on:click={() => (importWalletTabIndex = index)}
        >
            {tab}
        </a>
    {/each}
</div>
{#if importWalletTabIndex == 0}
    <div>
        <div class="form-control">
            <label class="label" />
            <label class="input-group">
                <span>Address</span>
                <input
                    bind:value={importAccountName}
                    type="text"
                    placeholder="Address"
                    class="input input-bordered"
                />
            </label>
        </div>
    </div>

    <div class="form-control">
        <label class="label" />
        <label class="input-group">
            <span>Private Key</span>
            <input
                bind:value={importPrivateKey}
                type="text"
                placeholder="Private Key"
                class="input input-bordered"
            />
        </label>
    </div>
    <div class="form-control">
        <label class="label" />
        <label class="input-group">
            <button
                on:click={importWalletFromPrivateKey}
                style="z-index:10000"
                class="btn btn-accent">Import Wallet</button
            >
        </label>
    </div>
{/if}

{#if importWalletTabIndex == 1}
    <div>
        <div class="form-control">
            <label class="label" />
            <label class="input-group">
                <span>Secret Recovery Phrase</span>
                <input
                    bind:value={importSRP}
                    type="text"
                    placeholder="Secret Recovery Phrase"
                    class="input input-bordered"
                />
            </label>
        </div>
    </div>

    <div class="form-control">
        <label class="label" />
        <label class="input-group">
            <button
                on:click={importWalletFromPhrase}
                style="z-index:10000"
                class="btn btn-accent">Import Wallet</button
            >
        </label>
    </div>
{/if}

{#if $importedWallets && $importedWallets.length}
    {#each $importedWallets as wallet}
        <div class="address">
            <div class="addressName">
                {wallet.walletName}
            </div>
            <div class="addressValue">
                {wallet.address}
            </div>
        </div>
    {/each}
{/if}



<style gloabal lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .address {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        background-color: grey;
    }
    .addressName {
        width: 50%;
    }
    .addressValue {
        width: 50%;
    }
</style>
