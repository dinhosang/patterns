# Resource Aquisition Is Initialisation:

## ORIGIN

Comes mostly from C++ days where there was no garbage collector to clean up objects on the heap in memory.

## WHY ?

Issue was:
-   if there was a resource we wanted to access / create, but we wanted to limit the access to it, or ensure it was destroyed when we were finished
-   maybe we use it in a method, but if an error occurs then the object may continue to live in memory, or may continue to be accessed preventing others from accessing it
    -   also maybe that method has multiple return points, so we'd need to clean things up before every return which can be messy - and open to user error.

## WHAT ?

-   In C++ they came up with this RAII pattern where the idea is:
    -   create your instance of the class/access your resource on the stack at the start of the method that uses it.
    -   when the method/instance of class goes out of scope, everything on the stack is destroyed in C++ automatically, so no need to to have multiple destroys and error handling

## EXAMPLES

### JAVA

-   Not as useful in Java as in C++ as Java has garbage collection, but it can be useful to ensure you close access to resources
    -   for example if you stream a file or make a db connection, you may want to make sure it's closed down if an error is thrown, or when it's finished its task
    -   or if not closing down, then maybe freeing up access if that is limited in some way.

-   Makes use of closeable interface, and the try with resource syntax
    -   try (instantiate some instance here) { ... do something ... }

Example copied from: https://www.yegor256.com/2017/08/08/raii-in-java.html

```java
class SomePermissionGrantingService implements Closeable {

    private Semaphore sem;

    SomeService(Semaphore sem) {
        this.sem = sem;
    }

    @Override
    public void close() {
        this.sem.release()
    }

    public SomeService acquire() {
        this.sem.acquire();
        return this;
    }

}


class SomeUserService {

    private Semaphore sem = new Semaphore(5); // this means only 5 permits are available, if 5 have currently already acquired permission then once the 6th user tries to acquire permission it will be paused until one frees up

    public void doSomething(int currentCount) throws Exception {

        try (SomePermissionGrantingService p = new SomePermissionGrantingService(this.sem).acquire()) {

            if (x % 3 == 0) {
                throw new Exception("I don't like multiples of 3 for some reason!");
            }

            System.out.printf("x = %d", x);
            if (a) {
                return 1
            } else if (b) {
                return 2
            }

        }

    }

}


Class Controller {

    void doSomethingInParallel {
        
        SomeUserService service = new SomeUserService();

        for(int x = 0; x < 32; x++) {
            SomeParallelEnabler.runAsyncStyle(service.doSomething(x))
        }
    }
}


```

In the above example even though the values of x that are multiples of 3 will throw an exception, thanks to the nature of the closeable interface (and the try with resource) the permits will be opened back up automatically.

The alternative is you would need to ensure you were manually freeing things up when it succeeds or when it fails, or after the 5th failure (x == 15) then all the permits would be used up.
