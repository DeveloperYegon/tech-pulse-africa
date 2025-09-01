import { Article, Category } from '../types/article';

export const categories: Category[] = [
  { id: '1', name: 'AI', slug: 'ai', icon: '🤖', color: 'primary' },
  { id: '2', name: 'Fintech', slug: 'fintech', icon: '💳', color: 'secondary' },
  { id: '3', name: 'Renewable Energy', slug: 'renewable-energy', icon: '🌱', color: 'accent' },
  { id: '4', name: '5G', slug: '5g', icon: '📡', color: 'primary' },
  { id: '5', name: 'Biotech', slug: 'biotech', icon: '🧬', color: 'secondary' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'AI Revolution Transforms African Healthcare: How Machine Learning is Saving Lives',
    slug: 'ai-revolution-african-healthcare',
    excerpt: 'From Lagos to Nairobi, AI-powered diagnostic tools are revolutionizing healthcare delivery across Africa, making quality medical care accessible to millions.',
    content: 'The healthcare landscape across Africa is experiencing an unprecedented transformation...',
    author: 'Dr. Amina Kone',
    publishDate: '2024-01-15',
    category: 'AI',
    imageUrl: '/placeholder.svg',
    featured: true,
    readTime: 8,
    tags: ['AI', 'Healthcare', 'Africa', 'Innovation']
  },
  {
    id: '2',
    title: "Nigeria's Fintech Boom: Digital Banking Reaches Rural Communities",
    slug: 'nigeria-fintech-boom-rural-banking',
    excerpt: 'Mobile banking solutions are bridging the financial inclusion gap, bringing banking services to previously underserved rural populations.',
    content: "Nigeria's fintech sector continues to lead Africa in innovation...",
    author: 'Samuel Okafor',
    publishDate: '2024-01-14',
    category: 'Fintech',
    imageUrl: '/placeholder.svg',
    featured: true,
    readTime: 6,
    tags: ['Fintech', 'Banking', 'Nigeria', 'Rural Development']
  },
  {
    id: '3',
    title: 'Solar Power Grid: Kenya Leads Africa in Renewable Energy Innovation',
    slug: 'kenya-solar-power-grid-innovation',
    excerpt: "Kenya's ambitious solar microgrid project is setting the standard for renewable energy infrastructure across the continent.",
    content: 'Kenya has emerged as a pioneer in renewable energy solutions...',
    author: 'Grace Wanjiku',
    publishDate: '2024-01-13',
    category: 'Renewable Energy',
    imageUrl: '/placeholder.svg',
    featured: false,
    readTime: 7,
    tags: ['Solar', 'Kenya', 'Clean Energy', 'Infrastructure']
  },
  {
    id: '4',
    title: '5G Network Expansion: South Africa Prepares for the Connected Future',
    slug: '5g-network-expansion-south-africa',
    excerpt: 'Major telecommunications providers are racing to deploy 5G infrastructure across South African cities, promising unprecedented connectivity.',
    content: 'The rollout of 5G technology in South Africa marks a significant milestone...',
    author: 'Thabo Mthembu',
    publishDate: '2024-01-12',
    category: '5G',
    imageUrl: '/placeholder.svg',
    featured: false,
    readTime: 5,
    tags: ['5G', 'Telecommunications', 'South Africa', 'Connectivity']
  },
  {
    id: '5',
    title: 'Gene Therapy Breakthrough: African Scientists Lead Global Research',
    slug: 'gene-therapy-breakthrough-african-scientists',
    excerpt: 'Researchers from Cape Town and Accra are at the forefront of revolutionary gene therapy treatments for genetic disorders.',
    content: 'African biotech researchers have achieved a major breakthrough...',
    author: 'Dr. Kwame Asante',
    publishDate: '2024-01-11',
    category: 'Biotech',
    imageUrl: '/placeholder.svg',
    featured: false,
    readTime: 9,
    tags: ['Biotech', 'Gene Therapy', 'Research', 'Medical Innovation']
  },
  {
    id: '6',
    title: 'Blockchain Agriculture: Smart Farming Revolution Across West Africa',
    slug: 'blockchain-agriculture-smart-farming',
    excerpt: 'Blockchain technology is transforming agricultural supply chains, giving farmers direct access to global markets.',
    content: 'West African farmers are embracing blockchain technology...',
    author: 'Fatima Diallo',
    publishDate: '2024-01-10',
    category: 'AI',
    imageUrl: '/placeholder.svg',
    featured: false,
    readTime: 6,
    tags: ['Blockchain', 'Agriculture', 'West Africa', 'Smart Farming']
  }
];