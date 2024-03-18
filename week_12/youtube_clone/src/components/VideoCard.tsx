export function VideoCard(props : any){
    return <div className="p-3 hover:bg-gray-700 cursor-pointer ">
        <img className="rounded-xl"  src={props.image}/>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={"rounded-full w-20 h-20"} src={props.tumb}/>
            </div>
            <div className="col-span-11 pl-2">
                <div className="col-span-7">
                    {props.title}
                </div>
                <div className="col-span-2 text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="col-span-2 text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>   
        </div>
    </div>
}
