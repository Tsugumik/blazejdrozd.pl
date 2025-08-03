<script>
    import TechTable from "$lib/TechTable.svelte";
    import Technology from "$lib/Technology.svelte";
</script>

<section class="container mx-auto p-2" id="tech">
    <h2 class="text-5xl font-bold text-center py-6">My tech stack and skills</h2>

    <TechTable techName="Cloud Providers" techType="Cloud">
        <Technology isFavorite={true} name="Cloudflare" rating={5} />
        <Technology isFavorite={true} name="AWS" rating={2} />
        <Technology isFavorite={true} name="Google Cloud" rating={2} />
    </TechTable>

    <TechTable techName="DevOps tools" techType="Tool">
        <Technology isFavorite={true} name="Git" rating={5}/>
        <Technology isFavorite={true} name="Cloudflare Workers" rating={5}/>
        <Technology isFavorite={true} name="CI/CD (Github Actions)" rating={5}/>
        <Technology isFavorite={true} name="Linux / CLI" rating={5}/>
        <Technology isFavorite={true} name="Docker" rating={5}/>
        <Technology isFavorite={true} name="Nginx" rating={4}/>
        <Technology isFavorite={true} name="Kubernetes" rating={2}/>
        <Technology isFavorite={true} name="Terraform" rating={2}/>
        <Technology isFavorite={true} name="Ansible" rating={2}/>
    </TechTable>

    <TechTable techName="Languages" techType="Language">
        <Technology isFavorite={true} name="TypeScript" rating={5}/>
        <Technology isFavorite={false} name="JavaScript" rating={5}/>
        <Technology isFavorite={false} name="Python" rating={4}/>
        <Technology isFavorite={true} name="C" rating={4}/>
        <Technology isFavorite={false} name="C++" rating={4}/>
        <Technology isFavorite={false} name="Java" rating={4}/>
        <Technology isFavorite={true} name="Rust" rating={3}/>
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
</section>

