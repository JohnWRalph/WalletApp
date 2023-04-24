<script>
let items = [1,2,3,4,5,6,7,8,9,10];
let people = [
    {   name: 'John',
    age: 30,
    city: 'New York'

    },
    {   name: 'John',
    age: 30,
    city: 'New York'
    }

]
</script>

<div class="appHeader">

    {#each people as item}
    {item.name}
    <br>
    {item.age}
    {/each}
</div>



<style>
    .appHeader {
        background-color: #fff;
        border-bottom: 1px solid #e6e6e6;
        height: 3.5rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }
</style>