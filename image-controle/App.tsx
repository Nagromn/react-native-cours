// import React from "react";
// import { View, Image } from "react-native";
// import styles from "./styles";

// const reactLogo = "https://reactnative.dev/docs/assets/favicon.png";
// const relayLogo = require("./assets/relay.png");

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={{ uri: reactLogo }} />
//       <Image style={styles.image} source={relayLogo} />
//     </View>
//   );
// }

// import React, { useState } from "react";
// import { View, Text, Image } from "react-native";
// import Slider from "@react-native-community/slider";
// import styles from "./styles";

// export default function App() {
//   const source = require("./assets/flux.png");
//   const [width, setWidth] = useState(100);
//   const [height, setHeight] = useState(100);

//   return (
//     <View style={styles.container}>
//       <Image source={source} style={[styles.image, { width, height }]} />
//       <Text>Width: {width}</Text>
//       <Text>Height: {height}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={50}
//         maximumValue={150}
//         value={width}
//         onValueChange={(value) => {
//           setWidth(value);
//           setHeight(value);
//         }}
//       />
//     </View>
//   );
// }

// import React, { useState } from "react";
// import { ImageSourcePropType, View } from "react-native";
// import LazyImage from "./LazyImage";
// import Button from "./Button";
// import styles from "./styles";

// const remote = "https://reactnative.dev/docs/assets/favicon.png";

// export default function LazyLoading() {
//   const [source, setSource] = useState<ImageSourcePropType | null>(null);

//   return (
//     <View style={styles.container}>
//       <LazyImage
//         style={{ width: 200, height: 150 }}
//         resizeMode="contain"
//         source={source}
//       />
//       <Button
//         label="Load Remote"
//         onPress={() => {
//           setSource({ uri: remote });
//         }}
//       />
//     </View>
//   );
// }

import React, { useEffect, useState } from "react";
import { iconNames, IconsType, IconName } from "./icon-names";
import { FlatList, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "@expo/vector-icons/FontAwesome";
import styles from "./styles";

export default function RenderingIcons() {
  const [selected, setSelected] = useState<IconsType>("web_app_icons");
  const [listSource, setListSource] = useState<IconName[]>([]);
  const categories = Object.keys(iconNames);

  function updateListSource(selected: IconsType) {
    const listSource = iconNames[selected] as any;
    setListSource(listSource);
    setSelected(selected);
  }

  useEffect(() => {
    updateListSource(selected);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker selectedValue={selected} onValueChange={updateListSource}>
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>
      <FlatList
        style={styles.icons}
        data={listSource.map((value, index) => ({
          key: index.toString(),
          value,
        }))}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.value} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
