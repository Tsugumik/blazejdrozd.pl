<script>
    import TechTable from "$lib/TechTable.svelte";
    import Technology from "$lib/Technology.svelte";
</script>

<section class="container mx-auto p-2" id="tech">
    <h2 class="text-5xl font-bold text-center py-6">My tech stack and skills</h2>

    <TechTable techName="Languages" techType="Language">
        <Technology isFavorite={true} name="TypeScript" rating={5}/>
        <Technology isFavorite={false} name="JavaScript" rating={5}/>
        <Technology isFavorite={true} name="C" rating={4}/>
        <Technology isFavorite={false} name="C++" rating={4}/>
        <Technology isFavorite={false} name="Java" rating={4}/>
        <Technology isFavorite={true} name="C#" rating={4}/>
        <Technology isFavorite={true} name="Rust" rating={3}/>
        <Technology isFavorite={false} name="Python" rating={3}/>
        <Technology isFavorite={false} name="Matlab" rating={3}/>
    </TechTable>

    <TechTable techName="Frontend" techType="Technology">
        <Technology isFavorite={true} name="Svelte / SvelteKit" rating={5}/>
        <Technology isFavorite={false} name="HTML / CSS" rating={5}/>
        <Technology isFavorite={true} name="TailwindCSS" rating={5}/>
        <Technology isFavorite={true} name="DaisyUI" rating={4}/>
        <Technology isFavorite={false} name="React" rating={3}/>
    </TechTable>

    <TechTable techName="Desktop Development" techType="Technology">
        <Technology isFavorite={true} name="Tauri" rating={4}/>
        <Technology isFavorite={false} name="Electron" rating={3}/>
    </TechTable>

    <TechTable techName="Backend" techType="Technology">
        <Technology isFavorite={true} name="Spring Boot (Java)" rating={4}/>
        <Technology isFavorite={false} name="Express" rating={3}/>

    </TechTable>

    <TechTable techName="Databases" techType="Technology">
        <Technology isFavorite={true} name="MySQL / MariaDB" rating={4}/>
        <Technology isFavorite={true} name="SQLite" rating={4}/>
        <Technology isFavorite={false} name="MongoDB" rating={3}/>
    </TechTable>

    <TechTable techName="Game Dev" techType="Tool">
        <Technology isFavorite={true} name="Godot (C#)" rating={5}/>
        <Technology isFavorite={false} name="Godot (GDScript)" rating={4}/>
        <Technology isFavorite={true} name="Aseprite" rating={3}/>
    </TechTable>

    <TechTable techName="Embedded" techType="Technology">
        <Technology isFavorite={true} name="STM32 (C)" rating={5}/>
        <Technology isFavorite={false} name="Arduino" rating={3}/>
    </TechTable>

    <TechTable techName="Tools and DevOps" techType="Tool">
        <Technology isFavorite={true} name="Git" rating={5}/>
        <Technology isFavorite={true} name="Github Actions" rating={5}/>
        <Technology isFavorite={true} name="Linux / CLI" rating={5}/>
        <Technology isFavorite={true} name="Docker" rating={4}/>
    </TechTable>
</section>

