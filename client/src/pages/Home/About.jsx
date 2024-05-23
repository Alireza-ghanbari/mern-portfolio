import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

export default function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { skills, imgUrl, description1, description2 } = portfolioData.about;
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full sm:h-[62vh]">
          <img
            className="h-[70vh] w-full object-scale-down"
            src={imgUrl}
            alt=""
          />
        </div>
        <div className="flex-col flex gap-5 w-1/2 sm:w-full">
          <p className="text-white text-sm leading-6 sm:text-xs sm:leading-5">
            {description1}
          </p>
          <p className="text-white text-sm leading-6 sm:text-xs sm:leading-5">
            {description2}
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl sm:leading-8 my-2">
          Here are a few technologies I've been working with recently :
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-6 rounded-sm">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
