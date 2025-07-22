<script lang="ts">
    import Rating from "$lib/Rating.svelte";

    let {name, rating, isFavorite}: { name: string, rating: 1 | 2 | 3 | 4 | 5, isFavorite: boolean } = $props();
</script>

<tr>
    <td>
        <div class="flex flex-row items-center gap-2 justify-between">
            <div>{name}</div>
        </div>

    </td>
    <td>
        <Rating value={rating}/>
    </td>
</tr>