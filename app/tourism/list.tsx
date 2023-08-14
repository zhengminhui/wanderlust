"use client";

export default function VisitedPlaces({ pois }) {
  return (
    <>
      <div className="flex flex-col m-4 pb-6 h-full">
        <div className="w-[20vw] max-h-screen overflow-y-auto scrollbar">
          <div className="text-lg mb-2">Visited Places</div>
          {pois.map((dt, index) => {
            const {
              id,
              data: { name, address },
            } = dt;

            return (
              <div
                className="flex flex-col p-2 m-2 border bg-cyan-400"
                key={id}
              >
                <div className="mr-2">
                  {index + 1}: {name}
                </div>
                <div className="mr-4">{address}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
