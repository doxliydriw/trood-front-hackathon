import {axiosClient} from 'shared/api/index'
import { useEffect, useState } from 'react';

import { Card } from 'entities/card'
import type { Project } from 'shared/types/project'

const Projects = () => {
  const [validprojects, setValidprojects] = useState<Project[]>([]);
  const [expiredprojects, setExpiredprojects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetching list of available projects from server
    const getProjectsList = async () => {
      try {
        const response = await axiosClient.get<Project[]>('/projects');
        if (response.data) {
          // Sorting available projetcs into two list: valid projects and expired projects
          const projects = response.data
          localStorage.setItem( "projectList: ", JSON.stringify(projects) );
          const currentDate = new Date();
          const expiredProjects: Project[] = [];
          const validProjects: Project[] = [];
          projects.forEach(project => {
            const [day, month, year] = project.deadline.split(".").map(Number);
            const deadlineDate = new Date(year, month - 1, day);
              if (deadlineDate < currentDate) {
                expiredProjects.push(project);
              } else {
                validProjects.push(project);
              }
          });
          expiredProjects.sort((a, b) => a.id - b.id);
          validProjects.sort((a, b) => a.id - b.id);
          setValidprojects(validProjects);
          setExpiredprojects(expiredProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    getProjectsList();
  }, []);


  return (
    <section className="flex flex-col pl-[66px] pr-[60px] pt-[56px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(508px,1fr))] gap-[24px]">
        <div className="col-span-full flex justify-between">
          <h2 className="text-left text-[32px] font-medium leading-[43.74px] no-underline">
            Active projects
          </h2>
          <a className="rounded-[24px] bg-[hsla(220,6%,83%,1)] p-[10px_24px]" href='/creating_project'>
            Create project
          </a>
        </div>
          {loading ? (
            <p className="text-gray-500">Loading valid projects...</p>
          ) : validprojects.length > 0 ? (
            validprojects.map((project) => (
              <Card key={project.id} project={project} />
            ))
          ) : (
            <p className="text-gray-500">No active projects available.</p>
          )}
      </div>
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(508px,1fr))] gap-[24px]">
        <h2 className="col-span-full text-left text-[32px] font-medium leading-[43.74px] no-underline">Passed projects</h2>
        {loading ? (
          <p className="text-gray-500">Loading expired projects...</p>
        ) : expiredprojects.length > 0 ? (
          expiredprojects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        ) : (
          <p className="text-gray-500">No expired projects available.</p>
        )}
      </div>
    </section>
  )
}

export default Projects