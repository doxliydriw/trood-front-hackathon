import message_icon from 'shared/assets/images/message_icon.svg';
import bell_icon from 'shared/assets/images/bell_icon.svg';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-[42px] p-[40px]">
      <p className="uppercase text-[24px] font-black leading-[32.81px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]">Trood Community</p>
      <div className="flex items-center">
        <img src={message_icon} alt='message icon' className="mr-6 w-[24px] h-[24px]"/>
        <img src={bell_icon} alt='notification icon' className="mr-[26px] w-[24px] h-[24px]"/>
        <button style={{ borderRadius: '50%' }} className="mr-4 w-[34px] h-[34px] bg-[hsla(165,13%,87%,1)] overflow-hidden"></button>
        <p className="text-[16px] text-[hsla(218,11%,65%,1)] font-normal leading-[21.87px] text-left no-underline">Alex Smith</p>
      </div>
    </div>
  );
};

export default Header;
