import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";

// const ManagedText = ({ checkedState }) => {
//   return (
//     <Text>
//       this text will display the current status, which is: {checkedState}
//     </Text>
//   );
// };
// export const ParentComponent = () => {
//   const [checkedState, setCheckedState] = useState("unchecked");
//   return (
//     <View>
//       <ManagedText checkedState={checkedState} />
//       <Pressable onPress={() => setCheckedState("checked")}>
//         <Text>Press here to check/uncheck</Text>
//       </Pressable>
//     </View>
//   );
// };

// La chose la plus importante à retenir à propos des propos est la suivante : les props sont immuables (ou en lecture seule).
// const ManagedText = (fancyComponentStuff) => {

// const ManagedText = ({ fancyComponentStuff }) => {
//   return (
//     <Text>
//       This text will display the current status, which is: {fancyComponentStuff}
//     </Text>
//   );
// };

// export const ParentComponent = () => {
//   const [checkedState, setCheckedState] = useState("unchecked");

//   const toggleCheckedState = () => {
//     setCheckedState((prevState) =>
//       prevState === "unchecked" ? "checked" : "unchecked"
//     );
//   };

//   return (
//     <View>
//       <ManagedText fancyComponentStuff={checkedState} />
//       <Pressable onPress={toggleCheckedState}>
//         <Text>Press here to check/uncheck</Text>
//       </Pressable>
//     </View>
//   );
// };

export const LikesParentComponent = () => {
  // const getCounterNumberFromApi = someFunctionRetrievingDataFromAPI();
  const getCounterNumberFromApi = 100;
  const [counterNumber, setCounterNumber] = useState(getCounterNumberFromApi);
  return (
    <LikesComponent
      counterNumber={counterNumber}
      setCounterNumber={setCounterNumber}
    />
  );
};

// const LikesComponent = (counterNumber) => {
//   const [likeState, setLikedState] = useState("haven't yet liked");

//   return (
//     <View>
//       <Text>you {likeState} this post</Text>
//       <Pressable onPress={setLikedState("liked")}>
//         <Text>Press here to check/uncheck</Text>
//       </Pressable>
//       <Text>{counterNumber} other people liked this post</Text>
//     </View>
//   );
// };

const LikesComponent = ({ counterNumber, setCounterNumber }) => {
  const [likeState, setLikedState] = useState("haven't yet liked");

  useEffect(() => {
    if (likeState === "liked") {
      setCounterNumber(counterNumber + 1);
    } else {
      setCounterNumber(counterNumber - 1);
    }
  }, [likeState, setCounterNumber]);

  return (
    <View>
      <Text>you {likeState} this post</Text>
      <Pressable
        onPress={() =>
          setLikedState((prev) =>
            prev === "liked" ? "haven't yet liked" : "liked"
          )
        }
      >
        <Text>Press here to check/uncheck</Text>
      </Pressable>
      <Text>{counterNumber} other people liked this post</Text>
    </View>
  );
};
