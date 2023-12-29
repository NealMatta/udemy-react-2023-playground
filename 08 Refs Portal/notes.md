# Section 08 Refs Portal Notes

## 142 - Introducing Refs

What is it

-   It's used to reference a value that's not needed for rendering
-   useRef returns an object with a single property, current.
-   Changing a ref does not trigger a re-render/

How can it be used for input values

-   When there is a ref on the input tag, you can then access the underlying element and all of its properties as well

## 144 - Refs vs States

-   State should be used for values that are directly reflected in the UI
    -   Since Refs do not re-render the component, you wouldn't want to use them in this situation

## 147 - Using Refs for more than "DOM Element Connections"

-   Like state values, Refs aren't lost when the component is re-rendered
-   A good use case is when you have a value that doesn't directly impact the DOM but you still need to manage it such that it is not refreshed
