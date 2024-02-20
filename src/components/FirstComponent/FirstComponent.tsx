
// function for a single img tag.
export function Profile() {
    return (
        <img 
            src="https://i.imgur.com/MK3eW3Am.jpg" 
            alt="Katherine Johnson"
        ></img>
    );
}

function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery
