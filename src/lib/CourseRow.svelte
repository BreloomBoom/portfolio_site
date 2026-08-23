<script>
    export let course;
</script>
  
<div
    class="w-full truncate text-xs font-medium leading-tight"
    title={course.code && course.code !== "—" ? `${course.code}: ${course.name}` : course.name}
>
    {course.code && course.code !== "—" ? `${course.code}: ${course.name}` : course.name}
</div>

<div class="text-xs text-neutral-400">
    {course.terms.join(", ")}
</div>
  