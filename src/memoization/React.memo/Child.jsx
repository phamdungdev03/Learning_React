import React from 'react';

const Child = React.memo(({name}) => {
    console.log("Render lại Child!");
    return <p>Xin chào {name}</p>
})

export default Child;