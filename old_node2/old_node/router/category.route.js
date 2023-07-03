import express from "express"
import { cateCreate, cateGet, regex } from "../controller/categoty.cont.js"
const cateroute = express.Router()
cateroute.route("/cate/create").post(cateCreate)
cateroute.route("/cate/get").get(cateGet)
cateroute.route("/cate/regex").get(regex)

export default cateroute