import app from "./src/app.js"
import conn from "./src/db/db.js"

conn()

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})