<script>
    import developerSettings from "../store/developerSettings";


</script>

<div>
    <h1>
        Developer Settings
    </h1>
        Developer Mode: {$developerSettings.isDeveloperMode}
        Show Test Nets: {$developerSettings.testNetsOn}
    <button>Reveal Secret Recovery Phrase</button>
</div>