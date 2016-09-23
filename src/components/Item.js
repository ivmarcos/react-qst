import React, {Component} from 'react';
import Radio from 'components/Radio';

const Item = ({item}) => {


    getComponent = (item) => { 
        switch (item.tipoEntrada.texto) {
            case 'RADIO':
                <Radio onChange={onChange} item={item} parentValue={parentValue}
            default: 
        };

    }    
    return (
        <div></div>
    
    )


}