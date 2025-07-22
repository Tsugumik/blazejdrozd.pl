<script>

    import Project from "$lib/Project.svelte";
</script>

<section class="container mx-auto py-2" id="projects">
    <h2 class="text-5xl font-bold text-center py-6">My Open Source projects</h2>
    <div class="flex flex-row gap-4 justify-around flex-wrap py-2">
        <Project githubHref="https://github.com/Tsugumik/shinden-client" imgHref="shinden-client.jpg"
                 name="Shinden Client"
                 tech={["Tauri", "Rust", "SvelteKit", "TypeScript"]}>
            <p>Cross-platform desktop client for Shinden.pl. Offers anime browsing and episode playback. Lightweight and
                privacy-focused.</p>
        </Project>

        <Project githubHref="https://github.com/Tsugumik/shinden-pl-api-rs" imgHref="terminal-small.jpg"
                 name="shinden-pl-api-rs" tech={["Rust", "Tokio", "Scraper"]}>
            <p>Asynchronous Rust API client for Shinden.pl. Handles login, cookies, anime search, episodes, and player
                parsing.</p>
        </Project>

        <Project githubHref="https://github.com/Tsugumik/cda-dl" imgHref="movie.jpg" name="cda-dl"
                 tech={["Rust", "Scraper"]}>
            <p>Minimal Rust library for extracting direct video stream URLs from CDA.pl.</p>
        </Project>
    </div>
</section>

