import {
    RiMailLine,
    RiGithubLine,
    RiLinkedinLine
} from "@remixicon/react"

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-[#0a0f14] border-t border-gray-800">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Let's build together.
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-md">
                        I'm open to freelance work, collaborations, and full-time opportunities.
                        Feel free to reach out.
                    </p>

                    {/* CONTACT LINKS */}
                    <div className="mt-8 space-y-5">

                        <div className="flex items-center gap-3 text-gray-300">
                            <RiMailLine size={22} className="text-cyan-400" />
                            <span>krishkhambhati@gmail.com</span>
                        </div>

                        <a
                            href="https://github.com/krish486"
                            target="_blank"
                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
                        >
                            <RiGithubLine size={22} />
                            GitHub Profile
                        </a>

                        <a
                            href="https://www.linkedin.com/in/krish-khambhati-3628b5368"
                            target="_blank"
                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
                        >
                            <RiLinkedinLine size={22} />
                            LinkedIn Profile
                        </a>

                    </div>
                </div>

                {/* RIGHT (FORM) */}
                <div className="bg-[#11161c] p-6 rounded-xl border border-gray-800">

                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 bg-transparent border border-gray-700 rounded focus:outline-none focus:border-cyan-400"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 bg-transparent border border-gray-700 rounded focus:outline-none focus:border-cyan-400"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 bg-transparent border border-gray-700 rounded focus:outline-none focus:border-cyan-400"
                        ></textarea>

                        <button className="w-full py-3 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>

            {/* FOOTER */}
            <div className="text-center text-gray-500 text-sm mt-16 border-t border-gray-800 pt-6">
                © 2026 MR.DEVELOPER — Built with React & Tailwind
            </div>

        </section>
    )
}

export default Contact