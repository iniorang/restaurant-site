export default function PlanTable({ img, title, description, goal, menu, included }) {
    return (
        <div className="flex flex-col transition-transform duration-300 hover:scale-[1.01]">
            <div className="relative w-40 h-auto mx-auto -mb-8">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full rounded-full aspect-square object-cover object-center border-leaf border-4 shadow-lg"
                />
            </div>
            <div className="flex h-full flex-col gap-y-5 pt-10 bg-apple-card p-4 shadow-xl ">
                <h3 className="text-4xl text-center text-apple-heading font-semibold">{title}</h3>
                <p>{description}</p>
                <div>
                    <h4 className="font-semibold text-apple-heading">Goal</h4>
                    <p>{goal}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-apple-heading">Sample Menu</h4>
                    <p>{menu}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-apple-heading">Include</h4>
                    <ul className="list-disc pl-5">
                        {included.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}