const Projects = () => {
    const projects = [
        {
            title: "Weather App",
            desc: "Modern weather UI using API",
            git_link: "https://github.com/krish486/weather-app",
            Demo_link: "https://weather-app-eta-steel-75.vercel.app/",
            img:"img-01.png"
        },
        {
            title: "CRUD App",
            desc: "Full stack CRUD operations",
            git_link: "https://github.com/krish486/CRUD",
            Demo_link: "https://crud-two-beta.vercel.app/",
            img:"img-02.png"
        },
        {
            title: "Valentine's card",
            desc: "Interactive Valentine's card with animations",
            git_link: "https://github.com/krish486/Valentines-card",
            Demo_link: "https://valentines-card-beryl.vercel.app/",
            img:"img-03.png"
        },
        {
            title: "Money Manager",
            desc: "Full stack money management app",
            git_link: "https://github.com/krish486/Money-manager",
            Demo_link: "https://money-manager-beta-bay.vercel.app/",
            img:"img-04.png"
        },
        {
            title: "Productivity Dashboard",
            desc: "Interactive productivity dashboard with animations",
            git_link: "https://github.com/krish486/project-01",
            Demo_link: "https://project-01-iota-virid.vercel.app/",
            img:"img-05.png"
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 border-t border-gray-800">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold mb-10">Selected Works</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="bg-[#11161c] rounded-lg overflow-hidden border border-gray-800">

                            <div className="h-48 bg-gray-800">
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-center"/>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

                                <div className="flex gap-4 mt-4 text-sm">
                                    <a href={p.Demo_link} className="text-cyan-400 cursor-pointer hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
                                        Live Demo 
                                    </a>
                                    <a href={p.git_link} className="text-cyan-400 cursor-pointer hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Projects