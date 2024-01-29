# Notes

-   Context is basically used as a wrapper around the nested components that use the lifted props
-   There are some specific nomenclature (for a lack of of a better word) that you need to include when using context
-   You can even pass functions in via context to simplify how it's executed

# 163 - Prop Drilling

-   React is built on a component framework. Many times you have components nested within components nested within components. With the idea of lifting state up so that it can be used across everywhere those third tier Nested components Our only able to access the property data if the parent component has access to the property data as well. This leads to props being passed down For the sole purpose of passing them down further

# 164 - Prop Drilling: Component Composition as a solution

-   It's part of but not the entire solution to prop drilling
-   Basically, it's using the children prop in components. Take a look at the shop JSX file dor an example

# 165 - Introducing the Context API

-   You create a context value and then wrap that around the entire app
    -   It can be connected to state so you wouldn't need to pass the value via prop

# 169 - Different way of using Context

-   I'm not making modifications to the code because it's a more cumbersome approach
-   You use something called <Context.Consumer> and wrap that around a component

# 170 - What happens when Context Values Change?

-   When a component That uses context changes, then the component gets re-executed. Similar to how state is used

# 173 - useReducer

-   Bare bones, it's a function that reduces one or more complex values to a simpler one
-   It's primarily used when you have a lot of state to manage. Otherwise, it adds extra steps
-   I guess use reducer is nicer in the sense that it helps me manage complex. They changes in a single place, so it becomes easier to debug the application.
