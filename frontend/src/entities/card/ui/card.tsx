import { useNavigate } from 'react-router-dom';
import message_icon from 'shared/assets/images/message_icon.svg';
import bell_icon from 'shared/assets/images/bell_icon.svg';
import avatar_icon from 'shared/assets/images/avatar_icon.svg'
import type { Project } from 'shared/types/project'

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const navigate = useNavigate();

const goToEdit = () => {
  navigate(`/edit_project/${project.id}`);
}

  return (
    <div onClick={goToEdit} className="p-8 flex flex-col bg-background rounded-[24px] w-[508px] ">
      <h3 className="pb-[31px] text-[24px] font-medium leading-[26.4px] text-left no-underline"
      >{project.name}</h3>
      <p className="text-[16px] font-normal leading-[17.6px] text-left no-underline"
      >{project.description}</p>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-row items-center text-[hsla(0,0%,61%,1)]">
        <img src={avatar_icon} alt='avatar icon' className="mr-6 w-[20px] h-[20px]"/>
        <p className="text-[14px] font-normal leading-[15.4px] text-left no-underline">Author</p>
        </div>
        <div className="flex flex-row">
          <img src={message_icon} alt='message icon' className="mr-6 w-[24px] h-[24px]"/>
          <img src={bell_icon} alt='notification icon' className="mr-[26px] w-[24px] h-[24px]"/>
        </div>
      </div>
    </div>
  )
}

export default Card