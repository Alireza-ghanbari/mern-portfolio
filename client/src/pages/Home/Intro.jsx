import { useSelector } from "react-redux";

export default function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { firstname, lastname, welcomeText, description, caption } =
    portfolioData.intro;
  return (
    <div className="h-[80vh] sm:h-[60vh] bg-primary flex flex-col items-start justify-center gap-14 py-10 sm:gap-8">
      <h1 className="text-white">{welcomeText}</h1>
      <h1 className="text-secondary text-7xl font-semibold sm:text-4xl">
        {firstname} {lastname}
      </h1>
      <h1 className="text-white text-6xl font-semibold sm:text-2xl">
        {caption}
      </h1>
      <p className="text-white w-2/3 sm:w-11/12 sm:text-xs sm:leading-5">
        {description}
      </p>
      <button
        className="border-2 border-tertiary text-tertiary px-10
        py-3 rounded sm:px-6 sm:py-2 sm:text-md"
      >
        Get Started
      </button>
    </div>
  );
}
