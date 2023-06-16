import Cookies from "js-cookie"

export const ProfilePanel = ({name, image}) => {
    return(
        <>
        <img src={image} width={'200px'} height={'200px'} style={{objectFit:'cover'}}/>
        <p>{name}</p>
        </>
    )
}