import { AppBar } from "@/components/AppBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/components/VideoGrid";

export default function VideoPage(){
    return <div className="p-4">
        <AppBar/>
        <div className="grid gap-4 grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-9 sm:col-span-8 ">
                <video width={"100%"} height={"720px"} controls src="https://youtu.be/6MgsHSAcI9k" />
                <div className="text-2xl">
                    Another Love | Tom Moddy
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 sm:col-span-4 p-2">
                {VIDEOS.map(x => <VideoCardHorizontal video={x}/> )}
            </div>
        </div>
    </div>
}