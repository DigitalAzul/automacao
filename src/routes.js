import { Router } from "express"

const router = Router();


router.get("/", (req, res) => res.json({ api: "Teste automação" }));

router.get("/cactherrors", (req, res) =>  {
    throw new Error("Handling error route")
});

export { router as routes }
