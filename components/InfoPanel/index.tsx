const InfoPanel = ({ restaurantInfo, addressArr }) => {
  const { name } = restaurantInfo;
  console.log(restaurantInfo, addressArr);

  return (
    <div className="border border-solid border-indigo-600 h-[20vh] mx-4 mt-4 px-2 py-2 flex flex-col">
      <div>当前选择</div>
      <div>{name}</div>
      {(addressArr.length ? addressArr : []).map((item, index) => {
        const { address, distance, time, taxi_cost } = item;
        return (
          <div key={index}>
            <p>
              距离{address}有 {distance} 公里，用时 {(time / 60).toFixed(2)}
              分钟, 花费 {taxi_cost} 元
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoPanel;
