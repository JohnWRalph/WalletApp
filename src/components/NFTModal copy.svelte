<script>


    import Modal from "./Modal.svelte";
    import {nfts, displayedNFTs} from "../store/nfts";
    import {
        modalTitle,
        nftModalDescription,
        nftModalImage,
        nftModalAnimationImage,
        nftModalName,
        nftModalNftType,
        nftModalCreator,
        nftModalExternalUrl,
        nftModalAttributes,
    } from "../store/nftModal";
    
    import NfTattributes from "./NFTattributes.svelte";
   
    let modal;
    function createModal(event) {
        console.log("dffdfdf");
        console.log(event);
        var nftIndex = event.currentTarget.getAttribute("data-index");
        console.log(nftIndex);
        console.log($nfts[nftIndex]);
        
    }

</script>

<!-- <button on:click={() => modal.show()}>Show Button</button> -->
<Modal bind:this={modal} on:click={createModal}>
    <div id="modalNFT">
        <div id="modalTop">
             {#if $nftModalAnimationImage}
  
             <iframe id="modalAnimationImage" src={$nftModalAnimationImage} alt="nft image here" />
             {:else}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img id="modalImage" src={$nftModalImage} alt="nft image here" />
            {/if}
        </div>
        <div id="nftDetails">
            <div id="modalTitle">
                {$nftModalName}
            </div>
            
        </div>
        <div id="collectionDetails">
            <div id="collectionName">
                Collection: {$modalTitle}
            </div>
            {#if $nftModalCreator}
            <div id="creator">Created by: {$nftModalCreator}</div>
            {/if}
            {#if $nftModalDescription}
            <div id="modalDescription">
                {$nftModalDescription}
            </div>
           {/if}
        </div>
        <div>
            <div id="creatorBox">
                {#if $nftModalExternalUrl.length}
                <div class="externalLink">External Link: {$nftModalExternalUrl}</div>
                {/if}
                <!-- <div class="externalLink">external link</div> -->
            </div>
        </div>
        {#if $nftModalAttributes && $nftModalNftType === 2}
            <div id="attributeContainer">
                {#each $nftModalAttributes as attribute}
                    <NfTattributes {attribute} />
                {/each}
            </div>
        {/if}
        <!-- <div id="contractDetailsSection">
            <div class="contractDetails">Contract Adress</div>
            <div class="contractDetails">TokenType</div>
            <div class="contractDetails">Contract Adress</div>
            <div class="contractDetails">Contract Adress</div>
        </div> -->
        <div>
            <!-- {$nftModalNftType} -->
        </div>
    </div></Modal
>

<style>
    #attributeContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-left: 10%;
        margin-top: 10px;

    }

    #creator {
        width: 100%;
    }
    #collectionDetails {
        width: 100%;
       
        text-align: center;
      
    }
    #collectionName {
        width: 100%;
     
    }
    #creator {
        width: 100%;
    }
    #creatorBox {
        display: flex;
        flex-direction: row;
        text-align: center;
       
    }
    #contractDetailsSection {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        height: 110px;
    }
    
    .contractDetails {
        width: 100%;
        border: 1px solid white;
        height: 25px;
    }
    #details {
        display: flex;
        flex-direction: row;
    }
    .externalLink {
        width: 100%;
    }
    #modalNFT {
        width: 90%;
        /* min-width: 600px; */
        height: 90%;
        background-color: rgb(59, 54, 54);
        overflow-x: hidden;
 
        /* scrollbar-width: thin; */
        border-radius: 10px;
    }
    textarea {
        position: fixed;
    }
    #modalTitle {
        text-align: center;
    }

    #modalDescription {
       margin-top: 5px;
       margin-bottom: 5px;;
        text-align: center;
    }
    #collectionName {
        width: 100%;
    
    }

    #modalTop {
        /* width: 70%; */
        height: 80%;
        background-color: black;
        display: flex;
        justify-content: center;
      /* overflow-y:visible; */
     
        
    }
    #modalBottom {
        width: 100%;
        height: 30%;
       
    }
    #modalImage {
        /* height: 100%; */
    }

    #modalAnimationImage {
        width:100%;
    }
</style>
