<script>
    import Header from "../sections/Header.svelte";
    import Hero from "../sections/Hero.svelte";
    import ResearchExperience from "../sections/ResearchExperience.svelte";
    import Education from "../sections/Education.svelte";
    import Publications from "../sections/Publications.svelte";
    import Teaching from "../sections/Teaching.svelte";
    import Section from "$lib/Section.svelte";
</script>

<div class="flex flex-col w-full">
    <Header />

    <div class="flex flex-col gap-16 pb-24">
        <Hero />

        <Section id="research">
            <div class="flex flex-col gap-12">
                <Education />
                <ResearchExperience />
            </div>
        </Section>

        <Section id="publications">
            <Publications />
        </Section>

        <Section id="teaching" maxWidth="max-w-6xl">
            <Teaching />
        </Section>
    </div>
</div>
