<script>
    import settings from "../domain/settings";
    import { 
        networksVisible,
        settingsSubMenuVisisble,
        settingsVisible,
        walletsVisible,
    } from "../store/visibles";
    import { activeTabIndex, currentSettingMenu } from "../store/currents";
    import { fly } from "svelte/transition";

</script>
<div transition:fly="{{ y: 600, duration: 200 }}" class="slideUpDiv">
    <div class="appHeader">
        <div id="sliderHeader">
                Settings
        </div>
        <div style="height:50px;" class="card-actions justify-start">
            <button style="height:50px; width:50px;" on:click={() => settingsVisible.set(false)} class="btn btn-square btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </div>
    <div id="settings">
        {#each settings as setting}
            <button  
            on:click={() => settingsVisible.set(false) } 
            on:click={() => activeTabIndex.set(5)}
            on:click={() => settingsSubMenuVisisble.set(true)} 
            on:click={() => currentSettingMenu.set(setting)} 
            class="btn btn-primary settingButton">
        
                <div>
                    {setting}
                </div>
            </button>
        {/each}
  
    </div>

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
        width:100%;
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