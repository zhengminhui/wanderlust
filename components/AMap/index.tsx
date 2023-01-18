import { useEffect, useMemo, useRef } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mockData } from "./mock";

const AMapComponent = () => {
  const mapRef = useRef(null);
  let mapObject: any;
  // 美和园 116.323046,40.033819
  // 清榆园 116.512079,40.048304
  // 好世界 116.462882, 39.921236
  const mockPoints = [
    [116.323046, 40.033819],
    [116.512079, 40.048304],
    [116.462882, 39.921236],
  ];

  const pointsWithName = [
    {
      name: "美和园",
      latlng: [116.323046, 40.033819],
    },
    {
      name: "清榆园",
      latlng: [116.512079, 40.048304],
    },
    {
      name: "好世界",
      latlng: [116.462882, 39.921236],
    },
  ];

  const getCenter = (pointsArr: any) => {
    let maxLng = pointsArr[0][0];
    let minLng = pointsArr[0][0];
    let maxLat = pointsArr[0][1];
    let minLat = pointsArr[0][1];

    for (let i = 0; i < pointsArr.length; i++) {
      const curLng = pointsArr[i][0];
      const curLat = pointsArr[i][1];

      if (curLng >= maxLng) {
        maxLng = curLng;
      }
      if (curLng <= minLng) {
        minLng = curLng;
      }

      if (curLat >= maxLat) {
        maxLat = curLat;
      }
      if (curLat <= minLat) {
        minLat = curLat;
      }
    }
    let lng = (maxLng + minLng) / 2;
    let lat = (maxLat + minLat) / 2;

    return [lng, lat];
  };

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
              zoom: 10, //初始化地图级别
              center: [116.462882, 39.921236], //初始化地图中心点位置
            });
            mapRef.current = mapInstance;

            mockPoints.forEach((point, index) => {
              const marker = new AMap.Marker({
                position: new AMap.LngLat(point[0], point[1]), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: `marker-${index}`,
              });
              mapInstance.add(marker);
            });

            const center = getCenter(mockPoints);

            var centerMarker = new AMap.Marker({
              position: new AMap.LngLat(center[0], center[1]),
              title: "中心",
            });
            var circle = new AMap.Circle({
              center: new AMap.LngLat(center[0], center[1]), // 圆心位置
              radius: 5000, //半径
              strokeColor: "#F33", //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 1, //线粗细度
              fillColor: "#ee2200", //填充颜色
              fillOpacity: 0.35, //填充透明度
            });
            mapInstance.add([centerMarker, circle]);

            mockData.pois.forEach((poi) => {
              const { location, name } = poi;
              const locArr = location.split(",");
              const lng = locArr[0];
              const lat = locArr[1];
              var icon = new AMap.Icon({
                size: new AMap.Size(25, 34), // 图标尺寸
                image:
                  "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png", // Icon的图像
                imageSize: new AMap.Size(25, 34), // 根据所设置的大小拉伸或压缩图片
              });

              const marker = new AMap.Marker({
                position: new AMap.LngLat(lng, lat),
                icon: icon,
                title: name,
              });

              marker.setTitle(name);
              mapInstance.add(marker);
            });

            // get route distance and time
            pointsWithName.forEach((point, index) => {
              var driving = new AMap.Driving({
                // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                policy: AMap.DrivingPolicy.LEAST_TIME,
                extensions: "all",
              });

              var startLngLat = point.latlng;
              var endLngLat = [116.415402, 40.057044];
              const name = point.name;

              driving.search(
                startLngLat,
                endLngLat,
                function (status: any, result: any) {
                  console.log(name, status, result);
                }
              );
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
