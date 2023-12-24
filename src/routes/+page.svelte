<script lang="ts">
    import Social from "$lib/Social.svelte";
</script>


<section class="flex flex-col justify-center items-center gap-5 border-b-2 border-white">
    <img src="/avatar.jpg" alt="Błażej Drozd" class="rounded-full border-2 border-white" width="200px" height="200px">
    <div class="font-poppins text-white text-center flex flex-col justify-center items-center gap-2 py-2">
        <h2 class="text-xl">Hello, I'm Błażej Drozd</h2>
        <p class="text-lg">Programmer and computer scientist.</p>
        <p class="text-lg">Hobbyist electric guitarist and fan of strategy games.</p>
    </div>
</section>
<section class="flex flex-col justify-center items-center gap-5 py-3">
    <h2 class="text-white text-xl">Contact</h2>
    <Social />
</section>

