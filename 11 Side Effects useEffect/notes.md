# 176 - What's a "Side Effect"? A Thorough Example

-   Tasks that don't impact the current component render cycle

# 178 - Using useEffect for handling (some) side effects

-   `useEffect` will be executed **after** every function component
-   WHen calling `useEffect`, there are two parameters:
    -   The first one is the actual function that is executed
    -   The second are dependencies that tell `useEffect` to execute only if the dependency changes
        -   An empty dependency only executes once
