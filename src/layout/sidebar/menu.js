import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers } from 'react-feather'
export const MENUITEMS = [
    { path: `${process.env.PUBLIC_URL}/home`, title: 'Home', icon: Home, type: 'link', active: false },
    { path: `${process.env.PUBLIC_URL}/todo`, title: 'Todo', icon: Users, type: 'link', active: false },
]