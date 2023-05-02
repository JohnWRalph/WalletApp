<script lang="ts">

async function UnlockLoopring(){
    console.log("Unlock Loopring")
}
</script>

<button id="unlockLoopringButton" class="btn btn-secondary" on:click={UnlockLoopring}>Unlock Loopring</button>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

  #unlockLoopringButton {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 100;
  }
</style>