import { useMemo } from "react";

export default function SortedList({
  names,
  extraStuff,
}: {
  names: string[];
  extraStuff: any;
}) {
  const sortedNames = useMemo(
    () =>
      names.sort((a: any, b: any) => {
        return a - b;
      }),
    [names]
  );

  return (
    <ul>
      {sortedNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
