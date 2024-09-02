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

# 415. Reserved File Names, Custom Components, & how to organize a NextJS Project

-   Custom components are unaffected. You can create a components folder and have it all there
-   While you can store them in the app folder, it's probably better to store it in a separate folder
-   Using the '@' in an import statement will make the code look for the import starting at the root folder
    -   Ex. '@/components/header'

# 415. Reserved Filenames

-   page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)
-   layout.js => Create a new layout that wraps sibling and nested pages
-   not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
-   error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
-   loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
-   route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: https://nextjs.org/docs/app/api-reference/file-conventions
