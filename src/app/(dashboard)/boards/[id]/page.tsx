'use client';

import { useParams } from "next/navigation";


const BoardPage = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Board {id}</h1>
            <p>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Non incidunt itaque labore vitae expedita dolores ipsam ipsum iste minus, excepturi sequi cumque eius rem asperiores,
                adipisci sit hic odit magni.</p>
        </div>
    );
}

export default BoardPage;