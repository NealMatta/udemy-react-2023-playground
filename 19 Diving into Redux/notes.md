# 284. How Redux Works

-   Four components of a redux function
    -   Reducer function
        -   This is what mutates or changes the data in the central data store
    -   Central Data state/store
    -   Components
        -   Components, subscribe to the central data store
        -   To make a change to the state to dispatch an action
    -   Action
        -   The action gets forwarded to the reducer function, and the reducer function takes over to make the change

# 286. Exploring the Core Redux Components

-   Reducer function is a standard javascript function
-   Always receives the old state and a dispatched action
-   It must always output a new state object
-   Takes the given inputs and produces a new state object

# 290. Providing State

-   Only wrapped components will have access to Redux

# 296. How to work with Redux State Correctly

-   When setting new state in the dispatch function, you need to set **all** state. Setting new state overrides the state, not just updates the value
-   **Never** mutate the state but always override the state
    -   Objects and arrays are references so mutating the state leads to bugs and unwanted side effects
