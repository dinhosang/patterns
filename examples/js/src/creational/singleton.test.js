const { SomeSingletonProvider } = require('./singleton');


describe('creational > singleton', () => {

    let all_retrieved_instances;

    beforeAll(() => {

        all_retrieved_instances = [];

    });

    it('should log to console the first time it is retrieved.', () => {

        all_retrieved_instances.push(SomeSingletonProvider.get_instance());

    });

    it('should NOT log to console the second time it is retrieved.', () => {

        all_retrieved_instances.push(SomeSingletonProvider.get_instance());

    });

    it('should be the same instance as all previously retrieved instances.', () => {

        // arrange

        const current = SomeSingletonProvider.get_instance();

        // act

        all_retrieved_instances.forEach((instance) => {

            // assert

            expect(current).toBe(instance);

            expect(current === instance).toEqual(true);

        });

    });

    it('should NOT be equal to a copy of itself.', () => {

        // arrange

        const original = SomeSingletonProvider.get_instance();

        // act

        const copy = JSON.parse(JSON.stringify(original));

        // assert

        expect(original === copy).toEqual(false);

    });

});
