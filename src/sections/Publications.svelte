<script>
    import SectionHeading from "$lib/SectionHeading.svelte";

    let publications = [
        {
            title: "Characterising Equivalences Between Logics Through Model Comparison Games",
            authors: "Ronald Chiang, Paul Hunter",
            status: "Manuscript under review",
        },
        {
            title: "Ehrenfeucht-Fraïssé Games for Temporal (and) Epistemic Logics",
            authors: "Ronald Chiang",
            status: "BSc (Honours) Thesis",
            link: "/Honours-Thesis.pdf",
        },
    ];
</script>

<div class="flex flex-col gap-6">
    <SectionHeading title="Publications" />
    <div class="flex flex-col divide-y divide-white/5">
        {#each publications as pub, i}
            <div class="py-5 first:pt-0 last:pb-0 flex gap-3">
                <span class="text-sm text-neutral-500 tabular-nums">{publications.length - i}.</span>
                <div>
                    {#if pub.link}
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noreferrer"
                            class="font-medium leading-snug hover:text-accent transition-colors"
                        >{pub.title}</a>
                    {:else}
                        <p class="font-medium leading-snug">{pub.title}</p>
                    {/if}
                    <p class="mt-1.5 text-sm text-neutral-500">{pub.authors} · {pub.status}</p>
                </div>
            </div>
        {/each}
    </div>
</div>
