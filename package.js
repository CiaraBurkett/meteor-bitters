Package.describe({
    summary: "Bitters - Scaffold styles, variables, and structure for Bourbon projects."
});

Package.on_use(function (api) {
    api.use(['scss','bourbon', 'neat'], ['client', 'server']);
    //dont need to add any files to the client, they're there just so the package will build
});
