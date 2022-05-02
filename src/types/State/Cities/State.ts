import City from '../../Cities/City'

export default interface State {
    cities: Array<City | undefined>
}