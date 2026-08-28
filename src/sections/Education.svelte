<script>
    import Timeline from "$lib/Timeline.svelte";
    import SectionHeading from "$lib/SectionHeading.svelte";

    let items = [
        {
            title: "Master of Philosophy in Engineering",
            subtitle: "University of Sydney",
            date: "July 2026 to Present",
        },
        {
            title: "Bachelor of Science with Honours in Pure Mathematics",
            subtitle: "University of New South Wales",
            date: "February 2025 to December 2025",
        },
        {
            title: "Bachelor of Science with Distinction in Mathematics",
            subtitle: "University of New South Wales",
            date: "February 2022 to December 2024",
        },
    ];
</script>

<div class="flex flex-col gap-6">
    <SectionHeading title="Education" />
    <Timeline items={items} />
</div>
