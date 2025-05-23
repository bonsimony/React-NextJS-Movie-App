import { Suspense } from "react";
import Movieinfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params; 
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({params} : PageProps){

    const { id } = await params;

    return (
        <div>

            <Suspense fallback = {<h1>Loading movie info</h1>}>
                <Movieinfo id={id}/>
            </Suspense>

             <Suspense fallback = {<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense> 
            
        </div>
    );

};

