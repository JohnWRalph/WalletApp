<script>
    import{ wallets} from "../domain/wallets";
    import { currentNetwork, currentWallet } from "../store/currents";
    import {
        networksVisible,
        settingsVisible,
        walletsVisible,
    } from "../store/visibles";
    import WalletBalance from "./WalletBalance.svelte";
</script>

<div class="drawer-content appHeader">
    <!-- Page content here -->
    <label>
        <button
            class="btn btn-primary"
            on:click={() => settingsVisible.set(true)}>settings</button
        >
    </label>
    <div>
        <button on:click={() => walletsVisible.set(true)} class="btn">
            {#if $currentWallet}
            {$currentWallet.walletName}
            {$currentWallet.address.slice(0, 5)+"..."+$currentWallet.address.slice(-4)}
            {:else}
            No Wallet Connected
            {/if}
        
        </button>
        <br />
    </div>
    <label>
        <button
            class="btn btn-primary"
            on:click={() => networksVisible.set(true)}
            >Network<br /> {$currentNetwork}</button
        >
    </label>
</div>




<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    .appHeader{
        display:flex;
        flex-direction:row;
        left:0;
        justify-content:space-between;
        width:520px;
        background-color: grey;
    }
    .appSlideHeader{
        background-color: grey;
    }
    .drawer-content {
        position: absolute;
        top:0;
        /* z-index: 1;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: #fff;
        transition: transform 0.3s ease-in-out; */
    }
    .drawer {
        position: absolute;
        left:0;
        top:45px; 
    }
    
    .drawerWallet{
        height:50px;
        border:1px solid white;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    #walletAddress{
        height:200px;
    }
    .networks {
        
    
    }
    .networkButton{
        height:50px;
        width:75%;
        border:1px solid white;
        border-radius:10px;
        margin:5px;
        /* margin-top */
    }
    #settings{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:calc(100% - 50px);
        width:25%;
        background-color:grey;
    }
    
    .slide-up.show {
      /* transform: translateY(0); */
    }
    .slideUpDiv{
        width:520px;
        height:100%;
    
        background-color:black;
        position:absolute;
        top:0px;
        left:0;
    }
    #sliderHeader {
        position:relative;
        left:45%;
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
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:10px;
        /* justify-content:space-between; */
        /* height:100%; */
    }
    
    #wallets {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:10px;
        /* justify-content:space-between; */
        /* height:100%; */
    }
    .walletButtons{
        height:50px;
        width:75%;
        border:1px solid white;
        border-radius:10px;
        margin:5px;
        /* margin-top */
    }
    
    </style>