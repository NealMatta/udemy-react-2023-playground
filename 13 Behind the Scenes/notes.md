# 206 - Avoiding component functions executions with memo()

-   Memo comes from the react library
-   You wrap it around a function
    -   `export default function Counter({ initialCount }) { ...` to `const Counter = memo(function Counter({ initialCount }) { ... )`
-   For the memoed function, you'd then default export it at the end of the file
-   Memo compares prop values, and if the prop value is the same, then the component will not execute
-   Do not overuse memo - Wrap Memo as high up in the component tree as possible

# 07 - Avoiding component functions executions with Clever Structuring

-
