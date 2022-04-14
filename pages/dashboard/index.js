import { LayoutStatic, Footer } from '/src/containers'
import { months } from "../../src/constants";
import { Cards, Loading } from '../../src/components'

import { useFetch, useRedux } from '../../src/services/fetch'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import ContentLoader from "react-content-loader"
import {
    Chart, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    ArcElement, 
    BarElement} from 'chart.js'
import { userService } from '../../src/services'
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';

Chart.register(ArcElement)
Chart.register(BarElement)
Chart.register(CategoryScale)
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)

const realMoneyConvert = (value, timer, price) => {

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    })

    const money = formatter.format(value).replace('US', 'R')
    const subs = value - ( timer * price)

    if (timer > 0) {
        return `${formatter.format(subs).replace('US', 'R')}`
    }

    return money
}

const Dashboard = () => {

    const { userValues } = useRedux()
    const { data: info } = useFetch(`status/medicoId/${userService.userValue?.id}/count`, true, 'data')

    const [ _totalCancel, setTotalCancel ] = useState(false)
    const [ _waitConfirm, setWaitConfirm ] = useState(false)
    const [ _cancelYourself, setCancelYourself ] = useState(false)
    const [ _timeExcept, setTimeExcept ] = useState(false)
    const [ _cancelClient, setCancelClient ] = useState(false)
    const [ _waitPayment, setWaitPayment ] = useState(false)
    const [ _rowsPrice, setRowsPrice ] = useState(false)
    const [ _rows, setRows ] = useState(false)

    const { price } = userValues

    const data = {
        labels: months,
        datasets: [
            {
            label: "First dataset",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
            }
        ]
    }

    console.log(info)

    useEffect(() => {

        if (info != null && info.status != undefined) {

            const { 
                _rows,
                _0: _totalCancel,
                _1: _waitConfirm,
                _3: _cancelYourself,
                _5: _timeExcept,
                _6: _cancelClient,
                _9: _waitPayment
            } = info.status

            setRows(_rows)
            setTotalCancel(_totalCancel)
            setWaitConfirm(_waitConfirm)
            setCancelClient(_cancelClient)
            setTimeExcept(_timeExcept)
            setCancelYourself(_cancelYourself)
            setWaitPayment(_waitPayment)
            setRowsPrice( _rows * price )
        
        }

    }, [info])

    return (
        <LayoutStatic breadcrumbLabel="Dashboard" >
            <Fragment>

                <div className="col-lg-12 m-0">                        

                    <h2 className="mt-3">Geral</h2>

                    <div className="row">

                        <div className="row col-12 p-0 m-0">

                            <div className="col-sm-12 col-lg-6 p-0 m-0">
                                <div className="card p-3">
                                    <Line data={data}/>
                                </div>
                            </div>

                            <div className="row col-6 p-0 m-0">
                                <div className="col-sm-12 col-lg-6 p-0"> 
                                    <div className="card h-100">
                                        <div className="stat-widget-one card-body">
                                            <div className="stat-content d-inline-block">
                                                <div className="stat-text">{_timeExcept == 0 ? 'Faturamento' : !_timeExcept? 'Carregando...' : `Você teve estornos devido ao atraso`}</div>
                                                <div className="start-digit">
                                                    { _rowsPrice == undefined ? <Loading label={false}/> : <strong>{realMoneyConvert(_rowsPrice, _timeExcept, price)}</strong>}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-6 p-0">
                                    <div className="card h-100">
                                        <div className="stat-widget-one card-body">
                                            <div className="stat-content d-inline-block">
                                                <div className="stat-text">{_rows ? 'Carregando...' : 'Total de agendamentos'}</div>
                                                <div className="start-digit">
                                                    { _rows == undefined ? <Loading label={false}/> : _rows == 0 ? '-' : _rows }</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-6 p-0">
                                <   div className="card h-100">
                                        <div className="stat-widget-one card-body">
                                            <div className="stat-content d-inline-block">
                                                <div className="stat-text">{_waitConfirm ? 'Carregando...' : 'Aguardando sua confirmação'}</div>
                                                <div className="start-digit">
                                                    { _waitConfirm == undefined ? <Loading label={false}/> : _waitConfirm == 0 ? '-' : _waitConfirm}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-6 p-0">
                                    <div className="card h-100">
                                        <div className="stat-widget-one card-body">
                                            <div className="stat-content d-inline-block">
                                                <div className="stat-text">{_waitPayment ? 'Carregando...' : 'Aguardando pagamento'}</div>
                                                <div className="start-digit">
                                                    { _waitPayment == undefined ? <Loading label={false}/> : _waitPayment == 0 ? '-' : _waitPayment}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                    </div>
                    
                    <h2 className="mt-3">Outros</h2>

                    <div className="row">

                        <div className="col-lg-4 col-sm-12 p-0 m-0">
                            <Cards 
                            value={_cancelYourself}
                            loader={!_cancelYourself}
                            color='danger'
                            icon='ti-arrow-down'
                            title='Você cancelou'/>
                        </div>

                        <div className="col-lg-4 col-sm-12 p-0 m-0">
                            <Cards 
                            value={_cancelClient}
                            loader={!_cancelClient}
                            color='danger'
                            icon='ti-arrow-down'
                            title='Cliente cancelou'/>
                        </div>

                        <div className="col-lg-4 col-sm-12 p-0 m-0">
                            <Cards 
                            value={_timeExcept}
                            loader={!_timeExcept}
                            color='warning'
                            icon='ti-timer'
                            title='Tempo excedido'/>
                        </div>

                    </div>

                </div>

                <div className="col-lg-12 col-sm-12 mt-3">   

                    <p>Status de consultas 
                        
                        <Link href={'/painel'}>
                        <a 
                        className="link">(ver mais)</a>
                        </Link>

                    </p>

                    <div className="row">

                        ...

                    </div>  

                </div>

            </Fragment>
            <Footer />
        </LayoutStatic>
    )

}

export default Dashboard