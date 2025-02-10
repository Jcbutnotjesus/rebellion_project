import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { getAllData } from "../controller/fetchAllData";
import { getPlanets } from "../controller/getPlanets";
import { getStarships } from "../controller/getStarships";
import { getVehicles } from "../controller/getVehicles";
import { getFilms } from "../controller/getFilms";
import{ getPeople } from "../controller/getPeople";
import { getSpecies } from "../controller/getSpecies";


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
            expiresIn: 30000 * 10000,
            privacy: 'private'
        }
    }
});

  server.route({
    method: "POST",
    path: "/api/planets",
    handler: getPlanets,
  });

  server.route({
    method: "POST",
    path: "/api/starships",
    handler: getStarships, 
  });

  server.route({
    method: "POST",
    path: "/api/vehicles",
    handler: getVehicles,
  });

  server.route({
    method: "POST",
    path: "/api/films",
    handler: getFilms,
  });

  server.route({
    method: "POST",
    path: "/api/people",
    handler: getPeople,
  });
  
  server.route({
    method: "POST",
    path: "/api/species",
    handler: getSpecies,
  });
};