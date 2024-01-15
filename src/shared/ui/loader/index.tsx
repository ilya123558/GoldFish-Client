export const Loader: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={"flex items-center justify-center w-full h-full " + className}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-opacity-75"></div>
    </div>
  )
}