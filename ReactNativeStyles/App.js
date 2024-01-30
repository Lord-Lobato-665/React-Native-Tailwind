import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc'; // Asegúrate de tener twrnc instalado y configurado

export default function App() {
  const [pressedIndex, setPressedIndex] = useState(null);
  const [pageBackgroundColor, setPageBackgroundColor] = useState('#FFFFFF');
  const cardColors = ['#FF5733', '#FFC300', '#33FF57', '#5F9DA0', '#FF3377', '#1E90FF', '#CD85EF', '#BDB76D'];
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  const handlePress = (index) => {
    console.log(`Card ${index} pressed!`);
    setPressedIndex((prevIndex) => (index === prevIndex ? null : index));
    setPageBackgroundColor((prevColor) => (index === pressedIndex ? '#FFFFFF' : cardColors[index]));
  };

  return (
    <View style={[tw`flex justify-center items-center`, { backgroundColor: pageBackgroundColor, flex: 1 }]}>
      <Text style={tw`text-xl text-center mb-20`}>Escoge el background que más te guste!</Text>
      <View style={tw`flex flex-row flex-wrap max-w-screen-md`}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={card}
            onPress={() => handlePress(index)}
            style={tw.style(`m-2 p-4 rounded-lg shadow-lg w-40`, {
              backgroundColor: pressedIndex === index ? cardColors[index] : cardColors[index],
            })}
          >
            <Text style={tw`text-lg text-white`}>
              {pressedIndex === index ? ' --- EN USO ---' : `Background ${card}`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
