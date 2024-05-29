# 306. Redux & Side Effects (And Async codes)

-   Reducers must be pure, side-effect free, synchronous functions
-   To solve for this, you could put the code in the component or we write our own action creator functions

# 312. Frontend Code vs Backend Code

-   There are two ways for backend and frontend code to work together:
    -   Data is sent to the backend and the backend does a ton of transformations on the data
        -   This approach would be server side code helping take over some configuration
        -   There are possibilities in Firebase too for this to happen but I need to learn about it
    -   The backend is strictly created to store data
