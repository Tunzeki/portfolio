import { useState } from "react";

export default function Link({ children, props }) {
    const [underlineLink, setUnderlineLink] = useState(false);

    const handleMouseEnter = () => {
        setUnderlineLink(true);
    }

    const handleMouseLeave = () => {
        setUnderlineLink(false);
    }

    const className = underlineLink ? "pointer-cursor text-size-100 text-underline" : "text-size-100";

    return <a className={className} {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</a>;
}