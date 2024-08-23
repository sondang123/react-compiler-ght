export default function SortedList({ names }: { names: string[] }) {
  const sortedNames = names.sort((a: any, b: any) => {
    return a - b;
  });

  return (
    <ul>
      {sortedNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
