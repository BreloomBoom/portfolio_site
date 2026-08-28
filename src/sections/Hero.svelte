<script>
    let copied = false;
    let copyTimeout;

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText("ronald.chiang@sydney.edu.au");
            copied = true;
            clearTimeout(copyTimeout);
            copyTimeout = setTimeout(() => (copied = false), 1500);
        } catch (err) {
            // clipboard API unavailable; mailto link still works as a fallback
        }
    }
</script>

<section id="about" class="w-full scroll-mt-16">
    <div class="max-w-3xl mx-auto px-6 pt-16 md:pt-20 flex flex-col gap-6">
        <h1 class="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            hi! im ronald
        </h1>
        <p class="text-lg text-neutral-400 leading-relaxed max-w-xl">
            I am studying an MPhil under <a
                href="https://sasharubin.github.io/"
                class="text-accent hover:underline transition-colors"
            >Sasha Rubin</a> at the University of Sydney. My current topic is on synthesising strategies for games on graphs. Previously, I studied model comparison games and the expressive completeness of temporal and epistemic logics under <a
                href="https://www.unsw.edu.au/staff/paul-hunter"
                class="text-accent hover:underline transition-colors"
            >Paul Hunter</a> at the University of New South Wales. In general, my research interests are topics about <span class="underline">logic in computer science</span>.
        </p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p class="text-sm text-neutral-400">contact me :)</p>
            <div class="inline-flex items-center gap-1.5 text-sm text-neutral-400">
                <a
                    href="mailto:ronald.chiang@sydney.edu.au"
                    class="group inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                    <svg
                        class="h-4 w-4 shrink-0 text-neutral-500 group-hover:text-accent transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <polyline points="2,7 12,14 22,7" />
                    </svg>
                    ronald.chiang@sydney.edu.au
                </a>
                <button
                    type="button"
                    onclick={copyEmail}
                    aria-label="Copy email address"
                    title={copied ? "Copied!" : "Copy email address"}
                    class="inline-flex items-center justify-center h-6 w-6 rounded text-neutral-500 hover:text-accent transition-colors"
                >
                    {#if copied}
                        <svg
                            class="h-3.5 w-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <polyline points="20,6 9,17 4,12" />
                        </svg>
                    {:else}
                        <svg
                            class="h-3.5 w-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect x="9" y="9" width="12" height="12" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    {/if}
                </button>
            </div>
            <a
                href="https://orcid.org/0009-0007-7139-7796"
                target="_blank"
                rel="noreferrer"
                class="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-accent transition-colors"
            >
                <svg
                    class="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="12" fill="#A6CE39" />
                    <text
                        x="12"
                        y="12.5"
                        text-anchor="middle"
                        dominant-baseline="central"
                        font-family="Helvetica, Arial, sans-serif"
                        font-weight="700"
                        font-size="11"
                        fill="#ffffff"
                    >iD</text>
                </svg>
                ORCID
            </a>
        </div>
    </div>
</section>
