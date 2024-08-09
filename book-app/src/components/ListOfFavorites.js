import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "../components/Card";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export const ListOfFavorites = ({ navigation }) => {
  const { likedImages } = useSelector((state) => state.likedImages);
  const [imageList, setImageList] = useState([]);

  if (!imageList) {
    return <Loading message="loading image list" />;
  }

  useEffect(() => {
    const reversedImages = [...likedImages].reverse();
    setImageList(reversedImages);
  }, [likedImages]);

  const renderItem = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate="fast"
      />
    </View>
  );
};
