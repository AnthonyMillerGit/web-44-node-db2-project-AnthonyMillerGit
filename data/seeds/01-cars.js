// STRETCH
const cars = [
    {
        vin: '1532596459853',
        make: 'toyata',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1532596459853',
        make: 'toyata',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '1532596459853',
        make: 'ford',
        model: 'focu',
        mileage: 15000,
    },
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}