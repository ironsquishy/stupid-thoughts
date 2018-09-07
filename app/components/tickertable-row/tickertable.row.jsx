import React from 'react';

//Material UI dependencies
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = {};

function TickerTableRow ({ classes, key, data }){
    return (
        <TableRow key={key}>
            <TableCell component="th" scope="row">
                {data.product_id} 
            </TableCell>
            <TableCell>
                {data.side}
            </TableCell>
            <TableCell>
                ${Math.floor(data.price)}
            </TableCell>
            <TableCell>
                {new Date(data.time).toLocaleTimeString()}
            </TableCell>
        </TableRow>
    );
}

export default withStyles(styles)(TickerTableRow);