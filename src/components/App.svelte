<script lang="ts">
  import {
    settingsSubMenuVisisble,
    settingsVisible,
    walletsVisible,
    networksVisible,
  } from "../store/visibles";
  import { currentSettingMenu } from "../store/currents";
  import Menus from "./Menus.svelte";

function getStorage() {
  console.log(localStorage);
}

</script>

<Menus />
<button 
on:click={getStorage}
style="z-index:100; position:absolute">Check storage</button>
<button style="z-index:100; position:relative" class="btn" id="get-info">Get Info</button>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  button {
    color: theme("colors.blue.700");
    padding: theme("spacing.2") theme("spacing.4");
    font-size: theme("fontSize.base");
    border: 1px solid theme("borderColor.blue.400");
    box-shadow: theme("boxShadow.lg");
    background-color: theme("backgroundColor.blue.50");
  }

  button:hover,
  button:focus {
    background-color: theme("colors.blue.800");
    color: theme("colors.blue.50");
  }

  .closeButtonRight {
    position: relative;
    right: 0;
    top: 0;
  }

  .settingsSubMenu {
    display: flex;
    width: 100vw;
    height: 100vh;
    /* background-color: red; */
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
  }
  #settingsHeader {
    width: 100%;
    height: 50px;
    top: 0;
    /* right:0; */
    display: flex;
    flex-direction: row;
    background-color: blue;
    justify-content: space-between;
  }

</style>
