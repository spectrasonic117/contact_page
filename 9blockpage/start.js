const bun = require("bun");

bun.serve({
    port: 3000,
    fetch(request) {
        // const filepath = path.join(__dirname, "index.html")
        // return bun.sendFile(filepath)
        return new Response("Hello World");
    },
});
