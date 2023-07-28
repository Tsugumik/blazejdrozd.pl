<script>
    import { page } from '$app/stores';
</script>

{#if $page.error}
    <div class="">
        <h1 class="text-white text-xl">{$page.status}</h1>
        <p class="text-white">{$page.error.message}</p>
    </div>
{/if}
