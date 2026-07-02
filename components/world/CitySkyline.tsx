export function CitySkyline() {
  const buildings = [
    "left-[5%] h-24 w-16",
    "left-[15%] h-40 w-20",
    "left-[28%] h-28 w-24",
    "left-[44%] h-48 w-20",
    "left-[58%] h-32 w-28",
    "left-[74%] h-52 w-20",
    "left-[87%] h-36 w-24",
  ];

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64">
      <div className="absolute bottom-0 h-full w-full bg-linear-to-t from-black/80 via-indigo-950/45 to-transparent" />

      {buildings.map((building) => (
        <div
          key={building}
          className={`absolute bottom-0 rounded-t-2xl bg-indigo-950/80 shadow-[0_0_30px_rgba(167,139,250,0.12)] ${building}`}
        />
      ))}

      <div className="absolute bottom-24 left-[17%] h-2 w-2 rounded-full bg-yellow-200" />
      <div className="absolute bottom-36 left-[47%] h-2 w-2 rounded-full bg-yellow-200" />
      <div className="absolute bottom-20 left-[63%] h-2 w-2 rounded-full bg-yellow-200" />
      <div className="absolute bottom-44 left-[77%] h-2 w-2 rounded-full bg-yellow-200" />
    </div>
  );
}
