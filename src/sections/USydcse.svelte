<script>
    import CourseCard from "$lib/CourseCard.svelte";

    let school = "University of Sydney, Computer Science";
    let courses = [
        {
            code: "COMP2022",
            name: "Models of Computation",
            terms: ["26S2"],
            link: "https://www.sydney.edu.au/units/COMP2022/2026-S2C-ND-CC",
        },
    ];
</script>

<CourseCard school={school} courses={courses} />
