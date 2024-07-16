const Result = ({ results }) => {
    return (
        <div className="result">
            <h2>{results.map((task, index) => (
                <p className="result" key={index}>{task}</p>
            ))}</h2>
        </div>
    )
}
export default Result;