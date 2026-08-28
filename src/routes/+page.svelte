<script>
    import Header from "../sections/Header.svelte";
    import Hero from "../sections/Hero.svelte";
    import ResearchExperience from "../sections/ResearchExperience.svelte";
    import Education from "../sections/Education.svelte";
    import Publications from "../sections/Publications.svelte";
    import Teaching from "../sections/Teaching.svelte";
    import Section from "$lib/Section.svelte";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ronald Chiang",
        url: "https://ronaldchia.ng/",
        email: "mailto:ronald.chiang@sydney.edu.au",
        jobTitle: "MPhil Researcher",
        description:
            "Researcher in logic and theoretical computer science, working on model comparison games and strategy synthesis for games on graphs.",
        affiliation: {
            "@type": "CollegeOrUniversity",
            name: "University of Sydney",
        },
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of New South Wales",
        },
        sameAs: ["https://orcid.org/0009-0007-7139-7796"],
        knowsAbout: [
            "Logic in Computer Science",
            "Model Comparison Games",
            "Temporal Logic",
            "Epistemic Logic",
            "Games on Graphs",
            "Strategy Synthesis",
        ],
    };
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<div class="flex flex-col w-full">
    <Header />

    <div class="flex flex-col gap-16 pb-24">
        <Hero />

        <Section>
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
