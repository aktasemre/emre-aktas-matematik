import Link from 'next/link';

interface RelatedLink {
  href: string;
  title: string;
  description: string;
  category?: string;
  categoryColor?: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
}

const RelatedLinks = ({ title, links }: RelatedLinksProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link href={link.href} key={index} className="block bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                {link.category && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${link.categoryColor || 'bg-gray-200 text-gray-800'} mr-2`}>
                    {link.category}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-indigo-700">{link.title}</h3>
              </div>
              <p className="text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
