import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { requestBase } from "../utils/constants";
import { Card } from "./Card";

export const ListOfCards = ({ navigation }) => {
  const [cardList, setCardList] = useState(null);

  async function fetchCardData() {
    try {
      console.log(`requestBase ${requestBase}`);
      const response = await fetch(requestBase + "/home.json");
      const data = await response.json();
      setCardList(data);
    } catch (error) {
      console.log(`listcard fetch error ${error.message}`);
    }
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  if (!cardList) {
    return (
      <View>
        <Text>Loading cardlist ...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };

  return (
    <View style={{ marginTop: -200, paddingHorizontal: 20, marginBottom: 160 }}>
      <FlatList
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
