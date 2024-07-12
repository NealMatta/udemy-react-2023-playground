# 340. Data Fetching with a loader()

-   Loader via React Router Dom gets executed when you're about to visit the route
-   What Loader does is wait for the page to be finished loading before showing anything. This however makes it look like nothing is on the page after you clicked on the links

# 342. More loader() data usage

-   Cannot use Loader Data on a higher level route

# 348 Extracting Error Data & Throwing Responses

-   Throwing an error in a loader would result in the closest Error Element executing

# 357. Validating User Input & Outputting Validation Errors

-   You should rely on server side validation in forms because client side validation can be turned off via the dev tools in the browser
-   Returning a response in an action gives you the option to use action data in pages
