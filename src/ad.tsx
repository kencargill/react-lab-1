const Ad = (props: any) => {
    return (
    <div className={`poster ${props.darkTheme}`}>
        <p>Vote for</p>
        <h2 style={{fontSize: `${props.font}px`}}>{props.adName}</h2>
    </div>
    )
}

export default Ad