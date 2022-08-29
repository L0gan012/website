import '../Styles/FlexContainer.css';

const FlexContainer = props => {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
};

export default FlexContainer;