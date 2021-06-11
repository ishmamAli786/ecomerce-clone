require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const port=process.env.PORT || 4000;

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoute = require("./routes/admin/order.routes");



// mongodb connection
//mongodb+srv://root:<password>@cluster0.8pl1w.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/Ecomerce', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false})
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log("Database Failed To Connect",err)
})

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
