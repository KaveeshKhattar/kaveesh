export default function Blog() {
    return (
        <>
        <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Blog
        </h1>
        <p
          className="animate-in text-muted-foreground"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Stay tuned!
        </p>
      </div>
      </div>
        </>
    );
}