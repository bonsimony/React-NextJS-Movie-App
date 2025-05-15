import { Suspense } from "react";
import Movieinfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({params : {id}} : {params : {id : string}}){

    return (
        <div>
            <h3>Movie detail paper</h3>
            <Suspense fallback = {<h1>Loading movie info</h1>}>
                <Movieinfo id={id}/>
            </Suspense>
            <Suspense fallback = {<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );

};

