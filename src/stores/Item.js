import { observable } from 'mobx'

class Item {

    @observable name
    @observable price = 0
    @observable quantity = 1

    constructor(name){
        this.name = name
    }
}

export default Item

