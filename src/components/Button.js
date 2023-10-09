// import'../styles/button.css'
export default function Button(props){
    const myStyle={
        color: 'white',
        padding:'25px',
        width: props.width,
        margin:'0.3rem',
        fontSize:'1.3rem',
        fontWeight:'bold',
        borderRadius: '5px',
        backgroundColor: props.bColor,
    }

    return(
       <button style={myStyle} value={props.value} onClick={props.click} onMouseOver={props.mouseOver} onMouseOut={props.mouseOut}>{props.text}</button>
    );
}