const Skills = () => {
    const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS" ,"GSAP", "MongoDB", "Express.js", "TypeScript"]

    return (
        <section id="skills" className="py-20 px-6 border-t border-gray-800">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold mb-10">Core Stack</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <div key={i} className="p-6 bg-[#11161c] rounded-lg border border-gray-800 hover:border-cyan-400 transition">
                            <h3 className="font-medium">{skill}</h3>
                            <p className="text-sm text-gray-400 mt-2">Modern development</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills