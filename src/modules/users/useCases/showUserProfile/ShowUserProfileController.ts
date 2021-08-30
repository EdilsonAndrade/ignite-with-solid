import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    console.log(user_id, "user");
    try {
      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch {
      return response.status(404).json({ error: "User not found" });
    }
  }
}

export { ShowUserProfileController };
