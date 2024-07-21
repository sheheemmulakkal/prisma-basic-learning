import express, {Request, Response} from "express";
import cors from "cors";

const app = express ();

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send("Helloo world")
})

app.listen(process.env.PORT || 3000, () => {
	console.log("App started running on port 3000");
})
