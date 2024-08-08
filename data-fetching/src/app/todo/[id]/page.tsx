import {Suspense} from "react";

type Params = {
    id : string
}

export default async function Page( {params : {id},} : { params : {id : string} } ){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            cache: 'no-cache'
        }
    )
    const data =  await response.json();
    return (
        <main className="flex min-h-screen flex-col items-center justify-start">
            <h1 className={"py-4"}>Todo info</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className={"flex flex-col gap-2"}>
                    <h1> Task : {data.title} </h1>
                    <h1> Status : {data.completed ? "done" : "incomplete"} </h1>
                </div>
            </Suspense>
        </main>
    );
}