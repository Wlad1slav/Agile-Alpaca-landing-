import {redirect} from "next/navigation";

export default function notFound() {
    redirect('/en/404');
    return (
        <></>
    )
}