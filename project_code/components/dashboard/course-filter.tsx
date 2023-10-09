import Combobox from "@/components/ui/combo-box";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

const CourseFilter = () => {
    return (
        <section>
            <Combobox items={frameworks}/>
            <Combobox items={frameworks}/>
            <Combobox items={frameworks}/>
        </section>
    )
}

export default CourseFilter
