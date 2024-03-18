import { SearchBar } from "./Searchbar";

export function AppBar(){
    return <div className="flex justify-between pt-1 p-3">
        <div className="text-md inline-flex items-center pt-2">
            Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="text-md inline-flex items-center pt-2">
            Sign In Button
        </div>

    </div>
}