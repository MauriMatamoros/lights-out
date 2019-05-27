import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {
    Container,
    Row,
} from 'reactstrap'

import { Coordinates } from '../api/coordinates'


export class BlackoutMap extends React.Component {
    state = {
        latitude: 14.7503821,
        longitude: -86.241341,
        width: '80%',
        height: '100%',
        zoom: 8
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Map 
                        google={this.props.google} 
                        zoom={7.5}
                        style={{ width: '99%', height: '80%', marginLeft: '0.5%', position: 'relative' }}
                        initialCenter={{ lat: 14.7503821, lng: -86.241341 }}
                    >
                    {this.props.coordinates.map((coordinate) => <Marker key={coordinate._id} position={{ lat: coordinate.latitude, lng: coordinate.longitude }}/>)}
                    </Map>
                </Row>
            </Container>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('coordinates')
    return {
        coordinates: Coordinates.find({}).fetch()
    }
})(GoogleApiWrapper({
    apiKey: Meteor.settings.public.GOOGLE_API
})(BlackoutMap))
