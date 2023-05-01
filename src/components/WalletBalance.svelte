<script lang="ts">
    // import ethers from "ethers";
    import {
        currentWallet,
        walletEthBalance,
        walletSolBalance,
        walletUSDBalance,
    } from "../store/currents";
    import { wallets } from "../domain/wallets";
    import { currentNetwork } from "../store/currents";
    import { ethers } from "ethers";
    // create an instance of the JSON RPC provider
    import getBalances from "../utils/getBalances";
    // const network = "homestead"; // use rinkeby testnet
    const ethereumProvider = new ethers.InfuraProvider(
        "mainnet",
        "b5f32cd516e94d3395a90e5ed9c59400"
    );
    // const address = "0xF02c1c8e6114b1Dbe8937a39260b5b0a374432bB";
    ethereumProvider.getBalance($currentWallet.address).then((balance) => {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        console.log(`balance: ${balanceInEth} ETH`);
        walletEthBalance.set(balanceInEth);
    });
    getBalances($currentWallet.address, $currentWallet.chain);
</script>

<div class="walletMenu">
    <div class="fiatBalance">
        <div class="fiatBalanceAmount">${$walletUSDBalance}</div>
    </div>
    <div class="btn-group">
        <button class="btn">Move</button>
        <button class="btn">Send</button>
        <button class="btn">Deposit</button>
        <button class="btn">Withdraw</button>
      </div>
    {#if $currentWallet.chain === "Ethereum"}
    <button class="balanceButton">
        <img
            src="../assets/ethereum-logo.svg"
            alt="ethereum"
            width="30"
            height="30"
        />
        <div>
            Ethereum: {$walletEthBalance}
        </div>
    </button>
    {/if}
    {#if $currentWallet.chain === "Solana"}
    <button class="balanceButton">
        <img
            src="../assets/ethereum-logo.svg"
            alt="ethereum"
            width="30"
            height="30"
        />
        <div>
            Solana: {$walletSolBalance}
        </div>
    </button>
    {/if}
    <div class="walletBalance" />
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .actionButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 400px;
        background-color: rgb(37, 0, 0);
    }

    .walletBalance {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 520px;
        background-color: grey;
    }

    .fiatBalance {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .fiatBalanceAmount {
        width: 300px;
        /* background-color: rgb(134, 80, 80); */
        /* text-align: center; */
    }

    .balanceButton {
        display: flex;
        flex-direction: row;

        /* background-color: rgb(54, 82, 124); */
    }

    .walletMenu {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        /* width: 520px; */
        /* background-color: yellow; */
        width: 520px;
        align-items: center;
        top: 0;
    }
</style>
