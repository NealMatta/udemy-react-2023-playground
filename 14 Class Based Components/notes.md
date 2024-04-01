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
