<script>
    import ListCard from "./ListCard.svelte";
    import ListRow from "./ListRow.svelte";
    import CourseRow from "./CourseRow.svelte";

    export let courses = [];
    export let school = "";
</script>

<div class="flex flex-col items-center md:items-start gap-4 w-full">
    <h3 class="flex items-center gap-2 text-sm font-medium text-neutral-300">
        <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
        {school}
    </h3>

    <ListCard>
        {#each courses as course}
            <ListRow link={course.link}>
                <CourseRow {course} />
            </ListRow>
        {/each}
    </ListCard>
</div>
