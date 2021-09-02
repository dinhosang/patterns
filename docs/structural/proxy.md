# Proxy


A proxy is essentially a wrapper or *interface* for another object/entity/resource. 

It can be as simple as acting as a forwarder to the real resource/object, or it could add additional logic around the call to the original resource/object.

The real resource/object in this case be: 
-   a class imported from an external library
-   a class that you do have control over but which you wish to keep as simple as possible
-   a database connection/handler
-   an api call
-   whatever else you want!

## WHY


Reasons you may wish to use the proxy pattern:
-   If you wish to extend a class with logic, but you can't/won't update that class. Perhaps because:
    -   it is a class from an external library
    -   because the logic you want to add isn't relevant to the proper functioning of the class/method itself so you wish to keep it "outside" the class/method
-   If the original resource is expensive to create/destroy
-   If you wish to control access to a resource

## Examples


-   **Additional logic around existing class/actions**
    -   If you have a class that you wish to add additional logic to some of its methods, but you can't/don't want to update the class itself.
    -   You can create a proxy class that acts as an interface to the original one, it will invoke the original method as well, but it may add additional code around that invocation. For instance:
        -   it could add validation to check that you're able to call that original method
        -   it could add code that is required, but irrelevant to the original class. Like certain kinds of logging.
        -   informing an api/subscriber/message-bus of the action being taken, something which the original method itself shouldn't need to know about, but which is linked to it and desired.
-   **Original resource is expensive, like a DB connection**
    -   If the real resource/object is expensive to create/destroy, you could use a proxy that is pretty cheap to instantiate, and use lazy-initialisation for the real object so that it is only created when the proxy actually requires it
    -   and the proxy can them keep a reference to the real object in memory from that point on
-   **Access Control**
    -   a work VPN can be thought of as a proxy that controls access to various websites (resources) by ensuring you had the right credentials to log into the VPN in the first place before allowing access to those resources.


See the /examples folder for some code examples 
    -   TODO: Will add javascript examples to js folder

## Links

- [Refactoring Guru - Proxy](https://refactoring.guru/design-patterns/proxy)
- [Wikipedia - Proxy Pattern](https://en.wikipedia.org/wiki/Proxy_pattern)
