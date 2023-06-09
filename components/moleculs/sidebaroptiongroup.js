import { CheckBox } from "../atoms"

export const SideBarOptionGroup = ({ titlecheckbox, options }) => {
    return (
        <>
            <h4>{titlecheckbox}</h4>
            {options.map((option) => (
                <CheckBox key={option.id} label={option.label} checked={option.checked} />
            ))}
        </>
    )
}