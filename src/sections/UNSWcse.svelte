<script>
    import CourseCard from "$lib/CourseCard.svelte";

    let school = "UNSW, Computer Science and Engineering";
    let courses = [
        {
            code: "COMP1531",
            name: "Software Engineering Fundamentals",
            terms: ["23T1", "23T2", "23T3"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2023/COMP1531",
        },
        {
            code: "COMP2041",
            name: "Software Construction",
            terms: ["24T1"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP2041",
        },
        {
            code: "COMP3121",
            name: "Algorithm Design and Analysis",
            terms: ["23T2", "23T3", "24T1", "24T2"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP3121",
        },
        {
            code: "COMP3153",
            name: "Algorithmic Verification",
            terms: ["25T3"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3153",
        },
        {
            code: "COMP4141",
            name: "Theory of Computation",
            terms: ["26T1"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2026/COMP4141",
        },
        {
            code: "COMP4161",
            name: "Adv. Topics in Software Verification",
            terms: ["26T3"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2026/COMP4161",
        },
        {
            code: "COMP9020",
            name: "Foundations of Computer Science",
            terms: ["24T2", "24T3", "25T1", "26T1"],
            link: "https://www.handbook.unsw.edu.au/postgraduate/courses/2026/COMP9020",
        },
    ];
</script>

<CourseCard school={school} courses={courses} />