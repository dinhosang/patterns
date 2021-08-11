# Singleton

Enforces only having one instance of an object, and allows it to be accessed globally


## WHY

- If you want to have only one instance of an object in your app, and you want the instance to be safe from removal or unintended modification.
  - You may want only once instance if you wish to control access to some kind of resource that is external to your app, e.g. database, files are the most common mentioned.
- If you want to be able to provide global access from anywhere in your app to an instance of an Object

## WHAT

There are two types of handling the initialisation of a Singleton , lazy & early
- Lazy is the most common and is where you only instantiate an instance the first time your app retrieve to make use of it.
- Early is where you create an instance at the start-up of your app, rather than waiting for the first time your app retrieves it

## HOW

NOTE: See in the examples folder for a js example of how to declare a singleton
- Java one detailing how to handle multi-threading should hopefully arrive in the future

Main points are to:
- ensure the "constructor"/creation-method is private so that only the Singleton itself has access to it
- ensure there is a getter method that is either static (if using a language that has that) or is somehow exposed that your app can use
- if lazy initialisation, the getter should check if instance containing variable is null and invoke create method / constructor if it is, and assign to instance containing variable
- if early , or after creating for lazy, then should return it
- have any methods on the class / object that you'd want folks to be able to use on the returned instance.


## WARNING - CONCURRENCY

If your language/app allows for and uses multi-threading , then you need to ensure you're locking access to the instance if you're using lazy initialisation, or generally if you're allowing methods that can result in race conditions. 

Locking meaning to make use of functionality in your respective language to ensure access to a variable is only allowed for one thread at a time.


## Issues

There's a lot of talk around the idea that the Singleton pattern is used more often than it should be, and that in almost every case there would be an alternative that would be easier to test, and would have fewer issues when there's multi-threading for instance.

some examples of issues folks have with Singletons:
- Use of a Singleton almost by definition means creating global state
  - this is harder to unit test (or test generally) than non-global data in an app
  - this requires extra work and testing when you have multi-threading in your app, as race conditions could occur as different threads try to access and use your singleton.
- If your implementing language allows multi-threading and your apps makes use of it then you need to add further safety measures to your Singleton class logic
  - to ensure that you're not, for example, creating an instance twice because two threads tried to access the instance for the first time at the same time
  - meaning it appeared to be non-initialised for both threads leading to each thread then creating/assigning their own instance of the singleton.


## Links

- [Refactoring Guru - Singletons](https://refactoring.guru/design-patterns/singleton)
- [Some Problems with Singletons](https://www.vojtechruzicka.com/singleton-pattern-pitfalls/)
