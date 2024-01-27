# 163 - Prop Drilling

-   React is built on a component framework. Many times you have components nested within components nested within components. With the idea of lifting state up so that it can be used across everywhere those third tier Nested components Our only able to access the property data if the parent component has access to the property data as well. This leads to props being passed down For the sole purpose of passing them down further

# 164 - Prop Drilling: Component Composition as a solution

-   It's part of but not the entire solution to prop drilling
-   Basically, it's using the children prop in components. Take a look at the shop JSX file dor an example
