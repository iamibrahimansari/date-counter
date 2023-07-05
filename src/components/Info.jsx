import styled from 'styled-components';
import {DisplayInfo} from './DisplayInfo';

// if count == 0 then message should be "Today is Mon July 21 2027"
// if count > 0 then message should be "${count} days from today is Sat Jun 26 2027"
// if count < 0 then message should be "${count} days ago was Sun Jun 20 2027"

export const Info = ({count}) => {
    const date = new Date();
    date.setDate(date.getDate() + count);
    let message = null;
    const result = date.toDateString();
    switch(count){
        case 0:
            message = `Today is ${date.toDateString()}`;
            break;
        default:
            if(count > 0){
                message = `${count} ${count === 1 ? 'day' : 'days'} from today will be ${result}`;
            }else{
                message = `${-1 * count} ${count === -1 ? 'day' : 'days'} ago was ${result}`;
            }
    }
    return(
        <DisplayInfo>{message}</DisplayInfo>
    )
}