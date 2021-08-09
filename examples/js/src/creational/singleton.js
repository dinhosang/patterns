const SomeSingletonProvider = (() => {

    let singleton_instance;

    const create_instance = () => {

        console.log('HI! Creating a new instance here');

        return {
            some_field: [ 1, 2, 3 ],
            another_field: { first: 1, second: 2 },
        };

    };

    return {
        get_instance: () => {

            if (!singleton_instance) {


                // NOTE: create an instance if one does not already exist
                singleton_instance = create_instance();

            }

            return singleton_instance;

        },
    };

})();


module.exports = { SomeSingletonProvider };
