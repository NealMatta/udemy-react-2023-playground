# Starting the Section

-   This is just another way of defining components. There aren't too many differences between the two options
-   Functional components are the default and most modern approach
-   Other than error boundaries, there's no reason to go to class-based components
-   Anything you can build with functional components, you can build with class-bas components
-   class bsaed components can't use react hooks

# 216. Adding a First Class-based component

-   `render` is the same as `return`
-   Need to extend the Component class for each new class
    -   This for example gives you access to props
-   Class based components can render functional components and vice-versa
    -   Reality, you stick to one usually

# 217. Working with State & Events

-   use Constructor for using state
-   State is ALWAYS an object
-   setState merges the state with the previous state
-   Gotta use the `this` keyword and it just makes it chaotic af

# 220. The Component Lifecycle

-   Since you can't include hooks, class based components have their own methodology
    -   componentDidMount == useEffect with an empty dependency array
    -   componentDidUpdate() == useEffect() with some dependencies
    -   componentWillUnmount == The clean up function of useEffect

# 221. Class-Based Components & Contexts

-   Pretty straightforwad but not as flexible

# 222. Class-based Components: A Summary

-   Class based components aren't used often in the coding world
-   Functional components are the way to go
-   Only use Class Based Components if:
    -   You're working on an existing project
    -   Or if you're building error boundaries

# 224. Error Boundaries

-   Error Boundaries are used to help catch errors
-   Since errors can execute in functions through the app, you don't always want to solve the error exactly where it was initiated. Rather, you want to catch it somewhere else
-   It still extends the class component but then you use it to wrap it around areas that errors may occur
