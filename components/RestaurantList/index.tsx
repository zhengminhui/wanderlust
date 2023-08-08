import { Card } from "antd";

export default function RestaurantList({ pois, poiClick }) {
  return (
    <div className="flex flex-col h-full max-h-[60%]  overflow-y-auto scrollbar">
      {(pois || []).map((p, index) => {
        const { name, address } = p;
        return (
          <Restaurant
            key={index}
            name={name}
            address={address}
            poiClick={poiClick}
          />
        );
      })}
    </div>
  );
}

const { Meta } = Card;

function Restaurant({ name, address, poiClick }) {
  const clickCard = (e) => {
    console.log({ name, address });
    poiClick(name);
  };

  return (
    <Card
      hoverable
      style={{ width: "90%" }}
      className="mt-2 mb-4 mx-2"
      onClick={clickCard}
    >
      <Meta title={name} description={address} />
    </Card>
  );
}
