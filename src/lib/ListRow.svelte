<script>
    export let link="";
</script>

<svelte:element this={link ? "a" : "div"} href={link || undefined} target={link ? "_blank" : undefined} rel={link ? "noreferrer" : undefined}>
    <div
        class="
            group flex items-center justify-between gap-3 px-4 py-3.5
            transition-colors {link ? 'cursor-pointer hover:bg-accent/5' : ''}
        "
    >
        <div class="flex min-w-0 flex-1 flex-col gap-1">
            <slot />
        </div>
        {#if link}
            <svg
                class="h-4 w-4 shrink-0 text-neutral-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
            </svg>
        {/if}
    </div>
</svelte:element>