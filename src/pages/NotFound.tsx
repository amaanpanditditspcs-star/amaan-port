import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found | Amaan Javaid" description="" />
      <div className="container" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
        <div className="max-w-md">
          <p className="label mb-4" style={{ color: 'var(--color-silver)' }}>404</p>
          <h1 className="section-heading mb-4">Page not found.</h1>
          <p className="mb-8" style={{ color: 'var(--color-muted)' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--color-accent)' }}
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
