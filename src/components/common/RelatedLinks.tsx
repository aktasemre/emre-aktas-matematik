import Link from 'next/link'

interface RelatedLink {
  href: string
  title: string
  description: string
  category?: string
  categoryColor?: string
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
}

export default function RelatedLinks({ 
  title = "İlgili Sayfalar", 
  links 
}: RelatedLinksProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {link.category && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs mb-3 ${link.categoryColor || 'bg-gray-100 text-gray-700'}`}>
                  {link.category}
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-indigo-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {link.description}
              </p>
              <span className="inline-block mt-4 text-indigo-600 font-medium text-sm">
                Devamını Oku →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
