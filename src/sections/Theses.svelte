<script>
    import SectionHeading from "$lib/SectionHeading.svelte";

    let theses = [
        {
            title: "Ehrenfeucht-Fraïssé Games for Temporal (and) Epistemic Logics",
            authors: "Ronald Chiang",
            status: "BSc (Honours) Thesis",
            link: "/Honours-Thesis.pdf",
        },
    ];
</script>

<div class="flex flex-col gap-6">
    <SectionHeading title="Theses" />
    <div class="flex flex-col divide-y divide-white/5">
        {#each theses as thesis, i}
            <div class="py-5 first:pt-0 last:pb-0 flex gap-3">
                <span class="text-sm text-neutral-500 tabular-nums">{theses.length - i}.</span>
                <div>
                    {#if thesis.link}
                        <a
                            href={thesis.link}
                            target="_blank"
                            rel="noreferrer"
                            class="font-medium leading-snug hover:text-accent transition-colors"
                        >{thesis.title}</a>
                    {:else}
                        <p class="font-medium leading-snug">{thesis.title}</p>
                    {/if}
                    <p class="mt-1.5 text-sm text-neutral-500">{thesis.authors} · {thesis.status}</p>
                </div>
            </div>
        {/each}
    </div>
</div>
