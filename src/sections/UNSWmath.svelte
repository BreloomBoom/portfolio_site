<script>
    import CourseCard from "$lib/CourseCard.svelte";

    let school = "UNSW, Mathematics and Statistics";
    let courses = [
        {
            code: "MATH1011",
            name: "Fundamentals of Mathematics",
            terms: ["26T1"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2026/MATH1011",
        },
        {
            code: "MATH1081",
            name: "Discrete Mathematics",
            terms: ["25T2", "25T3"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1081",
        },
        {
            code: "MATH1131",
            name: "Mathematics 1A",
            terms: ["26T1"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2026/MATH1131",
        },
        {
            code: "MATH1151",
            name: "Finance Mathematics 1A",
            terms: ["26T1"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2026/MATH1151",
        },
        {
            code: "MATH1231",
            name: "Mathematics 1B",
            terms: ["25T2", "26T1", "26T2"],
            link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1231",
        },
        {
            code: "—",
            name: "Mathematics Drop-In Centre",
            terms: ["24T1", "24T2", "24T3", "26T1", "26T2"],
            link: "https://www.unsw.edu.au/science/our-schools/maths/student-life-resources/student-services/mathematics-drop-in-centre",
        },
    ];
</script>

<CourseCard school={school} courses={courses} />