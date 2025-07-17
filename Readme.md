# Namaste React 🚀

# Parcel
    -> Zero Config - just install it and start using it (no need to do any configuration for it) 
    -> created Development build of our app
    -> created a server with port no: 1234
    -> hosted our development build on to the server i.e. localhost:1234
    -> It does HMR (Hot Module Replacement) in all the files in our project
        - Parcel is using HMR means whenever, whatever and whereever we make any changes and as soon as we save that file it builts it once again and hosts the new development build on to the server (localhost:1234).
    -> Parcel does HMR because it is monitoring (keeping an eye) all the files and for that it uses 'File Watching Algorithm' which is written in C++
    -> parcel is taking so less time in building those updated development builds because it is also doing caching in '.parcel-cache' to give us faster development experience
    -> Image Optimization
    -> Minification - Instead of development build if we do production build parcel will also do minification of our files as well.
    -> Bundling of our files
    -> It compresses our files also..
    -> Consistent Hashing
    -> Code Splitting
    -> Differential Bundling - Our app can open in Internet Explorer (newer & older), Chrome, Mobile Browser, FireFox etc ... Parcel takes care of all that and gives differential bundling to our app so that our apps runs on both older & newer versions of the browsers .... basically it gives us ability to have different bundles for different types of older browsers.
    -> Diagnostic - If you make an error in your code and configuration , Parcel displays beautiful diagnostics in your terminal and in the browser.
    -> currently our app is hosted on http but it gives us the ability to run our app on https as well (if we want to check any feature of our app is running on the https as well or not)
    -> Tree Shaking - Parcel statically analyzes the imports and exports of each module, and removes everythjing that isn't used.
    -> Parcel creates different development build and production build bundles (because production build takes a little more time than develoment builds because some optimizations are more in production build than than deveelopment build)