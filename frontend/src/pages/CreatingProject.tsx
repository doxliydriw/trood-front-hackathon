import { useState } from 'react';
import {axiosClient} from 'shared/api/index'
import { useNavigate } from 'react-router-dom';


import type { Project } from 'shared/types/project'

const CreatingProject = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        field: '',
        deadline: '',
        description: '',
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
    console.log(formData);
    
    event.preventDefault();
    try {
        const response = await axiosClient.post<Project>('projects', formData);
        console.log('Project created successfully:', response.data);
        navigate(`/projects`);
    } catch (error) {
        console.error('Error creating project:', error);
    }
    };
    
  return (
    <section className="w-full h-full pl-[66px] pr-[60px] pt-[56px]">
        <h2 className="mb-8 text-left text-[32px] font-medium leading-[43.74px] no-underline">CreatingProject</h2>
            <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-x-[37px] gap-y-[20px] auto-rows-max w-full h-screen rounded-[24px] bg-background pl-[59px] pt-[55px] pr-[77px] ">
                <div className="flex flex-col w-[420px]">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    name="name"
                    value={formData.name} 
                    onChange={handleChange}
                    className="border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] text-[18px] font-normal leading-[19.8px] text-left no-underline p-[20px]"/>
                </div>
                <div className="flex flex-col w-[443px] place-self-end">
                    <label htmlFor="field">Field</label>
                    <div className="border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] p-[20px]">
                        <select 
                        name="field"
                        id="field"
                        value={formData.field}
                        onChange={handleChange}
                        className="focus:outline-none w-full text-[18px] font-normal leading-[19.8px] text-left no-underline bg-white cursor-pointer">
                            <option value="">Select a field</option>
                            <option value="design">Design</option>
                            <option value="development">Development</option>
                            <option value="marketing">Marketing</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col w-[420px]">
                    <label htmlFor="experience">Experience</label>
                    <input 
                    type="text"
                    name="experience"
                    value={formData.experience} 
                    onChange={handleChange}
                    className=" border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] text-[18px] font-normal leading-[19.8px] text-left no-underline p-[20px]"/>
                </div>
                <div className="flex flex-col w-[443px] place-self-end">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                    type="text"
                    name="deadline"
                    value={formData.deadline} 
                    onChange={handleChange}
                    className="border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] text-[18px] font-normal leading-[19.8px] text-left no-underline p-[20px]"/>
                </div>
                <div className="col-span-full flex flex-col">
                    <label htmlFor="description">Description</label>
                    <textarea
                    name="description"
                    value={formData.description} 
                    onChange={handleChange}
                    className="border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] text-[18px] font-normal leading-[19.8px] text-left no-underline p-[20px] resize-none" rows={8}/>
                </div>
                <button type="submit" className="mt-[15px] place-self-start rounded-[24px] bg-[hsla(220,6%,83%,1)] p-[10px_24px]">
                Create project
                </button>
            </form>
    </section>
  )
}

export default CreatingProject