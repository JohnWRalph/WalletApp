<script>
        import {settingsSubMenuVisisble, settingsVisible, walletsVisible, networksVisible} from "../store/visibles"
    console.log($settingsSubMenuVisisble)
import savedAddresses from "../store/addresses";
   
</script>

{#each $savedAddresses as address}
    <div class="address">
        <div class="addressName">
            {address.addressName}
        </div>
        <div class="addressValue">
            {address.address}
        </div>
    </div>
{/each}

<style gloabal lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .address{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        background-color: grey;
    }
    .addressName{
        width:50%;
    }
    .addressValue{
        width:50%;
    }
</style>