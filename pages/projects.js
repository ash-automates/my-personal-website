import SanityClient from "../client";

export async function getStaticProps() {
  const projects = await SanityClient.fetch(
    `*[_type == "project"]{
      title,
      date,
      place,
      language,
      description,
      projectType,
      link,
      tags
    }`
  );
  return {
    props: {
      projects,
    },
  };
}

const Projects = ({ projects }) => {
  return (
    <main className="bg-blue-400 min-h-screen p-3 md:p-12">
      <section className="container mx-auto flex flex-col p-4 space-y-3">
        {projects.map((project, index) => {
          return (
            <article
              className="rounded-lg shadow-xl bg-red-300 p-8"
              key={index}
            >
              <h3 className="text-green-100 text-3xl mb-2 font-bold hover:text-blue-400">
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className="text-green-100 text-xs space-x-4">
                <span>
                  <strong className="font-bold">Finished on</strong>:{" "}
                  {new Date(project.date).toLocaleDateString()}
                </span>
                <span>
                  <strong className="font-bold">Type</strong>:{" "}
                  {project.projectType}
                </span>
              </div>
              <p className="my-6 text-sm text-green-100 leading-relaxed">
                <em>
                  {'"'}
                  {project.description}
                  {'"'}
                </em>
              </p>
              <div className="flex justify-start space-x-4">
                <div>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-green-100 font-bold hover:text-blue-400"
                  >
                    👉 Code
                  </a>
                </div>
                <div>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-green-100 font-bold hover:text-blue-400"
                  >
                    👉 Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;
