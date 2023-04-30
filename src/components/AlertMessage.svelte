<script lang="ts">
    import alertMessage from "../store/alertMessage";


</script>

<!--Display error message to user-->
{#if $alertMessage}
<div id="alert">
  {$alertMessage}
  
</div>
<!-- svelte-ignore empty-block -->
{:else}{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #alert {
      border: 1px solid white;
      height: 50px;
      width:90%;
      position: fixed;
      bottom:10px;
      left:5%;
      z-index:100;
      border-radius: 10px;
      background-color: rgb(92, 216, 92);
      color:black;
      justify-content: center;
      display: flex;
      align-items: center;
      font-weight:bold;
  }
</style>
