This is a work in Progress wallet app.

How to setup:

1. NPM init vite
2. Select Svelte, typescript, and project name
3. cd <projectName>
4. npm install
5. npm install -D tailwindcss postcss autoprefixer daisyui
6. npm run dev
7. Check that a "dist" folder was created.
6. In chrome:
    a.Open the extensions manager
    b.Select "Load unpacked"
    c. Navigate to project and select the "dist" folder
    d. Pin the extension
7. npm run dev (This must be on to render svelte components.  As of this time I have not been able to reflect svelte changes immediately without stop "npm run dev" and reinitializing it)
8. Open the chrome extension. May take a second click after loading the client on first click after a change.


For additional resources how this project was setup, go to the tutorial here: https://codegino.com/blog/svelte-chromium-extension


Adding functionality to your html page:
1. the wallet looks for a class "customWallet" and adds an event Listener which will create a new window on click. add a button with the class "customWallet"

Errors:

1. "Waiting for service worker"
    The svelte components have not loaded yet. With npm run dev running, close the extension and reopen.