# 176 - What's a "Side Effect"? A Thorough Example

-   Tasks that don't impact the current component render cycle

# 178 - Using useEffect for handling (some) side effects

-   `useEffect` will be executed **after** every function component
-   WHen calling `useEffect`, there are two parameters:
    -   The first one is the actual function that is executed
    -   The second are dependencies that tell `useEffect` to execute only if the dependency changes
        -   An empty dependency only executes once

# 179. Not All Side Effects Need useEffect

-   As the title suggests, not all side effects need `useEffect`. Overusing it is bad practice as
    it's adding an extra component cycle

# 186. Introducing useEffect's Cleanup Function

-   The cleanup Function runs right before the effect function runs again or before the component dismounts

# 187. The Problem with Object & Function Dependencies

-   Passing a function in as a dependency can lead to infinite loops.
-   The reason being is that when a component is re-rendered the functions inside of them are re-rendered as well. Just because the function that you're creating is the exact same, that does not mean that the objects are not changing. So then the dependency will see the change and rerun the `useEffect` hook.

# 188. The useCallback Hook

-   You should use this when your component uses a use effect hook that has a function dependency
-   It essentially makes sure that the inner function is not re-created
-   You should, in the dependencies of `useCallback` add any prop or state values that are used in the function
