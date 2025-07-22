<script lang="ts">
    import TechBadge from "$lib/TechBadge.svelte";

    let {imgHref, githubHref, name, tech, children}: {
        imgHref: string,
        githubHref: string,
        name: string,
        tech: string[]
        children: any
    } = $props();
</script>

<div class="card bg-base-300 w-80 shadow-md">
    <figure>
        <img
                alt="Project example"
                src={imgHref}/>
    </figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        {@render children()}
        <div class="card-actions justify-end">
            <a class="btn btn-primary" href={githubHref} target="_blank">GitHub</a>
        </div>
        <div class="divider"></div>
        <div class="flex gap-2 flex-wrap">
            {#each tech as _tech}
                <TechBadge>{_tech}</TechBadge>
            {/each}
        </div>
    </div>
</div>