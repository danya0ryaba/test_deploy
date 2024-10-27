import { Outlet } from "react-router-dom"

type LayoutPropsType = {
    children?: React.ReactNode | React.ReactChild
}

export const Layout: React.FC<LayoutPropsType> = () => {
    return <div>
        <div className="content"><Outlet /></div >
    </div>
}