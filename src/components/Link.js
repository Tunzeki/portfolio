import { useState } from "react";

export default function Link({ children, href, target, download }) {
    const [underlineLink, setUnderlineLink] = useState(false);

    const handleMouseEnter = () => {
        setUnderlineLink(true);
    }

    const handleMouseLeave = () => {
        setUnderlineLink(false);
    }

    const className = underlineLink ? "pointer-cursor text-size-100 text-underline" : "text-size-100";

    return <a className={className} href={href} target={target} download={download} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</a>;
}