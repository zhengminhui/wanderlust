import { useEffect, useRef, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

const AMapComponent = ({ poiClick, pois }) => {
  const mapRef = useRef(null);
  const [currentPoi, setCurrentPoi] = useState({});

  let mapObject: any;

  useEffect(() => {
    if (mapRef.current) {
      // @ts-ignore
      window._AMapSecurityConfig = {
        securityJsCode: "11dacac7642ca76c57e3b7dc6d6db48f",
      };
      AMapLoader.load({
        key: "ea0a876771e4ebfa96ce7561a5a81d59", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.ToolBar", "AMap.Driving"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          if (AMap && !mapObject) {
            const mapInstance = new AMap.Map("map-container", {
              //设置地图容器id
              viewMode: "3D", //是否为3D地图模式
              zoom: 4, //初始化地图级别
              center: [116.462882, 39.921236], //初始化地图中心点位置
              mapStyle: "amap://styles/whitesmoke",
            });
            mapRef.current = mapInstance;

            pois.forEach((point, index) => {
              const {
                data: { name, lon, lat },
              } = point;
              const marker = new AMap.Marker({
                position: new AMap.LngLat(lon, lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: name,
              });
              mapInstance.add(marker);
            });

            const poiMarkerClickFn = (poi) => {
              setCurrentPoi(poi);
              poiClick(poi);
              console.log("poiMarkerClickFn", poi);
            };

            pois.forEach((poi) => {
              const { name, lat, lon } = poi;
              var icon = new AMap.Icon({
                size: new AMap.Size(25, 34), // 图标尺寸
                image:
                  "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png", // Icon的图像
                imageSize: new AMap.Size(25, 34), // 根据所设置的大小拉伸或压缩图片
              });

              const marker = new AMap.Marker({
                position: new AMap.LngLat(lon, lat),
                icon: icon,
                title: name,
              });

              marker.setTitle(name);
              marker.on("click", function (e) {
                poiMarkerClickFn(poi);
              });
              mapInstance.add(marker);
            });
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
