export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground antialiased p-6">
      <div className="max-w-md w-full text-center space-y-4 p-8 border border-border bg-card rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Master Template Ready!</h1>
        <p className="text-muted-foreground text-sm">
          React + Vite + Tailwind v4 + shadcn/ui are completely wired up.
        </p>
        <div className="pt-2">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Everything works
          </div>
        </div>
      </div>
    </div>
  )
}
