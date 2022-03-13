

function Results(props) {

    return (
        <div className="div">
            <p>You got {props.score} out of 10 answers correct!</p>
            <button onClick={props.reset}>Try again</button>
        </div>
    )
}


export default Results;