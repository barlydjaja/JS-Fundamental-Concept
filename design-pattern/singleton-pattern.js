let mySingleton = {
    property1: "something",
    property2: "something else",

    method1: function () {
        console.log("calling method1")
    }
}

// exposing only wanted to public
let mySingleton2 = function () {
    //private method and variables
    let privateVariable = "this is something private"

    function showPrivate() {
        console.log(privateVariable)
    }

    return {
        publicMethod: function () {
            showPrivate()
        },

        publicVar: "you can see thing without private method"
    }
}

let single = mySingleton2()

console.log(single.publicVar)
single.publicMethod()

// only instantiate singleton only when it's needed
let Singleton = (function () {
    let instantiated

    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log("this is public method")
            },
            publicProperty: "test"
        }
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init()
            }
            return instantiated
        }
    }
})()

Singleton.getInstance().publicMethod()

var SingletonTester = (function () {
    // options: an object containing configuration options for the singleton
    // e.g var options = { name: 'test', pointX: 5};
    function Singleton(options) {
        // set options to the options supplied or an empty object if none provided.
        options = options || {};
        //set the name parameter
        this.name = 'SingletonTester';
        //set the value of pointX
        this.pointX = args.pointX || 6;
        //set the value of pointY
        this.pointY = args.pointY || 10;
    }

// this is our instance holder
    var instance;
// this is an emulation of static variables and methods
    var _static = {
        name: 'SingletonTester',
        // This is a method for getting an instance
        // It returns a singleton instance of a singleton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();
var singletonTest = SingletonTester.getInstance({
    pointX: 5
});
console.log(singletonTest.pointX); // outputs 5

