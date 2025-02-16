import { v4 as uuidv4 } from "uuid"
import Device from "../models/device.js"
import db from "../utils/inMemoryDb.js"

export const registerDevice = (req, res) => {
  const { name, type, status } = req.body

  if (!name || !type || !status) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  const newDevice = new Device(name, type, status)
  newDevice.device_id = uuidv4()

  db.addDevice(newDevice)

  res.status(201).json({ message: "Device registered successfully", device: newDevice })
}

export const getDevices = (req, res) => {
  const { status } = req.query

  const devices = status === "online" ? db.getOnlineDevices() : db.getAllDevices()

  res.json(devices)
}

export const deleteDevice = (req, res) => {
  const { device_id } = req.params

  const removed = db.removeDevice(device_id)

  if (removed) {
    res.json({ message: "Device removed successfully" })
  } else {
    res.status(404).json({ error: "Device not found" })
  }
}

