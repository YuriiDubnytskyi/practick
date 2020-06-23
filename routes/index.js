const userRoutes = require("./userRoutes")
const chatRoutes = require("./chatRouter")

module.exports = (app) => {
    app.use('/api/users',userRoutes)
    app.use('/api/rooms',chatRoutes)
}