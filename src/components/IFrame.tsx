interface IFrameProps {
    url: string;
}

const IFrame = ( {url} : IFrameProps ) => {

    return(
            <iframe 
                src={url}
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
    )
}

export default IFrame;