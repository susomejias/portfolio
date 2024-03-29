import React from 'react'
import Link from 'next/link'

interface ButtonBadgeGradientProps {
  text: string
  url: string
  isTargetBlank: boolean
}

const ButtonBadgeGradient = ({
  text,
  url,
  isTargetBlank
}: ButtonBadgeGradientProps) => {
  const renderLink = () => {
    return (
      <Link href={url} passHref>
        <a target={`${isTargetBlank && '_blank'}`}>{text}</a>
      </Link>
    )
  }

  return (
    <button className="button-badge-gradient">
      {url && url !== '#' ? renderLink() : <p>{text}</p>}
    </button>
  )
}

export default React.memo(ButtonBadgeGradient)
