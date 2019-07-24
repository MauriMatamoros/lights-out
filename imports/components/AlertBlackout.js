import React from 'react'
import { geolocated } from 'react-geolocated'
import { Meteor } from 'meteor/meteor'
import { 
    Alert,
    Col,
    Container,
    Button,
    Row,
    Spinner 
} from 'reactstrap'

import { history } from '../routes/routes'

export class AlertBlackout extends React.Component {
    state = {
        loading: false
    }

    onAlert = () => {
        this.setState(() => ({ loading: !this.state.loading }))
        const coordinates = {
            latitude: this.props.coords.latitude,
            longitude: this.props.coords.longitude,
            createdAt: new Date()
        }
        Meteor.call('coordinates.add', coordinates)
        history.push('/map')
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <Alert color="danger" style={{ marginTop: '5vh' }}>
                <h4 className="alert-heading">Ooops!</h4>
                <p>Tu navegador no soporta Geolocation</p>
            </Alert>
        ) : !this.props.isGeolocationEnabled ? (
            <Alert color="danger" style={{ marginTop: '5vh' }}>
                <h4 className="alert-heading">Ooops!</h4>
                <p>Geolocation no esta activado</p>
            </Alert>
        ) : (
            <div>
                <Container style={{ marginTop: '10vh' }}>
                    <Row>
                        <Col className="text-center">
                            {this.props.coords ? (
                                    <>
                                        <Button 
                                            onClick={this.onAlert} 
                                            block 
                                            color="light"
                                            disabled={this.state.loading}
                                        >¡No hay luz!</Button>
                                        <Button 
                                            onClick={() => history.push('/map')}
                                            block 
                                            color="light" 
                                        >Ver mapa</Button>
                                    </>
                            ) : (
                                <Spinner color="info" style={{ width: '20rem', height: '20rem' }}/>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default geolocated ({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(AlertBlackout)


