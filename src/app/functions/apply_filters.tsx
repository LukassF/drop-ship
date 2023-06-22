import { categoriesType } from "@/types";
import { redirect } from "next/navigation";

export default async function applyFilters(
  data: FormData,
  setCategories: React.Dispatch<React.SetStateAction<categoriesType>>
) {
  //   "use server";
  let gender = data.get("gender")?.valueOf();
  let style = data.get("style")?.valueOf();
  let type = data.get("type")?.valueOf();

  if (typeof gender !== "string") gender = "";
  if (typeof style !== "string") style = "";
  if (typeof type !== "string") type = "";

  setCategories({
    gender: gender as string,
    style: style as string,
    type: type as string,
  });
}
