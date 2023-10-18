import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
import AuthContext from "../auth/context";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../pano.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => menuItems.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => setUser(null)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
