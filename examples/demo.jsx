import React from 'react'
import DocReady from 'es6-docready'
import Dom from 'es6-dom'
import Picker from '../src/picker'

    
    

DocReady(function() {

    let OptionBox = React.createClass({
        propTypes: {
            value: React.PropTypes.string
            , onClick: React.PropTypes.func
        }
        , getInitialState() {
            return {
                value: this.props.value || 'N/A'
            }
        }
        , componentWillReceiveProps(nextProps){
            this.setState({
                value: nextProps.value || 'N/A'
            })
        }

        , render() {

            return (
                <div className="box" onClick={this._handleClick}>
                    <label>{this.state.value}</label>
                </div>
            )
        }

        , _handleClick(e) {
            this.props.onClick && this.props.onClick(e)
        }
    })






    let Cars = [
        {
            text: 'ASTON MARTIN'
            , value: '1001'
            , series: [
                {
                    text: 'Cygnet'
                    , value: '100101'
                }
                , {
                    text: 'V8 Vantage'
                    , value: '100102'
                }
                , {
                    text: 'V12 Vantage'
                    , value: '100103'
                }
                , {
                    text: 'DB9'
                    , value: '100104'
                }
                , {
                    text: 'DBS'
                    , value: '100105'
                }
                , {
                    text: 'Virage'
                    , value: '100106'
                }
            ]
        }
        , {
            text: 'AUDI'
            , value: '1002'
            , series: [
                {
                    text: 'A4 Allroad'
                    , value: '100201'
                }
                , {
                    text: 'A5'
                    , value: '100202'
                }
                , {
                    text: 'A6'
                    , value: '100203'
                }
                , {
                    text: 'A7'
                    , value: '100204'
                }
                , {
                    text: 'A8L'
                    , value: '100205'
                }
                , {
                    text: 'Q3'
                    , value: '100206'
                }
                , {
                    text: 'Q5'
                    , value: '100207'
                }
                , {
                    text: 'Q7'
                    , value: '100208'
                }
            ]
        }
        , {
            text: 'PORSCHE'
            , value: '1003'
            , series: [
                {
                    text: 'Boxster'
                    , value: '100301'
                }
                , {
                    text: 'Cayman'
                    , value: '100302'
                }
                , {
                    text: '911'
                    , value: '100303'
                }
                , {
                    text: '918'
                    , value: '100304'
                }
                , {
                    text: 'Panamera'
                    , value: '100305'
                }
                , {
                    text: 'Macan'
                    , value: '100306'
                }
            ]
        }
    ]



    let List = React.createClass({
        propTypes: {
            fruit: React.PropTypes.string
            , brand: React.PropTypes.string
            , serial: React.PropTypes.string
        }
        , getInitialState() {
            return {
                fruit: this.props.fruit
                , brand: this.props.brand
                , serial: this.props.serial
                , brands: Cars
                , series: this.getCarSeries(this.props.brand)
            }
        }
        , componentWillReceiveProps(nextProps){
            this.setState({
                fruit: nextProps.fruit
                , brand: nextProps.brand
                , serial: nextProps.serial
            })
        }

        , componentDidMount () {}

        , render() {

            let fruit = this.state.fruit
                , brand = this.state.brand
                , serial = this.state.serial

            return (
                <ul>
                    <li>
                        <label>Choice X</label>
                        <div className="edit">
                            <Picker
                                ref="fruitSelection"
                                value={fruit}
                                options={['Mango', 'Orange', 'Avocado', 'Pineapple', 'Jack Fruit', 'Durian', 'Apricot', 'Carambola', 'Dateplum Persimmon', 'Megranate']}
                                onChange={this._handleFruitChange}
                                >
                                <OptionBox value={fruit} onClick={this._handleClickFruit} />
                            </Picker>
                        </div>
                    </li>
                    <li>
                        <label>Choice Y</label>
                        <div className="edit">
                            <Picker
                                ref="carSelection"
                                value={[brand, serial]}
                                options={[this.state.brands, this.state.series]}
                                onChange={this._handleCarChange}
                                >
                                <OptionBox value={this.getCarText(brand, serial)} onClick={this._handleClickCar} />
                            </Picker>
                        </div>
                    </li>
                </ul>
            )
        }

        , _handleClickFruit(e) {
            this.refs.fruitSelection.show()
        }

        , _handleFruitChange(value, text) {
            this.setState({fruit: value})
        }

        , _handleClickCar(e) {
            this.refs.carSelection.show()
        }

        , _handleCarChange(value, text, listIndex) {
            if (listIndex === 0) {
                window.clearTimeout( this._updateCarTimer )
                this._updateCarTimer = window.setTimeout( () => {
                    let series = this.getCarSeries(value)
                    this.setState({
                        series: series
                        , brand: value
                        , serial: series.length > 0 ? series[0].value : ''
                    })
                }, 250)
            }
            else if (listIndex === 1) {
                this.setState({serial: value})
            }
        }

        , getCarSeries(brand) {
            for (let i = 0; i < Cars.length; i++) {
                if (Cars[i].value === brand)
                    return Cars[i].series
            }
            return []
        }

        , getCarText(brand, serial) {
            let series, b, s
            for (let i = 0; i < Cars.length; i++) {
                if (Cars[i].value === brand) {
                    series = Cars[i].series
                    b = Cars[i].text
                    break
                }
            }

            if ( ! series )
                return
            for (let i = 0; i < series.length; i++) {
                if (series[i].value === serial) {
                    s = series[i].text
                    break
                }
            }

            return (b && s) ? `${b} - ${s}` : undefined
        }
    })







    let Main = React.createClass({
        propTypes: {
            value: React.PropTypes.string
            , onClick: React.PropTypes.func
        }
        , getInitialState() {
            return {
                value: this.props.value
            }
        }
        , componentWillReceiveProps(nextProps){
            this.setState({
                value: nextProps.value
            })
        }

        , render() {

            return (
                <div className="list-area">
                    <List fruit="Avocado" />
                </div>
            )
        }
    })





    React.render(
        <Main/>
        , Dom.nodeById("page-container"))


})
