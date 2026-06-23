// components/shared/PageTitle.tsx
import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  const fullTitle = `${title} `;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
