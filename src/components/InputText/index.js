import React, {Component} from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const InputText = ({label, placeholder, iconName}) => {
        return (
            <Input 
                label={label} 
                labelStyle={{color: 'white'}}
                placeholder={placeholder}
                leftIcon={
                    <Icon
                        name={iconName}
                        size={20}
                        color='white'
                    />
                }
            />

        );
    }

export default InputText;