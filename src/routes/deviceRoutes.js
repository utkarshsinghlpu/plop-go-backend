import express from "express"
import { registerDevice, getDevices, deleteDevice } from "../controllers/deviceController.js"

const router = express.Router()

router.post("/register", registerDevice)
router.get("/", getDevices)
router.delete("/:device_id", deleteDevice)

export default router

