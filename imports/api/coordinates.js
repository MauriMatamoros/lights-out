import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import moment from 'moment'

export const Coordinates = new Mongo.Collection('coordinates')

if (Meteor.isServer) {
    Meteor.publish('coordinates', () => {
        return Coordinates.find({})
    })
}

Meteor.methods({
    'coordinates.add'({ latitude, longitude, createdAt }) {
        Coordinates.insert({
            latitude,
            longitude,
            createdAt
        })
    }
})