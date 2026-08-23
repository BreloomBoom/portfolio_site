<script>
    export let items = [];
</script>

<div class="flex flex-col">
    {#each items as item, i}
        <div class="relative flex gap-6 pb-6 last:pb-0">
            <div class="flex w-2.5 shrink-0 justify-center">
                <span class="relative z-10 mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"></span>
            </div>
            {#if i < items.length - 1}
                <span class="absolute left-1.25 top-4 -bottom-2 w-px -translate-x-1/2 bg-neutral-800"></span>
            {/if}
            <div class="flex flex-1 flex-col gap-1 pt-px">
                <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h3 class="font-medium text-text">{item.title}</h3>
                    <span class="text-xs text-neutral-500">{item.date}</span>
                </div>
                {#if item.subtitle}
                    <p class="text-sm text-neutral-300">{item.subtitle}</p>
                {/if}
                {#if item.meta}
                    <p class="text-xs text-neutral-500">{item.meta}</p>
                {/if}
            </div>
        </div>
    {/each}
</div>
