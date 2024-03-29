# 206 - Avoiding component functions executions with memo()

-   Memo comes from the react library
-   You wrap it around a function
    -   `export default function Counter({ initialCount }) { ...` to `const Counter = memo(function Counter({ initialCount }) { ... )`
-   For the memoed function, you'd then default export it at the end of the file
-   Memo compares prop values, and if the prop value is the same, then the component will not execute
-   Do not overuse memo - Wrap Memo as high up in the component tree as possible

# 208 - Understanding the UseCallback() Hook

-   Nested functions get reexecuted as act as a new prop value

# 209 - Understanding the useMemo() Hook

-   The same way that you want to prevent component functions from re-executing, you also want to prevent normal functions from re-executing
-   `memo` is wrapped around component functions while `useMemo` is wrapped around normal functions that are executed in component functions to prevent their execution
    -   Typically only used to prevent complex
-   Should not be overused as that would then lead to more issues

# 210 - React Uses A Virtual DOM - Time To Explore It!

-   React checks for necessary DOM updates yeah a virtual Dom
    -   It creates and compares virtual DOM Snapshots to find out which part of the rendered UI need to be updated

# 211 - Why Keys Matter When Managing State!

-   Keys allow react to clearly identify which component is which if there's a dynamic list

# 213. Using Keys For Resetting Components

-   If your child component relies on a state value, you can use the key parameter to reset the component on change

# 214. State Scheduling & Batching

-   Basically, you can't use the new state value immediately after setting it
-   Multiple state updates get batched together and only get executed once

# 215. Optimizing React with MillionJS

-   Need to research but it'd be good to add
