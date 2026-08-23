<script>
    import UNSWcse from "./UNSWcse.svelte";
    import UNSWmath from "./UNSWmath.svelte";
    import USydcse from "./USydcse.svelte";
    import SectionHeading from "$lib/SectionHeading.svelte";
</script>

<div class="flex flex-col gap-8">
    <div class="relative left-1/2 w-screen -translate-x-1/2">
        <div class="max-w-3xl mx-auto px-6">
            <SectionHeading title="Teaching" />
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <UNSWcse />
        <UNSWmath />
        <USydcse />
    </div>
</div>
