import { observable, action, computed } from 'mobx'
import Item from './Item'

class Inventory {

    @observable items = []

    @action addItem = (name, price, quantity) => {
        const sameItem = this.items.find(i => i.name === name)
        if (sameItem) {
            this.items[this.items.indexOf(sameItem)].quantity++
        } else {
            const item = new Item(name)
            this.items.unshift(item)
        }
    }

    @action buyItem = (name) => {
        const item = this.items.find(i => i.name === name)
        if (item.quantity === 1) {
            this.items.splice(this.items.indexOf(item), 1)
        } else {
            item.quantity--
        }
    }

    @action changePrice = (name, price) => {
        this.items.find(i => i.name === name).price = price
    }

    @computed get numItems() {
        return this.items.length
    }
}

export default Inventory