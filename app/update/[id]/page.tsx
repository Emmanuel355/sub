import EditForm from "@/components/EditForm";


interface pageProps {
    params: { id: string }
}


export default function EditPage(params: pageProps){
    return (<div>
        <EditForm id={params.params.id} />
    </div>)
}