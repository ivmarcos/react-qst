import React from 'react';

const Radio = ({item, key, parentValue, onChange}) => {
    
    return (
        <input type="radio"
            name={'radio' + item.id}
            onChange={onChange}
            checked={parentValue == key}
            onChange={onChange}
            />
    );

}

export default Radio;