<script>
    export let id = undefined;
    export let maxWidth = "max-w-3xl";
</script>

<section {id} class="w-full {maxWidth} mx-auto px-6">
    <slot />
</section>
