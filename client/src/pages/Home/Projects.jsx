import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const projects = [
    {
      title: "project one",
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp",
      description: "helooooooooooo one",
      link: "/",
    },
    {
      title: "project two",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJrSTnEiOVzEg9pkfr3dFz4s166_XAE8XFQ&usqp=CAU",
      description: "heloooooooooooooo two",
      link: "/",
    },
    {
      title: "project three",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvLJOyDqTP40tXu2LdXWH0AdrGmdpFrsVD0iSfBgV4bNxioEeKRQN1ffnOg6LpXkKlzQ&usqp=CAU",
      description: "heloooooooooooo three",
      link: "/",
    },
  ];
  return (
    <div className="sm:mt-12">
      <SectionTitle title="Project" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full sm:border-none">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 py-3 sm:w-44 sm:border-none ${
                  selectedItemIndex === index
                    ? `text-tertiary border-l-4 -ml-[3px] bg-[#135e4c82] border-tertiary`
                    : `text-white`
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-80"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              ullam odit ad delectus? Qui similique, veniam dolorum magnam
              repellat nam corrupti cumque fuga, error facere deleniti
              perspiciatis itaque, repellendus pariatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
