import searchSvg from '@/app/assets/images/header/Search.svg'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Search = () => {

  const [ifFocus, setIsFocus] = useState(false)
  const inputeRef = useRef<HTMLInputElement>(null)
  const svgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (ifFocus) {
      inputeRef.current?.focus()
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ifFocus])

  const handleClick = (event: MouseEvent) => {
    if (inputeRef.current && inputeRef.current === event.target) {
      setIsFocus(true)
      return
    }
    if (svgRef.current && svgRef.current === event.target) {
      setIsFocus(true)
      return
    }

    setIsFocus(false)
  }

  return (
    <div className='relative'>
      <input
        ref={inputeRef}
        placeholder={'найти игру'}
        className=" w-[475px] text-[12px] h-[38px] bg-white rounded-[9px] border border-[rgba(242, 242, 242, 1)] px-[10px] font-normal focus:outline-none"
      />
      {!ifFocus && <Image ref={svgRef} src={searchSvg} width={19} height={19} alt='search' className='absolute right-[10px] top-[10px] cursor-text'/>}
    </div>
  );
};

export default Search;