import { DesignerCardProps } from "@/types";

export default function Designer(props: DesignerCardProps) {
  return (
    <div className="w-300px p-8 flex flex-col items-center justify-center gap-3">
      <div
        className="w-3/4 aspect-square rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h1>{props.name}</h1>
      <h2 className="text-xs text-stone-700">
        <em>{props.hierarchy}</em>
      </h2>
      <hr className="h-px w-full bg-stone-400 rounded-full border-none"></hr>
      <p className="text-8px text-stone-600 break-all">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in
        quibusdam. Tenetur omnis impedit vero sed? Eos facere nesciunt, eum nisi
        nam vel illo repellendus reiciendis nihil, praesentium
      </p>
      <span className="w-full flex justify-between items-center text-xs">
        <p>Since {props.since}</p>
        <p>{props.productsDesigned}k products designed!</p>
      </span>
    </div>
  );
}
