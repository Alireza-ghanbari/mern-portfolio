import SectionTitle from "../../components/SectionTitle";

export default function About() {
    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB"
    ]
  return (
    <div>
        <SectionTitle title='About'/>

        <div className="flex w-full items-center">
            <div className="h-[70vh] w-1/2">
                <img className="h-[70vh] object-scale-down" src="https://static.vecteezy.com/system/resources/previews/011/153/369/original/3d-web-developer-working-on-project-illustration-png.png" alt="" />
            </div>
            <div className="flex-col flex gap-5 w-1/2">
                <p className="text-white text-xs leading-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sed, magnam a laudantium quis aliquid quidem nam veritatis! Aliquam maiores laborum ipsam in, iure beatae reiciendis perspiciatis aperiam velit delectus error maxime rerum. Atque fuga ipsam autem inventore porro. At ab saepe sint doloremque, odit mollitia deleniti! In, eum sit.
                </p>
                <p className="text-white text-xs leading-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, dicta aspernatur ex deleniti harum doloremque saepe officiis doloribus nisi repellendus. Ipsum voluptatum, libero mollitia, ratione dolor repellat, deserunt dolores ipsa id expedita praesentium ea delectus non blanditiis voluptate illo odio perferendis itaque cupiditate laboriosam eveniet nulla aut quasi pariatur! Et rem veniam temporibus quasi soluta harum corporis nulla qui illum!
                </p>
            </div>
        </div>

        <div className="py-5">
            <h1 className="text-tertiary text-xl">
                Here are a few technologies I've been working with recently :
            </h1>
            <div className="flex flex-wrap gap-10 mt-5">
                {skills.map((skill, index)=>(
                    <div className="border border-tertiary py-3 px-6 rounded-sm">
                        <h1 className="text-tertiary">{skill}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
