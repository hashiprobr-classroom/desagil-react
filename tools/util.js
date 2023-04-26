// NÃO É NECESSÁRIO ENTENDER OU MODIFICAR ESTE ARQUIVO.

import React, { Fragment } from 'react';

function map(arr, callback) {
    return arr.map((value, index) => (
        <Fragment
            key={index}
        >
            {callback(value, index)}
        </Fragment>
    ));
}

export { map };
