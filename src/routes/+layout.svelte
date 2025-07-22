<script lang="ts">
    import '../app.css';
    import Card from '$lib/Card.svelte';
</script>

<svelte:head>
    <title>Błażej Drozd</title>
    <link rel="icon" href="/github.svg" />
    <meta name="description" content="Błażej Drozd personal website">
</svelte:head>

<div class="font-ubuntu min-h-screen bg-mountains bg-no-repeat bg-cover bg-center flex justify-center items-center">
    <Card>
        <slot />
    </Card>
</div>

