<script lang = "ts">
   
export let attribute;
</script>

<div class="individualAttributes">
    {attribute.trait_type}<br>
    {attribute.value}
</div>

<style>
    .individualAttributes {
        border: 1px solid black;
        width:20%;
        text-align: center;
        margin: 5px;
    }
</style>