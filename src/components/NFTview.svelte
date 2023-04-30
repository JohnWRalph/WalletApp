<script land="ts">
   
    import {nfts, displayedNFTs} from "../store/nfts";
    import Nft from "./NFT.svelte";
</script>

{#if $nfts && $nfts.length}
<div class="nfts-grid">
    {#each $nfts as nft}
    
    <Nft {nft}/>
   {/each}
</div>
   
{:else}
 <div id="nftViewPlaceholder">

 </div>
{/if}


<style>
    .nfts-grid {
        /* margin-top:100px; */
    display: flex;
    flex-direction: row;
    border: 1 px solid yellow;
    flex-wrap: wrap;
    justify-content: center;
    /* width: 100%; */
    /* overflow:visible; */
    /* height: fit-content; */
    /* margin-top: 85px; */
    /* margin-left: 120px; */
    }
    
    #nftViewPlaceholder {
        
        /* border: 1px solid red; */
    }
</style>