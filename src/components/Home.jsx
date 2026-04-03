const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-4 sm:px-6 pt-24"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Building Digital{" "}
                        <span className="text-cyan-400">Infrastructures.</span>
                    </h1>

                    <p className="mt-4 sm:mt-6 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                        Full Stack Developer | React Specialist. I architect high-performance
                        web applications with precision engineering.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-6 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300 transition"
                            onClick={() => window.location.href = "#projects"}>
                            View Projects
                        </button>
                        <button className="px-6 py-2 border border-gray-600 rounded-md hover:border-cyan-400 transition"
                        onClick={()=>window.location.href="#contact"}>
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="w-80 max-w-sm sm:max-w-md md:max-w-full mx-auto">
                    <div className="bg-linear-to-br from-cyan-400/10 to-transparent p-2 rounded-2xl">
                        <img
                            className="w-full h-full object-cover rounded-xl"
                            src="image for portfolio.png"
                            alt="Profile"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home