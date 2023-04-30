<script>
    import generalSettings from "../store/generalSettings";


</script>

<div>
    <h1>
        Lock Wallet
    </h1>
    <p>
        {$generalSettings.isWalletLocked}
    </p>
    <button>Reveal Secret Recovery Phrase</button>
</div>