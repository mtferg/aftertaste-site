function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Section({ id, title, subtitle, children, className, headerAlign = 'center' }) {
  return (
    <section id={id} className={classNames('section', className)}>
      <div className="section__inner">
        {(title || subtitle) && (
          <header className={classNames('section__header', headerAlign === 'left' ? 'is-left' : 'is-center')}>
            {title && <h2>{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}


