import { useEffect, useMemo, useRef } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

const AMapComponent = () => {
  const mapRef = useRef(null);
  let mapContainer: any;

  useEffect(() => {
    if (mapRef.current) {
      AMapLoader.load({
        key: "ea0a876771e4ebfa96ce7561a5a81d59", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          if (AMap && !mapContainer) {
            const mapInstance = new AMap.Map("map-container", {
              //设置地图容器id
              viewMode: "3D", //是否为3D地图模式
              zoom: 9, //初始化地图级别
              center: [116.602725, 39.076636], //初始化地图中心点位置
            });
            mapRef.current = mapInstance;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return <div id="map-container" className="w-full h-full " ref={mapRef} />;
};

export default AMapComponent;
