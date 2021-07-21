# Prototype:

Where instead of instantiating new objects using new ClassName() or similar for your language of choice, you instead just clone/copy an existing instance of said class/type and then modify as required.

## WHY ?

-   When you want to create instances of an object whose type you won't know until runtime (similar to Abstract Factory)
-   When you want to create a copy of an existing object, but some fields are private so you can't access them to copy their values across
-   When you want to create a copy of an existing object, but where actually instantiating a new instance is costly in terms of memory/time
-   When instantiating a new instance of an object is complicated (though that may be a sign of a bad code setup I guess)
-   When you want to create new instances of objects without having a matching series of factories, only need to implement a cloneable interface and method - and have an existing instance already.
-   When your class can only have a few different states, it can save having to instantiate and tweak every time if you can just have an instance for each state and then just clone.

## WHAT ?

-   Java example:
    -   there is a Cloneable interface that is used to declare that a class should implement and is able to invoke the .clone() method
    -   in your implementation of the .clone() method you would invoke super.clone() , which at some points reaches the top-most clone() method
        -   this will make a new instance of the object by copying around all the values of the fields into this new instance, it won't use new Class() so the constructor should not be involved (need to test to confirm)
        -   if you want a deep copy you may have to manually perform clone on certain fields on the object returned from super.clone() if those fields are object references instead of primitive values.
            -   should hopefully be able to just invoke .clone() on the values of those fields, but it depends on the object type and what exactly you want done.

-   Javascript:
    -   no cloneable interface like in Java and other languages, but you can implement you own version of it if you like
    -   a simple way of achieving a deep copy in Javascript is to use a pattern like:

    ```javascript
        const someOriginalObjet =  {
            "someField": "somevalue"
        }

        const copyObject = JSON.parse(JSON.stringify(someOriginalObjet))

        copyObject.someField = 'newValue'

        console.log(someOriginalObject) // { someField: 'somevalue' }
        console.log(copyObject) // { someField: 'newValue' }
    ```

## WARNING:

-   be aware of what type of cloning you implement, i.e. are you implementing a shallow copy or a deep copy of the original instance - and which one do you wish to implement, or does it differ based on fields?


## TERMS:

-   copy
    -   shallow
        -   when copying fields that hold references to objects, rather than primitive values, the reference is what is copied across.
        -   this means that the original and new instance will both share the same reference in that field, meaning that modifying the value of the reference object in one will modify the other
    -   deep
        -   when copying fields that hold references to objects, rather than primitive values, a copy of the object reference is created and a reference to that new copy is what is assigned to the field in the new object


## REFERENCES:

-   https://en.wikipedia.org/wiki/Prototype_pattern
-   https://refactoring.guru/design-patterns/prototype
