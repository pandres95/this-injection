var inject = require('object-injector');

function AnObject(params){

    inject(this, {
        x: 4,
        y: 5
    });

    x = 3;
    console.log(x);

    return this;

}
