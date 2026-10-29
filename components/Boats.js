import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({icon_name, icon_color, name, description, picture}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 20, color: 'grey'}}>
                <FontAwesome6 name={icon_name} size={20} color={icon_color} />
                {name}
            </Text>
            <Text style={{color: 'grey'}}>{description}</Text>
            <Image source={picture}
                   style={{width:400, height:300}} />
        </View>
    );
};

export default Boat;