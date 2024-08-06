import React from "react";
import { Text, FlatList } from "react-native";
import styles from "../styles";
// import ListControls from "./ListControls";

type Props = {
  data: { key: string; value: string }[];
  // onFilter: (text: string) => void;
  // onSort: () => void;
  // asc: boolean;
  fetchItems: () => Promise<void>;
  refreshItems: () => Promise<void>;
  isRefreshing: boolean;
};

export default function List({
  data,
  fetchItems,
  refreshItems,
  isRefreshing,
}: Props) {
  return (
    <FlatList
      data={data}
      // ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
      // renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      onEndReached={fetchItems}
      onRefresh={refreshItems}
      refreshing={isRefreshing}
    />
  );
}
