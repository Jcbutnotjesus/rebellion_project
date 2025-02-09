import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { getAllData } from "../controller/fetchAllData";
import { getFilms } from "../controller/getFilms";
import { getPeople } from "../controller/getPeople";
import { getStarships } from "../controller/getStarships";


export const registerRoutes = (server: Server) => {
  server.route({
    method: "GET",
    path: "/api/all",
    handler: async (request: Request, h: ResponseToolkit) => {

        const response = getAllData(request, h);

        if (request.params.ttl) {
            (await response).ttl(request.params.ttl);
        }

        return response;
    },
    options: {
        cache: {
            expiresIn: 30 * 100000,
            privacy: 'private'
        }
    }
});

  server.route({
    method: "GET",
    path: "/api/films",
    handler: getFilms,
  });

  server.route({
    method: "GET",
    path: "/api/people",
    handler: getPeople,
  });

  server.route({
    method: "GET",
    path: "/api/starships",
    handler: getStarships,
  });
};