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
    <div class="max-w-2xl mx-auto w-full columns-1 md:columns-2 gap-4">
        <div class="break-inside-avoid mb-4">
            <UNSWcse />
        </div>
        <div class="break-inside-avoid mb-4">
            <UNSWmath />
        </div>
        <div class="break-inside-avoid mb-4">
            <USydcse />
        </div>
    </div>
</div>
