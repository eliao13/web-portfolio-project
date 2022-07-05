import * as Icons from "react-icons/si";

const IconName = ({ name }) => {
    const SiIcon = Icons[name];
    if (!SiIcon) return <p>Icon not found!</p>;

    return <SiIcon />;
}

function Tools({ singleProjectDetail }) {
    return (
        singleProjectDetail.tools.length > 0 && (
            singleProjectDetail.tools.map((skill, i) => {
                return (
                    <li key={i}>
                        <IconName name={`Si${skill.charAt(0).toUpperCase() + skill.slice(1).toLowerCase()}`} />
                    </li>
                )
            })
        )
    )
}
export default Tools