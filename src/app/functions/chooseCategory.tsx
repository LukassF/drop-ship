import { categoriesType } from "@/types";

export default function chooseCategory(
  target: EventTarget,
  setCategories: React.Dispatch<React.SetStateAction<categoriesType>>,
  category: string
) {
  [...((target as HTMLElement).parentElement as HTMLElement).children].forEach(
    (child) => {
      if (child !== target) child.classList.remove("bg-amber-200");
    }
  );

  (target as HTMLElement).classList.toggle("bg-amber-200");

  switch (category) {
    case "gender":
      setCategories((prev) => ({
        gender: (target as HTMLElement).classList.contains("bg-amber-200")
          ? (target as HTMLElement).innerText
          : "",
        style: prev.style,
        type: prev.type,
      }));
      break;
    case "style":
      setCategories((prev) => ({
        gender: prev.gender,
        style: (target as HTMLElement).classList.contains("bg-amber-200")
          ? (target as HTMLElement).innerText
          : "",
        type: prev.type,
      }));
      break;
    case "type":
      setCategories((prev) => ({
        gender: prev.gender,
        style: prev.style,
        type: (target as HTMLElement).classList.contains("bg-amber-200")
          ? (target as HTMLElement).innerText
          : "",
      }));
      break;
    default:
      break;
  }
}
