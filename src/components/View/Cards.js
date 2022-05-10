import { Loading } from "./Loading"

export const Cards = ({ 
    title, 
    value, 
    color = 'pink', 
    icon }) => (
    <div className="card">
        <div className="stat-widget-one card-body">
            <div className="stat-icon d-inline-block">
                <i className={`${icon} text-${color} border-${color}`}></i>
            </div>
            <div className="stat-content d-inline-block">
                <div className="stat-text">{value == undefined ? null : title}</div>
                <div className="stat-digit">{value == undefined ? <Loading label={false}/> : value}</div>
            </div>
        </div>
    </div>
)