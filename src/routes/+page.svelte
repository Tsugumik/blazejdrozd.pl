<script>
    import Hero from "$lib/sections/Hero.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import Tech from "$lib/sections/Tech.svelte";
    import Projects from "$lib/sections/Projects.svelte";
    import Contact from "$lib/sections/Contact.svelte";
</script>

<svelte:head>
    <title>Błażej Drozd</title>
    <link rel="icon" href="/github.svg" />
    <meta name="description" content="Błażej Drozd personal website">
</svelte:head>

<Hero/>
<Projects/>
<Tech/>
<Contact/>
<Footer/>