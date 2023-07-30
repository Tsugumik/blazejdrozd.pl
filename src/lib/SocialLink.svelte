<script lang="ts">
    export let href: string;
    export let imgSrc: string;
    export let imgAlt: string;
</script>

<a href={href} target="_blank" class="bg-gray-300 p-1 rounded-lg w-[35px] h-[35px] flex justify-center items-center hover:shadow hover:shadow-gray-50 transition-shadow">
    <img src={imgSrc} alt={imgAlt} width="35px" height="35px">
</a>