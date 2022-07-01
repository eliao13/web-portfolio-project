import * as Icons from "react-icons/si";

const IconName = ({ name }) => {
    const  SiIcon = Icons[name];
    if (!SiIcon) return <p>Icon not found!</p>;

    return <SiIcon />;
}

function Skills({detail}) {
  return ( 
    detail.skills.length > 0 && ( 
        detail.skills.map((skill, i) => {
            return (
                <li key={i}>
                    <IconName name={ `Si${skill.charAt(0).toUpperCase() + skill.slice(1).toLowerCase()}`} />
                </li>
            )
        })
    )
  )
}
export default Skills