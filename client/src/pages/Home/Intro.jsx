
export default function Intro() {
  return (
    <div className="h-[80vh] sm:h-[60vh] bg-primary flex flex-col items-start justify-center gap-14 py-10 sm:gap-8">
        <h1 className="text-white">Hi, I am</h1>
        <h1 className="text-secondary text-7xl font-semibold sm:text-4xl">Alireza Ghanbari</h1>
        <h1 className="text-white text-6xl font-semibold sm:text-2xl">I build things for the web.</h1>
        <p className="text-white w-2/3 sm:w-11/12 sm:text-xs sm:leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est mollitia nulla quas dolorem quasi non aspernatur officiis porro itaque, quia rerum iure nostrum at sequi unde nihil. Nulla natus ducimus sunt. Recusandae enim delectus voluptatum similique quia repellat incidunt animi!</p>
        <button className="border-2 border-tertiary text-tertiary px-10
        py-3 rounded sm:px-6 sm:py-2 sm:text-md">Get Started</button>
    </div>
  )
}
