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

# 359. BTS Work with useFetcher()

-   When you're using the Form component from react-router-dom, the action that you execute will redirect you towards that page where the action lives
-   That's not always the use case you want to see happen. For example, you may want to subscribe to a newsletter that exists in a header but also exists on a page.
-   That's where useFetcher comes into play

# 360. Deferring Data fetching with defer()

-   The defer method is best used when the http request is showing a piece of a page and you want to show other components of the page
-   What we're doing here could also be changed via the useNavigation hook
-   Best used when if you have a page with multiple HTTP requests at different speeds
