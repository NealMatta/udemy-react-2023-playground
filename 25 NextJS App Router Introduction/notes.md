# 411. Understanding File-based Routing & React Server Components

-   page.js is a server component
-   On the surface, it looks like React but it's actually executed on the server

# 412. Adding another route via the Filesystem

-   New paths are creating using new folders in the app directory and then adding a page.js file in there

# 413. Navigating Between Pages

-   If you try to use the HTML anchor element, The page would be forced to refresh
-   Using Link which comes from the next JS package helps treat the application like a single page application

# 414. Pages & Layouts

-   Layouts is another reserved name
-   At least one is needed in the root file
-   metadata is also an object that is reserved and exported out
    -   That's where the <head> values live
