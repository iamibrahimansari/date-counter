import styled from 'styled-components';
import {DisplayInfo} from './DisplayInfo';

// if count == 0 then message should be "Today is Mon July 21 2027"
// if count > 0 then message should be "${count} days from today is Sat Jun 26 2027"
// if count < 0 then message should be "${count} days ago was Sun Jun 20 2027"

export const Info = ({count}) => {
    const date = new Date();
    date.setDate(date.getDate() + count);
    let message = null;
    switch(count){
        case 0:
            message = `Today is ${date.toDateString()}`;
            break;
        default:
            message = Math.abs(count) + `${(count > 0) ? ' days from today is ' : ' days ago was '}` + date.toDateString();
    }
    return(
        <DisplayInfo>{message}</DisplayInfo>
    )
}