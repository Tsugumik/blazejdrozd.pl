<script lang="ts">
    let {techName, techType, children}: { techName: string, techType: string, children: any } = $props();
</script>

<div class="divider">{techName}</div>

<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
    <table class="table table-fixed">
        <thead>
        <tr>
            <th>{techType}</th>
            <th>Level</th>
        </tr>
        </thead>
        <tbody>
        {@render children()}
        </tbody>
    </table>
</div>