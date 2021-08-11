/**
 * Early Singleton - as it instantiates itself before it is invoked for use
 *  -   still requires it to be importing into another file before it will take effect
 *      -   this is unlike static fields in Java, can import at the entry-point file of app though
 */
const SomeEarlySingleton = (() => {

    const singleton_instance = {
        some_field: [ 1, 2, 3 ],
        another_field: { first: 1, second: 2 },
    };

    console.log(
        'HI! This early initisialising singleton has just created its instance! ' +
        'Should only happen once',
    );

    return {
        get_instance: () => {

            return singleton_instance;

        },
    };

})();


module.exports = { SomeEarlySingleton };
