<script>
    import Timeline from "$lib/Timeline.svelte";
    import SectionHeading from "$lib/SectionHeading.svelte";

    let items = [
        {
            title: "University of New South Wales",
            subtitle: "Model Comparison Games",
            meta: "under Dr Paul Hunter",
            date: "February 2026 to July 2026",
        },
        {
            title: "Sonic Labs",
            subtitle: "Comparing Automated Inductive Invariant Inference Tools for IVy and TLA⁺",
            meta: "under Dr Sasha Rubin and Dr Pavle Subotić",
            date: "December 2024 to February 2025",
        },
        {
            title: "Trustworthy Systems",
            subtitle: "Specifying Properties for Device-Driver Verification",
            meta: "under Dr Johannes Pohjola and Dr Miki Tanaka",
            date: "February 2024 to September 2024",
        },
    ];
</script>

<div id="research" class="flex flex-col gap-6 scroll-mt-16">
    <SectionHeading title="Research Experience" />
    <Timeline items={items} />
</div>
