import {Button} from './Button';
import {Span} from './Span';
import {SubWrapper} from './SubWrapper';



export const Counter = ({onClick, count, text}) =>{

    return(
        <SubWrapper>
            <Button onClick={() => onClick('-')} color="tomato" type="button">-</Button>
            <Span>{`${text}: ${count}`}</Span>
            <Button onClick={() => onClick('+')} color="green" type="button">+</Button>
        </SubWrapper>
    )
}