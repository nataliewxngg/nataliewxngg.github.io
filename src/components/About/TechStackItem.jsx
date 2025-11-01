import Icon from '@mdi/react';

function TechStackItem(props) {
    return <div className='p-2 text-center'>
        <Icon path={props.img} size={3} color='currentColor' />
        <h1>{props.language}</h1>
    </div>
} 

export default TechStackItem;