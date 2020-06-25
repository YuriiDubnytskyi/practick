const userRoutes = require("./userRoutes")
const chatRoutes = require("./chatRouter")
const notificationsRoutes = require("./notificationsRouter")

module.exports = (app) => {
    app.use('/api/users',userRoutes)
    app.use('/api/rooms',chatRoutes)
    app.use('/api/notifications',notificationsRoutes)
}