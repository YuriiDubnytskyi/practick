class Notifications {
    counter:number
    constructor(){
        this.counter = 0
    }
    getCounter(){
        return this.counter
    }
    setCounter(){
        this.counter+=1
    }
    clearCounter(){
        this.counter=0
    }
}
const not = new Notifications()
export default not