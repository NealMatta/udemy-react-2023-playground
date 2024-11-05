# 511 - Introducing Compound Components

-   Components that don't work standalone but only work together
-   e.g. the <select> and <option> tags must be used together to be used together

# 516 - Introducing Render Prpos

-   PAssing a function as a value for the children prop
-   You have a component that returns a function. The return value must be something that is renderable

# 520. Debouncing

-   Search for local data is easy but if you have to reexecute a functino that makes an HTTP call, then it starts to become very expensive and inefficient
-   This is a technique that you don't update the state on every keystroke but rather it updates after the word is done (by looking at if a keystroke finished)
