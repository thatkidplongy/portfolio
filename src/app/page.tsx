import Link from "next/link";

export default function Home() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <div className="relative w-full h-full flex bg-custom-bg bg-cover banner">
        <nav className="nav-bar ">
          <div className="flex space-x-4 justify-around">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-list flex-grow text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="relative h-full w-full max-w-defaultMax px-6 py-12 bg-about text-black">
        <div id="about-me" className="w-[880px] mx-auto">
          <h1 className="flex flex-col w-full">About me</h1>
          <p>
            👋 Hello! I&rsquo;m Engr. Florante G. Clavano Jr., a licensed
            electronics engineer who transitioned into the dynamic world of
            software engineering for three years now. With a strong foundation
            in electronics and a passion for technology, I&rsquo;ve harnessed my
            skills to become a versatile software engineer.
          </p>
          <p>
            💻 My toolkit includes a diverse set of technologies, such as
            Next.js, React.js, TypeScript, Tailwind CSS, Python Flask, Node.js,
            Express.js, MongoDB, and PostgreSQL. I thrive in developing web
            applications that provide intuitive and efficient solutions to
            real-world problems. 🔧 Whether it&rsquo;s designing user-friendly
            interfaces, optimizing back-end systems, or delving into data
            analysis, I enjoy the challenges that software engineering offers.
            My experience spans various domains, from front-end development with
            React to crafting robust RESTful APIs with Node.js and Express, and
            managing data with MongoDB and PostgreSQL.
          </p>
          <p>
            🌟 I&rsquo;m passionate about keeping up with industry trends,
            staying curious, and continuously learning to ensure I provide the
            best solutions. Collaboration, innovation, and a dedication to
            quality drive me in my work.
          </p>
          <p>
            🌐 If you&rsquo;re looking to collaborate or discuss exciting
            opportunities in the world of software engineering, feel free to
            connect with me. Let&rsquo;s explore the possibilities together!
          </p>
        </div>
      </div>
    </>
  );
}
