import {
    View,
    Text,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { StatusBar } from "expo-status-bar";
  import { MaterialIcons } from "@expo/vector-icons";
  import { SceneMap, TabBar, TabView } from "react-native-tab-view";
  import { photos } from "../../Data/Images";
  import Images from "../../Data/Images"; // Correct import
  
  const PhotosRoutes = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={photos}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              aspectRatio: 1,
              margin: 3,
            }}
          >
            <Image
              key={index}
              source={item}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          </View>
        )}
      />
    </View>
  );
  
  const LikesRoutes = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
      }}
    />
  );
  
  const renderScene = SceneMap({
    first: PhotosRoutes,
    second: LikesRoutes,
  });
  
  const Profile = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
  
    const [routes] = useState([
      { key: "first", title: "Photos" },
      { key: "second", title: "Likes" },
    ]);
  
    const renderTabBar = (props) => (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: "#ff8200",
        }}
        style={{
          backgroundColor: "#ffffff",
          height: 44,
        }}
        renderLabel={({ focused, route }) => (
          <Text style={{ color: focused ? "#ff8200" : "#1d1d2a" }}>
            {route.title}
          </Text>
        )}
      />
    );
  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
        }}
      >
        <StatusBar backgroundColor="#ffffff" />
        <View style={{ width: "100%" }}>
          <Image
            source={Images.cover} 
            resizeMode="cover"
            style={{
              height: 228,
              width: "100%",
            }}
          />
        </View>
  
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={Images.profile} 
            resizeMode="contain"
            style={{
              height: 155,
              width: 155,
              borderRadius: 999,
              borderColor: "#ff8200",
              borderWidth: 2,
              marginTop: -90,
            }}
          />
  
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ff8200",
              marginVertical: 8,
            }}
          >
            Yamil Moreno
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
            }}
          >
            Software Engineer
          </Text>
  
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: "center",
            }}
          >
            <MaterialIcons name="location-on" size={24} color="#000000" />
            <Text
              style={{
                fontSize: 14,
                color: "#000000",
                marginLeft: 4,
              }}
            >
              Managua, Nicaragua
            </Text>
          </View>
  
          <View
            style={{
              paddingVertical: 8,
              flexDirection: "row",
            }}
          >
            {/* Remaining code is unchanged */}
          </View>
  
          <View style={{ flexDirection: "row" }}>
            {/* Remaining code is unchanged */}
          </View>
        </View>
  
        <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Profile;
  