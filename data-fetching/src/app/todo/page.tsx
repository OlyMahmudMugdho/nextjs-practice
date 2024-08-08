import fetchTodo from "@/utils/fetchTodo";
import {Suspense} from "react";
import Link from "next/link";

export default async function Todo() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`,
        {
            cache: 'default'
        }
        )
    const data =  await response.json();
    return (
        <main className="flex min-h-screen flex-col items-center justify-start">
            <h1 className={"py-4"}>Todo page</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className={"flex flex-col gap-2"}>
                    {
                        [...data].map(item => <Link href={`/todo/${item.id}`} key={item.id}>{item.title}</Link>)
                    }
                </div>
            </Suspense>
        </main>
    );
}
