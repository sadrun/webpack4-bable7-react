

class Apple{
    constructor(){
        this.name = Symbol('orange');
        this.attrs = new Map();
    }
    
    hello(){
        const set = new Set();
        const o=[1,2,3,45,5];
        const p=[...o];
        console.log('hello');
        Promise.resolve(0).finally(()=>{

        })
    }
}

class Bork {
    boundFunction = () => {
        return this.state;
    }
}

export default Apple;