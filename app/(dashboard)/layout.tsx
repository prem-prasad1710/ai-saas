const DashboardLayout = ({children}:
    {children:React.ReactNode;
    }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed inset-y-0 z-[80] bg-gray-900">
        <div>
            Hello Sidebar
            this is me sidebar
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
