import { Card } from "antd";

export default function RestaurantList({ pois }) {
  return (
    <div className="flex flex-col h-full max-h-[60%]  overflow-y-auto">
      {(pois || []).map((p, index) => {
        const { name, address } = p;
        return <Restaurant key={index} name={name} address={address} />;
      })}
    </div>
  );
}

const { Meta } = Card;

function Restaurant({ name, address }) {
  return (
    <Card hoverable style={{ width: "100%" }} className="mb-2 px-2">
      <Meta title={name} description={address} />
    </Card>
  );
}
