import SanityClient from "../client";
import Image from "next/image";

export async function getStaticProps() {
  const data = await SanityClient.fetch(
    `*[_type == "author"]{
      name,
      "bio": bio[0].children[0].text,
      "authorImage": image.asset->url
    }`
  );
  return {
    props: {
      author: data,
    },
  };
}

const About = ({ author }) => {
  console.log(author);
  return (
    <section className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="container mx-4 bg-red-300 rounded flex flex-col md:flex-row md:mx-auto">
        <div className="flex justify-center items-start p-8">
          <Image
            width={600}
            height={600}
            src={author[0].authorImage}
            className="rounded-full"
            alt="Hachem"
          />
        </div>
        <div className="text-lg flex flex-col justify-center p-8 space-y-4">
          <h1 className="text-4xl font-bold text-green-100 text-center md:text-left">
            Hey there. I&apos;m{" "}
            <span className="text-blue-400">
              {author[0].name.split(" ")[0] + "!"}
            </span>
          </h1>
          <p className="text-green-100 text-base text-center md:text-left">
            <em>{'"' + author[0].bio + '"'}</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
