import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import type { Project } from 'shared/types/project'
import {axiosClient} from 'shared/api/index'


const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditmode] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<Project>({
    id: 0,
    name: "",
    experience: "",
    deadline: "",
    description: "",
  });

  useEffect(() => {
    // Fetching  project from server
    const getProject = async () => {
      try {
        const response = await axiosClient.get<Project>(`/projects/${id}`);
        if (response.data) {
          setProject(response.data);
          console.log(response.data);
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) getProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setEditmode(true);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    console.log(formData);
    event.preventDefault();
    try {
      const response = await axiosClient.put<Project>(`projects/${formData.id}`, formData);
      console.log('Project created successfully:', response.data);
      navigate(`/projects`);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const deleteProject = async () => {
    try {
      await axiosClient.delete<Project>(`/projects/${id}`);
        navigate(`/projects`); 
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }

  return (
    <section className="w-full h-full pl-[66px] pr-[60px] pt-[56px]">
      { loading ? (
            <p className="text-gray-500">Loading  project</p>
          ) : project ? (
            <>
              <div className="flex justify-between mb-8 ">
                <h2 className="text-left text-[32px] font-medium leading-[43.74px] no-underline">{formData.name}</h2>
                <button role="button" onClick={deleteProject} className="place-self-start rounded-[24px] bg-[hsla(220,6%,83%,1)] p-[10px_24px]">
                  Delete project
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-3 gap-x-[37px] gap-y-[20px] auto-rows-max w-full h-screen rounded-[24px] bg-background pl-[59px] pt-[55px] pr-[77px] ">
                  <div className="flex flex-col w-[285px]">
                      <label htmlFor="field">Field</label>
                      <div className="border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] p-[20px]">
                    <select 
                    name="field"
                    id="field"
                    onChange={handleChange}
                    className="focus:outline-none w-full text-[18px] font-normal leading-[19.8px] text-left no-underline bg-white cursor-pointer">
                    <option value="">Select a field</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    </select>
                    </div>                  </div>
                  <div className="flex flex-col w-[285px]">
                      <label htmlFor="experience">Experience</label>
                      <input 
                      type="text"
                      name="experience"
                      value={formData.experience} 
                      onChange={handleChange}
                      className=" border-2 border-[hsla(228,6%,84%,1)] rounded-[8px] text-[18px] font-normal leading-[19.8px] text-left no-underline p-[20px]"/>
                  </div>
                  <div className="flex flex-col w-[285px]">
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
                  <div className="col-span-full flex justify-between">
                    <button type="button" className="mt-[15px] rounded-[24px] bg-[hsla(220,6%,83%,1)] p-[10px_24px]">
                    Add vacancy
                    </button>
                    {editMode ? (
                    <button type="submit" className="mt-[15px] rounded-[24px] bg-[hsla(220,6%,83%,1)] p-[10px_24px]">
                    Update project
                    </button>
                    ) : ''}
                  </div>
              </form>
            </>
          ) : (
            <p className="text-gray-500">No projectavailable.</p>
          )}
    </section>
  )
}

export default EditProject
