const userRoutes = require("./userRoutes")
const chatRoutes = require("./chatRouter")

module.exports = (app) => {
    //To do api app.use
    app.use('/api/users',userRoutes)
    app.use('/api/rooms',chatRoutes)
}