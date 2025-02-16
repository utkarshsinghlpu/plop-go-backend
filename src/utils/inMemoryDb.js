class InMemoryDb {
  constructor() {
    this.devices = []
  }

  addDevice(device) {
    this.devices.push(device)
  }

  getAllDevices() {
    return this.devices
  }

  getOnlineDevices() {
    return this.devices.filter((device) => device.status === "online")
  }

  removeDevice(deviceId) {
    const index = this.devices.findIndex((device) => device.device_id === deviceId)
    if (index !== -1) {
      this.devices.splice(index, 1)
      return true
    }
    return false
  }
}

export default new InMemoryDb()

