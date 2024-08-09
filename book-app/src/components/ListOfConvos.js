import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { requestBase } from "../utils/constants";
import { ConversationItem } from "./ConversationItem";
import Loading from "./Loading";

export const ListOfConvos = ({ navigation }) => {
  const [conversationsList, setConversationList] = useState(null);

  async function fetchConversationsData() {
    const response = await fetch(requestBase + "/conversations.json");
    setConversationList(await response.json());
  }

  useEffect(() => {
    fetchConversationsData();
  }, []);

  if (!conversationsList) {
    return <Loading message="Loading conv list" />;
  }

  const renderItem = ({ item }) => {
    return <ConversationItem navigation={navigation} item={item} />;
  };

  return (
    <View style={{ paddingTop: 30, marginTop: -30, marginBottom: 50 }}>
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};
