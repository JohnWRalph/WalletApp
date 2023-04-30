<script>
    import generalSettings from "../store/generalSettings";

    function storeSettings(setting, settingValue) {
      if (setting === "theme") {
        $generalSettings.theme = settingValue;
      }
        localStorage.setItem("generalSettings", JSON.stringify($generalSettings));
        const storedSettings = localStorage.getItem("generalSettings");
        console.log(storedSettings);
    }
    console.log($generalSettings);
</script>
<ul>


<li>PrimaryCurreny: {$generalSettings.primaryCurrency}</li>
<li>Language: {$generalSettings.language}</li>
<div class="dropdown dropdown-bottom">
    <label tabindex="0" class="btn m-1">Change Theme</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li on:click={() => storeSettings("theme","Theme 1")}><a>Theme 1</a></li>
      <li on:click={() => storeSettings("theme","Theme 2")}><a>Theme 2</a></li>
      <li on:click={() => storeSettings("theme","Theme 3")}><a>Theme 3</a></li>
    </ul>
  </div>


</ul>
Profile Picture: <img src="{$generalSettings.profilePicture}" alt="Profile Picture" />

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    
</style>