import { useEffect, useRef, useState } from "react"

interface IProps {
  className?: string,
  max: number,
  setValue?: (key: 'from' | 'to', value: number) => void,
  from?: number,
  to?: number,
}

export const RangeSlider: React.FC<IProps> = ({ className, max, setValue, from, to }) => {
  const divElement = useRef<HTMLDivElement>(null)

  const [state, setState] = useState({
    from: 0,
    to: 10,
    maxWidth: 0,
    toggle: false,
    startPoint: 0,
    activeKey: 'from' as 'from' | 'to'
  })

  useEffect(() => {
    if (divElement.current) {
      const maxWidth = divElement.current.offsetWidth
      const startPoint = divElement.current?.getBoundingClientRect().x - 1 || 0

      setState(prev => ({
        ...prev,
        maxWidth,
        startPoint
      }))
    }
  }, [])

  useEffect(() => {
    setState(prev => ({
      ...prev,
      from: from || 0,
      to: to || 10
    }))
  }, [from, to])


  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!state.toggle) return
    const position = event.clientX - state.startPoint

    setState(prev => ({
      ...prev,
      [prev.activeKey]: prev.activeKey && prev.activeKey === 'from' && (position / prev.maxWidth * 100) > prev.to
        ? prev.to
        : prev.activeKey === 'to' && (position / prev.maxWidth * 100) < prev.from
          ? prev.from
          : position > prev.maxWidth
            ? 100
            : position < 0
              ? 0
              : position / prev.maxWidth * 100
    }))

    setValue && setValue(state.activeKey, Math.round((state[state.activeKey as 'to' | 'from']) / 100 * max))
  }


  const handleMouseUp = () => {
    setState(prev => ({ ...prev, toggle: false }))
  }

  const handleMouseDown = (
    element: 'from' | 'to'
  ) => {
    setState(prev => ({ ...prev, toggle: true, activeKey: element }))

    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div onMouseMove={handleMouseMove} ref={divElement}>
      <div
        className={"relative w-[200px] " + className}
      >
        <div
          onMouseDown={() => handleMouseDown('from')}
          style={{ left: `${from}%` }}
          className={`cursor-pointer absolute w-[9px] h-[9px] rounded-[9px] bg-primary z-10`}
        ></div>
        <div
          onMouseDown={() => handleMouseDown('to')}
          style={{ left: `${to}%` }}
          className={`cursor-pointer absolute w-[9px] h-[9px] rounded-[9px] bg-primary z-10`}
        ></div>
        <div
          style={{
            left: `${Number(from) + 0.5}%`,
            width: `${Number(to) - Number(from)}%`,
          }}
          className={`absolute h-[3px] bg-primary top-[46%]`}
        ></div>

      </div>
    </div>
  )
}