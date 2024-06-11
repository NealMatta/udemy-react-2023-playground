# 306. Redux & Side Effects (And Async codes)

-   Reducers must be pure, side-effect free, synchronous functions
-   To solve for this, you could put the code in the component or we write our own action creator functions

# 312. Frontend Code vs Backend Code

-   There are two ways for backend and frontend code to work together:
    -   Data is sent to the backend and the backend does a ton of transformations on the data
        -   This approach would be server side code helping take over some configuration
        -   There are possibilities in Firebase too for this to happen but I need to learn about it
    -   The backend is strictly created to store data

# 313. Where to put the logic

-   Async code can either be run in the component or action creator
-   Running in the component would mean having to use standard redux, not redux toolkit
    -   Just means that it'll be super heavy and unnecessarily coded
    -   Also means that reducers wouldn't necessarily be used

# 317. Using an Action Creator Thunk

-   Thunk -> Function that delays an action until later
    -   So in regards to redux, you want to create an action creator function that does not return the action itself but instead another functino which then eventually returns the action
    -   Run some other code before we dispatch actual action object that we did want to create
-

# 320. Redux DevTools

-   Google Chrome Browser Extension
