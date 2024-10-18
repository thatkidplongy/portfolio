export default function Home() {
  return (
    <div className="">
      <div
        id="banner"
        className="relative h-full w-full max-w-defaultMax mx-auto px-6 py-12 bg-about"
      >
        <div id="about-me" className="">
          <h1 className="flex flex-col w-full">About me</h1>
          <p>
            👋 Hello! I'm Engr. Florante G. Clavano Jr., a licensed electronics
            engineer who transitioned into the dynamic world of software
            engineering for three years now. With a strong foundation in
            electronics and a passion for technology, I've harnessed my skills
            to become a versatile software engineer.
          </p>
          <p>
            💻 My toolkit includes a diverse set of technologies, such as
            Next.js, React.js, TypeScript, Tailwind CSS, Python Flask, Node.js,
            Express.js, MongoDB, and PostgreSQL. I thrive in developing web
            applications that provide intuitive and efficient solutions to
            real-world problems. 🔧 Whether it's designing user-friendly
            interfaces, optimizing back-end systems, or delving into data
            analysis, I enjoy the challenges that software engineering offers.
            My experience spans various domains, from front-end development with
            React to crafting robust RESTful APIs with Node.js and Express, and
            managing data with MongoDB and PostgreSQL.{" "}
          </p>
          <p>
            🌟 I'm passionate about keeping up with industry trends, staying
            curious, and continuously learning to ensure I provide the best
            solutions. Collaboration, innovation, and a dedication to quality
            drive me in my work.{" "}
          </p>
          <p>
            🌐 If you're looking to collaborate or discuss exciting
            opportunities in the world of software engineering, feel free to
            connect with me. Let's explore the possibilities together!
          </p>
        </div>
        <div id="overlap" className=" bg-gray-500 w-1/2 absolute z-10p-4">
          <p className="text-center">Overlapping Div</p>
        </div>
      </div>

      <div
        id="projects"
        className="relative h-full w-full max-w-defaultMax mx-auto px-6 py-12 bg-projects"
      >
        <h1 className="">Projects</h1>
      </div>
    </div>
  );
}
