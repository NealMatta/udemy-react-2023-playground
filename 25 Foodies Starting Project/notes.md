# 428. React Server Components vs Client Components - When to use What

-   Vanilla react apps render on the client
    -   The server returns a single HTML file which contains the client side JS Code and then the client side react code renders the content
-   Since in Next JS, you're working with a full stack application, Next JS defaults to using backend or server side rendering
-   An advantage of React Server Components is that:
    -   You have less client side JS code that needs to be executed which means you have better performance of the website
    -   Great for SEO (Search Engine Optimization)
        -   Web server crawlers see the full page
-   Client components are typically used when you need to use event handlers or client side functions like useEffect
    -   To tell Next JS that you're using client side rendering, you have to add in "use client" to the top of a page

# 450. Building for Production & understanding NextJS Caching

-   When the code is consolidated to be optimized, static versions of some pages are generated. In our case, the meals page is statically generated
-   This is an issue because as new meals are added, those updates aren't shown through

# 454. Static Metadata

-   NextJS is looking for exported variables called metadata
-   In the metadata object, you can set metadata fields
-   This lets you add more metadata so that SEO would be better
-   Using the title value is how you set the tab name
