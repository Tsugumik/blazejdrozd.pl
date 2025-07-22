<script lang="ts">
    let {value}: { value: 1 | 2 | 3 | 4 | 5 } = $props();
</script>

<div class="rating">
    <div aria-current={value === 1} aria-label="1 star" class="mask mask-star"></div>
    <div aria-current={value === 2} aria-label="2 star" class="mask mask-star"></div>
    <div aria-current={value === 3} aria-label="3 star" class="mask mask-star"></div>
    <div aria-current={value === 4} aria-label="4 star" class="mask mask-star"></div>
    <div aria-current={value === 5} aria-label="5 star" class="mask mask-star"></div>
</div>