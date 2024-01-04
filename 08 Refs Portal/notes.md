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

## 149 - Forwarding Refs to Custom Components

-   This is done by importing forwardRef from React and using it on the custom component
-   Forwarding Refs is useful when your input is a custom component and you can pass the ref from the parent component to the child (custom) component

## 150 - Exposing Component APIs via the useImperativeHandle Hook

-   useImperativeHandle Allows you to turn that ref into a sort of class. In an animal class you can have information like type of animal or genealogy. But you can also have functions like speak. useImperativeHandle Helps you handle those kinds of callable components
    -   For example, in a dialog modal that needs to Open and close, You would rather not rely on the reference in the parent component, but would rather rely on the function, explicitly defined in the child component itself

## 155 - Introducing & Understanding "Portals"

-   Portals, in a sense, can be used to teleport the code into a different place in the dom
