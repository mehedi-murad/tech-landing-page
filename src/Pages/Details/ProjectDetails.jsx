import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams()
    const [projectItem, setProjectItem] = useState(null)

    

    useEffect(() => {
        fetch('/info.json')
        .then (res => res.json())
        .then (data => {
            const foundProjects = data.find(item => item.category_id === id);
            setProjectItem(foundProjects);
        })
    },[id])
    if(!projectItem){
        return <p>Loading...</p>
    }

    const {category_id, project_title, project_img, project_details} = projectItem;
    return (
        <div>
            <div className="md:w-[850px] px-8 mx-auto py-8">
            <div className="flex justify-center mb-5">
                <img className="rounded-xl" src={project_img} alt="" />
            </div>
            <h2 className="font-bold text-3xl mb-5">{project_title}</h2>
            <p>{project_details}</p>
            <div>
                <Link 
                
                to="/">
                    <button className="btn btn-primary mt-5 w-full">Back to Home page</button>
                </Link>
            </div>
            <div>
                
            </div>
        </div>
        </div>
    );
};

export default ProjectDetails;