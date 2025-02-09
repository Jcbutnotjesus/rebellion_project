import * as Hapi from "@hapi/hapi";
import HapiAuthJwt2 from "hapi-auth-jwt2";
import { registerAuthRoutes } from "./auth";
import { registerRoutes } from "./routes/routes";
import CatboxMemory from "@hapi/catbox-memory";

const JWT_SECRET = "super_secret_key";

const server = Hapi.server({
  port: 4000,
  host: "localhost",
  routes: {
    cors: {
      origin: ["http://localhost:3000"], 
      headers: ["Authorization", "Content-Type"],
      credentials: true,
    },
  },
  cache: [
    {
      name: 'memoryCache',
      provider: {
        constructor: CatboxMemory.Engine,
        options: {
          maxByteSize: 104857600,
        },
      },
    },
  ],
});

const validate = async (decoded: any, request: any, h: any) => {
  return { isValid: !!decoded.id };
};

const init = async () => {
  await server.register(HapiAuthJwt2);

  server.auth.strategy("jwt", "jwt", {
    key: JWT_SECRET,
    validate,
    verifyOptions: { algorithms: ["HS256"] },
  });

  server.auth.default("jwt");

  registerAuthRoutes(server);
  registerRoutes(server);

  await server.start();
  console.log("Server running on", server.info.uri);
};

init();