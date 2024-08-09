import React, { useState, useEffect } from "react";
import { FlatList, Image, View } from "react-native";
import { requestBase } from "../utils/constants";
import { useWindowDimensions } from "react-native";
import Loading from "./Loading";

export const UserDetailsModalImages = () => {
  const randomImageSet = Math.round(Math.random() * 4);
  const [imageList, setImageList] = useState(null);
  const { height, width } = useWindowDimensions();

  async function fetchImageData() {
    const response = await fetch(
      requestBase + "/userImages/" + randomImageSet + ".json"
    );
    setImageList(await response.json());
  }

  useEffect(() => {
    fetchImageData();
  }, []);

  if (!imageList) {
    return <Loading message="Loading image list ...." />;
  }
  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          height: height * 0.6,
          width: width * 0.75,
          borderRadius: 28,
          marginRight: 30,
        }}
        source={{
          uri: item.url,
        }}
      />
    );
  };

  return (
    <View style={{ paddingTop: 30 }}>
      <FlatList
        data={imageList.listOfitems}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.825}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ width: width * 0.1 }} />}
      />
    </View>
  );
};
