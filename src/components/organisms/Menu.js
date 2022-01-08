import React, {  Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/UserLayout";

class Menu extends Component {

  render() {

    const { items, onPress } = this.props;

    return (
      <View style={styles.menu}>
        {items.map(({ name, icon }, key) =>
          <TouchableOpacity key={key}style={styles.menuItem} onPress={onPress.bind(null, name)}>
            <Image style={styles.menuIcon} source={icon} />
          </TouchableOpacity>)}
      </View>
    )
  }
}

export default Menu;
