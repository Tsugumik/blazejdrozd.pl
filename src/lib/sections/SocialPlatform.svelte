<script lang="ts">
    let {href, children}: { href: string, children: any } = $props();
</script>

<li>
    <a class="btn btn-circle" href={href} target="_blank">
        {@render children()}
    </a>
</li>