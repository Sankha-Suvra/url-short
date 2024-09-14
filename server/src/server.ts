import express from "express"
import cors from "cors"
import connectDb from "./config/dbConfig"
import shortUrl from "./routes/shortUrl"
connectDb();

const port = process.env.port || 5001

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "*",
    credentials: true,
}))


app.use("/api/", shortUrl);

app.get("/", (req, res)=>{
    res.send("Hello World!")
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})