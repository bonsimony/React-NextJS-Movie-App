import { Suspense } from "react";
import Movieinfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params : {id : string};
}

export async function generateMetadata({params} : IParams){
    const movie = await getMovie(params.id);
    return{
        title : movie.title
    }
}

export default async function MovieDetail({params} : IParams){

    return (
        <div>

            <Suspense fallback = {<h1>Loading movie info</h1>}>
                <Movieinfo id={params.id}/>
            </Suspense>

             <Suspense fallback = {<h1>Loading movie videos</h1>}>
                <MovieVideos id={params.id}/>
            </Suspense> 
            
        </div>
    );

};

