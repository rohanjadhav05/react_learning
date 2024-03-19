import { VideoCard } from "./VideoCard"

export interface Video {
    title : string,
    image : string,
    author : string,
    tumb : string,
    views : string,
    timestamp : string
}

export const VIDEOS = [{
    title : "Another Love | Concert Edition",
    image : "/photo.png",
    tumb : "/thumb.png",
    author : "Tom Moddy",
    views : "46 Million",
    timestamp : "12 days ago"
},
{
    title : "Satarangi | Animal Movie",
    image : "/photo.png",
    tumb : "/thumb.png",
    author : "Arjit Singh",
    views : "46 Million",
    timestamp : "32 days ago"
},
{
    title : "Satarangi | Animal Movie",
    image : "/photo.png",
    tumb : "/thumb.png",
    author : "Arjit Singh",
    views : "46 Million",
    timestamp : "32 days ago"
},
{
    title : "Satarangi | Animal Movie",
    image : "/photo.png",
    tumb : "/thumb.png",
    author : "Arjit Singh",
    views : "46 Million",
    timestamp : "32 days ago"
},
{
    title : "Satarangi | Animal Movie",
    image : "/photo.png",
    tumb : "/thumb.png",
    author : "Arjit Singh",
    views : "46 Million",
    timestamp : "32 days ago"
}
]

export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEOS.map(video => <div>
                <VideoCard
                    title={video.title}
                    image={video.image}
                    tumb={video.tumb}
                    author={video.author}
                    views={video.author}
                    timestamp={video.timestamp} 
                />
            </div>)
        }
    </div>
}