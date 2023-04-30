<script lang="ts">
    import {nfts, displayedNFTs} from "../store/nfts";
    import parseImageURL from "../utils/parseImageURL";
    import axios from "axios";

    import {
        shown,
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
    import type { NFT } from "../domain/nft";
    export let nft: NFT;

    let modal;
    let element;
    function onClickEquivalent(event) {
        nftModalAnimationImage.set("");
        console.log("dffdfdf");
        // console.log(event);
        var nftIndex = event.currentTarget.getAttribute("data-index");
        // console.log(nftIndex);
        console.log("name", $nfts[nftIndex]);
        shown.set(true);
        modalTitle.set($nfts[nftIndex].collection);
        nftModalDescription.set($nfts[nftIndex].description);
        nftModalImage.set($nfts[nftIndex].imageURL);
        nftModalName.set($nfts[nftIndex].name);
        nftModalNftType.set($nfts[nftIndex].nftType);
        nftModalCreator.set($nfts[nftIndex].creator);
        nftModalExternalUrl.set($nfts[nftIndex].externalUrl);
        nftModalAttributes.set($nfts[nftIndex].attributes);
        // axios
        //     .get(parseImageURL($nfts[nftIndex].animationImage))
            
        //     .then((response) => {
        //         // console.log(
        //         //     "response",
                 
        //         //         response.data.animation_url
        //         // );
        //         nftModalAnimationImage.set(
                   
        //                 response.data.animation_url
        //         );
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        // nftModalAnimationImage.set($nfts[nftIndex].animationImage)
        // console.log(event.currentTarget.getAttribute("data-index"));
        // const target = event.target;
        // const parent = target.parentElement;
        // console.log("target", target);
        // console.log("huh",event.parentElement.parentElement);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    data-index={nft.index}
    id="nftCard"
    class="nft"
    on:click={onClickEquivalent}
>
    <div id="nftImageSection">
        <img class="nftImage" src={parseImageURL(nft.imageURL)} alt="" />
        
    </div>
    <div id="nftBottom">
        <div id="nftTypeSection">
            {#if nft.nftType === 0}
                <img
                    class="nftType"
                    src="https://blog.logomyway.com/wp-content/uploads/2021/11/Ethereum-logo.png"
                    alt="Chain not detected"
                />
            {/if}
            {#if nft.nftType === 1}
                <img
                    class="nftType"
                    src="https://cryptologos.cc/logos/immutable-x-imx-logo.png"
                    alt="Chain not detected"
                />
            {/if}
            {#if nft.nftType === 2}
                <img
                    class="nftType"
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                    alt="Chain not detected"
                />
            {/if}
            {#if nft.nftType === 3}
                <img
                    class="nftType"
                    src="https://cryptologos.cc/logos/loopring-lrc-logo.png"
                    alt="Chain not detected"
                />
            {/if}
        </div>
        <div id="nftInfo">
            {nft.collection} <br />
            {nft.name}<br />
        </div>
    </div>
</div>

<style>
    .nft {
        border: 1px solid white;
        height: 275px;
        width: 250px;
        text-align: center;
        margin: 10px;
        border-radius: 10px;
        transition: 0.65s;
    }

    .nft:hover {
        transform: scale(1.1);
    }

    img {
        height: 100%;
        max-width: 90%;
       /* justify-content: center; */
        /* margin-left: auto; */
        /* margin-right: auto; */
        /* contain: content; */
        /* max-width: fit-content; */
        /* overflow-x: hidden; */
        /* width: 100px; */
    }
    #nftImageSection {
        border-bottom: 1px solid white;
        height: 70%;
        display: flex;
        justify-content: center;
        /* margin-left: 10%; */
        /* margin-left: auto; */
        /* margin-right: auto; */
        /* align-items: center; */
        /* background-image:url('https://i.pinimg.com/originals/09/fc/c0/09fcc069751b0364446530e40c4c2675.gif'); background-repeat:repeat;  */
        overflow: hidden;
        /* contain: content; */
    }
    #nftBottom {
        color:black;
        display: flex;
        flex-direction: row;
        height: 30%;
        background-color: rgba(48, 63, 87, 0.5);
        opacity: 0.9;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom: 1px solid white;
    }
    .nftType {
        height: 50%;
        width: auto;
    }
    #nftTypeSection {
        /* border: 1px solid white; */
        width: 20%;
        height: 100%;
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #nftInfo {
        margin-left: 0%;
        width: 100%;
        height:max-content;
        display: flex;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
        /* border: 1px solid yellow; */
    }
    #nftCard {
        /* z-index: 5; */
    }
</style>
