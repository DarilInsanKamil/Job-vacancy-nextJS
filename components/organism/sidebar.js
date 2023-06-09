import { SideBarOptionGroup } from "../moleculs"

const region = [
    {
        id: 1, label: 'jakarta'
    },
    {
        id: 2, label: 'bandung'
    },
    {
        id: 3, label: 'surabaya'
    },
]
const tenure = [
    {
        id: 1, label: 'fulltime'
    },
    {
        id: 2, label: 'contract'
    },
    {
        id: 3, label: 'Harian'
    },
    {
        id: 4, label: 'Magang'
    },
    {
        id: 5, label: 'paruh waktu'
    },
]

export const SideBar = () => {
    return (
        <>
        <SideBarOptionGroup titlecheckbox="region" options={region} />
        <SideBarOptionGroup titlecheckbox="tipe peerjaan" options={tenure} />
        </>
    )
}