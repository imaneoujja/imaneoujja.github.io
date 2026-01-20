export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-muted-foreground text-center">
          Designed & Built by Imane Oujja · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
