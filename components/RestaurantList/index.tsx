import { Card } from "antd";

export default function RestaurantList({ pois }) {
  return (
    <div className="flex flex-col h-full max-h-[60%]  overflow-y-auto scrollbar">
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
    <Card hoverable style={{ width: "90%" }} className="mt-2 mb-4 mx-2 ">
      <Meta title={name} description={address} />
    </Card>
  );
}
