import React, { Component } from 'react'

export class Hijo extends Component {
    constructor(props) {
        console.log('Se ejecuta el constructor del hijo');
        super(props);
        this.state = {
            texto: ''
        }
    }

    componentDidMount() {
        this.setState({
            texto: 'lorem ipsum...'
        })
        console.log('Se ejecuta el método componentDidMount() del hijo');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Se ejecuta el método componentDidUpdate() del hijo');
        if(this.props.mensaje !==  prevProps.mensaje) {
            this.setState(prevState => ({
                texto: prevState.texto + ' dolor...'
            }))
        }
    }

    render() {
        console.log('Se ejecuta el método render() del hijo');
        return (
            <div className='container'>
                <p>Componente Hijo</p>
                <p>{this.props.mensaje}</p>
                <p>{this.state.texto}</p>
                {/* <hr />
                <button onClick={() => this.props.setCantidad(-1)}>-</button> */}
                {/* <button onClick={() => this.props.setCantidad(1)}>+</button> */}
            </div>
        )
    }
}

export default Hijo