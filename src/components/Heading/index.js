const Heading = ({title}) => {
    return(
        <div className="pageHeading">
            <h1>{title || 'N/A'}</h1>
        </div>
    )
}
export default Heading;