# 538. Understanding the different kinds of tests

-   Unit Tests test the individual building blocks (functions and components in isloation)
    -   The most common and important kind of test
-   Integration Tests test the combination of multiple building blocks
-   End to End Tests are used for full scenarios
    -   These are typically done manually so not the most important

# 539. What you should test and why you should test

-   Test small, focused tests

# 540. understanding the Technical Setup & involved tools

-   We need a tool for running our tests and asserting our results
    -   Jest is the most common tool
-   We also need a tool for simulating our react app / components
    -   React Testing Library is most often used
-   Both tools are available via create react app

# 542. Writing our first test

-   Typically want to do 3 things when writing a test, the 3 A's

1. Arrange - Set up the test. Render the compoennt you want to test
2. Act -> Do the thing you want to test. e.g. simulate a button click
3. Assert -> Look at the output in the browser and see if it matches the expectations
