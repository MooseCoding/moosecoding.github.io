import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-container py-24 text-center">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-ink">Page not found</h1>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-ink underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
