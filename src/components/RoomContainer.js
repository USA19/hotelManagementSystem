import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import {RoomConsumer} from '../context';


export default function RoomContainer() {

return (<RoomConsumer>
       
        {value=>{
            const {loading,sortedRooms,rooms}=value;
            if(loading){
                return<Loading/>
            }
            return <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
                }
        
        }

        </RoomConsumer>)
   
    
    
}
