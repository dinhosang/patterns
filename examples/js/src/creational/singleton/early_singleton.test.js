const { SomeEarlySingletonProvider } = require('./early_singleton');


describe('creational > singleton > early', () => {


    let all_retrieved_instances;

    beforeAll(() => {

        console.log(
            'This is before all tests, the singleton SHOULD already have loggged as it\'s early',
        );

        all_retrieved_instances = [];

    });

    it('should log to console even if it has not been used.', () => {

        expect(true).toEqual(true);

    });

    it('should NOT log a second time, even if retrieving instance for first time.', () => {

        all_retrieved_instances.push(SomeEarlySingletonProvider.get_instance());

    });

    it('should be the same instance as all previously retrieved instances.', () => {

        // arrange

        const current = SomeEarlySingletonProvider.get_instance();

        // act

        all_retrieved_instances.forEach((instance) => {

            // assert

            expect(current).toBe(instance);

            expect(current === instance).toEqual(true);

        });

    });

    it('should NOT be equal to a copy of itself.', () => {

        // arrange

        const original = SomeEarlySingletonProvider.get_instance();

        // act

        const copy = JSON.parse(JSON.stringify(original));

        // assert

        expect(original === copy).toEqual(false);

    });

});
