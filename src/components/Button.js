// import'../styles/button.css'
export default function Button(props){
    const myStyle={
        backgroundColor: props.backColor
    }

    return(
       <button style={myStyle}>{props.text}</button>
    );
}