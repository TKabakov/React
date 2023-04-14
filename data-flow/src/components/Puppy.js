import Bowl from './Bowl'

function Puppy (props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="circle" bowlStatus="empty"/>
        </div>
    );
};

export default Puppy;