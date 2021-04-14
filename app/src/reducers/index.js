import { combineReducers } from "redux";
import Tasks from './Tasks'
import FormDisplay from './FormDislay'
import EditingTask from './EditingTask'
import Sort from './Sort'
import Search from './Search'
import Filter from './Filter'
import Products from './Products'
import Cart from './Cart'
import Message from './Message'
import ProductsAPI from './ProductsAPI'

const myReducer = combineReducers({
    Tasks,
    FormDisplay,
    EditingTask,
    Sort,
    Search,
    Filter,
    Products,
    Cart,
    Message,
    ProductsAPI
})

export default myReducer