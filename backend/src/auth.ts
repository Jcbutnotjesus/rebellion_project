import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Server } from "@hapi/hapi";

const JWT_SECRET = "super_secret_key"; 

const USERNAME = "Luke";
const PASSWORD = "DadSucks";

let hashedPassword: string;

const hashPassword = async () => {
  hashedPassword = await bcrypt.hash(PASSWORD, 10);
};
hashPassword(); 

export const registerAuthRoutes = (server: Server) => {
  server.route([
    {
      method: "POST",
      path: "/login",
      options: { auth: false },
      handler: async (request, h) => {
        const { username, password } = request.payload as any;

        if (username !== USERNAME) {
          return h.response({ message: "Informations Invalide" }).code(401);
        }

        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (!isMatch) {
          return h.response({ message: "Informations Invalide" }).code(401);
        }

        const token = jwt.sign({ id: username }, JWT_SECRET, { expiresIn: "24h" });
        return { token };
      },
    },
  ]);
};