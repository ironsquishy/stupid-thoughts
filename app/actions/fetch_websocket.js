import ClientSocket from 'socket.io-client';
import Utils from '../utils';

export default function Fetch_Websocket(){
    return (dispatch) => {
        dispatch({ type: Utils.FETCH_WEBSOCKET_DATA});
        try{
            var io = ClientSocket(Utils.WEBSOCK_URL);

            io.on('greet', (_data)=>{
                dispatch({
                    type : Utils.FETCH_WEBSOCKET_DATA_SUCCESS,
                    payload : []
                })
            });

            io.on('ticker', (_data)=>{
                dispatch({
                    type : Utils.FETCH_WEBSOCKET_DATA_UPDATE,
                    payload : _data
                })
            });

            io.on('close', (_res)=>{
                dispatch({type: Utils.FETCH_WEBSOCKET_DATA_FAIL, payload : [], err: _res.message});
            })

            io.on('error', (_res)=>{
                dispatch({type: Utils.FETCH_WEBSOCKET_DATA_FAIL, payload : [], err: _res.message});
            });
        } catch (err){
            dispatch({type: Utils.FETCH_WEBSOCKET_DATA_FAIL, payload : []});            
            return err;
        }
    }
}