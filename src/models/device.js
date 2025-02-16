class Device {
  constructor(name, type, status) {
    this.device_id = "" // Will be set in the controller
    this.name = name
    this.type = type
    this.status = status
    this.last_active = new Date().toISOString()
  }
}

export default Device

