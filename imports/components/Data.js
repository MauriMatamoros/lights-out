import React from 'react'
import { Table } from 'reactstrap'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import moment from 'moment'

import { Coordinates } from '../api/coordinates'


export const Data = ({ coordinates }) => (
    <Table>
        <thead>
        <tr>
            <th>Index</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Time</th>
        </tr>
        </thead>
        <tbody>
        { coordinates.map((coordinate, index) => (
            <tr key={coordinate._id}>
                <th scope="row">{index}</th>
                <td>{coordinate.latitude}</td>
                <td>{coordinate.longitude}</td>
                <td>{moment(coordinate.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            </tr>
        )) }
        </tbody>
    </Table>
)

export default withTracker(() => {
    Meteor.subscribe('coordinates')
    return {
        coordinates: Coordinates.find().fetch()
    }
})(Data)