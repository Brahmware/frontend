const Content = ({ data }) => {
    return (
        <div className="video-container">
            <video
                key={data.id}
                autoPlay
                loop
                muted
            >
                <source src={data.backgroundImage} type="video/mp4" />
                Sorry! your browser does not support embedded videos.
            </video>
        </div>
    )
}

export default Content;