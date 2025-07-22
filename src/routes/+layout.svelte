<script lang="ts">
    import '../app.css';
    import NavBar from "$lib/NavBar.svelte";

    let {children} = $props();
</script>

<div>
    <NavBar/>
    {@render children()}
</div>



