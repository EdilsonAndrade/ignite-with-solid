import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    try {
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch {
      return response
        .status(400)
        .json({ error: "List users is not permitted for non user" });
    }
  }
}

export { ListAllUsersController };
