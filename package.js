Package.describe({
    summary: "Scaffold styles, variables, and structure for Bourbon projects.",
    version: "0.9.0",
    name: "ciara:bitters",
    git: "https://github.com/CiaraBurkett/meteor-bitters.git"
});

Package.onUse(function(api) {
   api.versionsFrom("METEOR@0.9.0");
   api.use(["fourseven:scss@0.95", "mrt:bourbon@3.1.8", "mrt:neat@1.5.0"], ['client', 'server']);
});
