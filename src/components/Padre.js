import React, { Component } from 'react'
import Hijo from './Hijo'

export class Padre extends Component {
    constructor(props) {
        console.log('Se ejecuta el constructor del padre');
        super(props);
        this.state = {
            mensaje: 'Bienvenid@s',
           // cantidad: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                mensaje: '¿Qué tal?'
            })
        }, 3000)
        console.log('Se ejecuta el método componentDidMount() del padre');
    }

    // setCantidad = (cantidadHijo) => {
    //     this.setState(prevState => ({
    //         cantidad: prevState.cantidad += cantidadHijo
    //     }));

    // }

    render() {
        console.log('Se ejecuta el método render() del padre');
        return (
            <>
                <Hijo mensaje={this.state.mensaje} setCantidad={this.setCantidad}/>
                {/* <div className="container">
                    <p>Cantidad {this.state.cantidad}</p>
                </div> */}
            </>
        )
    }
}

export default Padre