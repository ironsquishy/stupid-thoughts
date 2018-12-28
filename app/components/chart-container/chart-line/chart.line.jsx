import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) =>({
    root : {}
})

const ChartLine = ({classes, data}) => {
    
    var chartData = translateData(data);

    return(
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={chartData}>
                <XAxis dataKey="time"/>
                <YAxis domain={[1000, 8000]} scale="log"/>
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                <Legend />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                <Line type="monotone" dataKey="sma" stroke="#82ca9d" /> 
            </LineChart>
        </ResponsiveContainer>
    );

    // return(
        
    //     <LineChart width={1000} height={500} data={chartData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
    //         <XAxis dataKey="time"/>
    //         <YAxis domain={[4000, 8000]} scale="log"/>
    //         <CartesianGrid strokeDasharray="10 10"/>
    //         <Line type="monotone" dataKey="price" stroke="#8884d8" />
    //         <Line type="monotone" dataKey="sma" stroke="#82ca9d" /> 
    //     </LineChart>
        
    // );
}

function translateData(data){

    
    var outData = data.map((val, index)=> {
           return {
               price : parseFloat(val.price),
               time : new Date(val.time).toLocaleTimeString(),
               sma : val.sma
           };
    });


    // const outData = [
    //     {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    //     {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    //     {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    //     {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    //     {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    //     {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    //     {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    // ];

    return outData;
}

export default withStyles(styles)(ChartLine);