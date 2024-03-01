import React from 'react'

function Video() {
    return (
        <div className='video'>
            <div className='video iframe'>
                <h2>
                    React Router Course
                </h2>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=ZMAXO-mJP_oY9NQb&amp;list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Video
