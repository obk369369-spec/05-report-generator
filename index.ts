import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8080 });
console.log("Server running on http://localhost:8080");

for await (const req of server) {
  req.respond({ body: await Deno.readTextFile("./index.html") });
}
