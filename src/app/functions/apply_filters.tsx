export default async function applyFilters(
  data: FormData,
  setCategories: React.Dispatch<React.SetStateAction<string[] | object>>
) {
  //   "use server";
  let gender = data.get("gender")?.valueOf();
  let style = data.get("style")?.valueOf();
  let type = data.get("type")?.valueOf();

  let filters = [gender, style, type];
  let filteredFilters: string[] = [];

  filters.forEach((filter, i) => {
    if (typeof filter === "string" && (filter as string).length !== 0 && filter)
      filteredFilters.push(filter);
  });

  console.log(filteredFilters);
  if (filteredFilters.length === 0) return;

  setCategories([...filteredFilters]);
}
