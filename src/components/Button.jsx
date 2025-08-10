function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getClasses({ variant, size, className }) {
  return classNames(
    'btn',
    variant === 'bubble' ? 'btn--bubble' : 'btn--mint',
    size === 'lg' && 'btn--lg',
    className,
  )
}

export default function Button({
  as,
  href,
  children,
  variant = 'mint',
  size = 'md',
  className,
  type,
  ...rest
}) {
  const isLink = (as === 'a') || (!!href && as !== 'button')
  const Element = isLink ? 'a' : 'button'
  const classes = getClasses({ variant, size, className })

  if (Element === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type || 'button'} className={classes} {...rest}>
      {children}
    </button>
  )
}


