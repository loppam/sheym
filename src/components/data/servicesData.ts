export const servicesData = {
    'social-media': {
      title: 'Social Media Management',
      description: 'Complete social media strategy, content planning, and community engagement across all platforms.',
      packages: [
        {
          name: 'Easy Does It',
          price: '₦150,000',
          duration: 'Monthly',
          features: [
            '3 posts per week',
            'Basic content calendar',
            'Community management',
            'Monthly analytics report',
            'Instagram & Facebook'
          ],
          popular: false
        },
        {
          name: 'Socially Killin\' It',
          price: '₦350,000',
          duration: 'Monthly',
          features: [
            'Daily posting',
            'Advanced content calendar',
            'Story management',
            'Comprehensive analytics',
            'All major platforms',
            'Hashtag strategy',
            'Competitor analysis'
          ],
          popular: true
        },
        {
          name: 'Social Domination',
          price: '₦500,000',
          duration: 'Monthly',
          features: [
            'Multiple posts daily',
            'Premium content creation',
            'Influencer outreach',
            'Advanced targeting',
            'Personal account manager',
            'Weekly strategy calls',
            'Crisis management'
          ],
          popular: false
        }
      ]
    },
    'content-creation': {
      title: 'Content Creation & Strategy',
      description: 'Professional photos, videos, and graphics that tell your brand story and engage your audience.',
      packages: [
        {
          name: 'Content Boss',
          price: '₦250,000',
          duration: 'Monthly',
          features: [
            '20 custom graphics',
            '5 professional photos',
            '2 short videos',
            'Content calendar',
            'Brand guidelines'
          ],
          popular: false
        },
        {
          name: 'Content Upgrade',
          price: '₦650,000',
          duration: 'Monthly',
          features: [
            '40 custom graphics',
            '15 professional photos',
            '8 videos (up to 60s)',
            'Photo shoot session',
            'Advanced editing',
            'Motion graphics',
            'Content strategy'
          ],
          popular: true
        },
        {
          name: 'Content Premium',
          price: '₦1,200,000',
          duration: 'Monthly',
          features: [
            'Unlimited graphics',
            'Weekly photo shoots',
            '20+ videos',
            'Professional equipment',
            'Studio access',
            '4K video production',
            'Dedicated team'
          ],
          popular: false
        }
      ]
    },
    'paid-advertising': {
      title: 'Paid Advertising & Lead Generation',
      description: 'Strategic ad campaigns on Meta, TikTok, and Google that convert followers into customers.',
      packages: [
        {
          name: 'Ad Starter',
          price: '₦100,000',
          duration: 'Monthly (+ Ad Spend)',
          features: [
            'Campaign setup',
            'Audience research',
            'Ad creative (3 variants)',
            'Basic optimization',
            'Monthly reporting'
          ],
          popular: false
        },
        {
          name: 'Ad Pro',
          price: '₦200,000',
          duration: 'Monthly (+ Ad Spend)',
          features: [
            'Multi-platform campaigns',
            'Advanced targeting',
            'A/B testing',
            'Conversion tracking',
            'Bi-weekly optimization',
            'Detailed analytics'
          ],
          popular: true
        },
        {
          name: 'Ad Mastery',
          price: '₦350,000',
          duration: 'Monthly (+ Ad Spend)',
          features: [
            'Full funnel campaigns',
            'Custom audiences',
            'Retargeting sequences',
            'Landing page optimization',
            'Weekly calls',
            'Dedicated ad manager'
          ],
          popular: false
        }
      ],
      addOns: [
        { name: 'AD Account Setup', price: '₦30,000' },
        { name: 'Landing Page Creation', price: '₦150,000' },
        { name: 'Conversion Tracking Setup', price: '₦50,000' }
      ]
    },
    'account-recovery': {
      title: 'Crisis Management & Account Recovery',
      description: 'Get your hacked, disabled, or suspended social media accounts back with our proven methods.',
      packages: [
        {
          name: 'Instagram Recovery (0-10k followers)',
          price: '₦150,000',
          duration: 'One-time',
          features: [
            'Account analysis',
            'Recovery strategy',
            'Direct contact with Meta',
            'Progress updates',
            '5 days - 5 months timeline'
          ],
          popular: true
        },
        {
          name: 'Instagram Recovery (10k-100k followers)',
          price: '₦250,000',
          duration: 'One-time',
          features: [
            'Priority handling',
            'Advanced recovery methods',
            'Expedited process',
            'Weekly updates',
            'Success guarantee*'
          ],
          popular: false
        },
        {
          name: 'Facebook + Instagram Recovery',
          price: '₦350,000',
          duration: 'One-time',
          features: [
            'Both platforms',
            'Comprehensive approach',
            'Business verification',
            'Asset protection',
            'Prevention strategies'
          ],
          popular: false
        }
      ],
      policies: [
        'No refunds if Meta case is already open',
        'Timeline: 5 days to 5 months (patience required)',
        'Not affiliated with Meta/Instagram',
        '10% refund if recovery fails after 6 months',
        'No refunds for delays or impatience'
      ]
    },
    'brand-development': {
      title: 'Brand Development',
      description: 'Build a cohesive brand identity that resonates with your target audience and stands out.',
      packages: [
        {
          name: 'Brand Foundation',
          price: '₦300,000',
          duration: 'One-time',
          features: [
            'Brand audit',
            'Competitor analysis',
            'Brand positioning',
            'Core messaging',
            'Style guide'
          ],
          popular: false
        },
        {
          name: 'Complete Brand Identity',
          price: '₦500,000',
          duration: 'One-time',
          features: [
            'Logo design',
            'Color palette',
            'Typography system',
            'Brand guidelines',
            'Marketing materials',
            'Social media templates'
          ],
          popular: true
        },
        {
          name: 'Brand Transformation',
          price: '₦800,000',
          duration: 'One-time',
          features: [
            'Complete rebrand',
            'Market research',
            'Brand strategy',
            'Full visual identity',
            'Website design',
            'Launch campaign'
          ],
          popular: false
        }
      ]
    },
    'influencer-marketing': {
      title: 'Influencer Marketing',
      description: 'Connect with the right influencers to amplify your brand message and reach new audiences.',
      packages: [
        {
          name: 'Micro Influencer Campaign',
          price: 'From ₦200,000',
          duration: 'Per Campaign',
          features: [
            '5-10 micro influencers',
            'Campaign strategy',
            'Content guidelines',
            'Performance tracking',
            'Basic reporting'
          ],
          popular: false
        },
        {
          name: 'Multi-Tier Campaign',
          price: 'From ₦500,000',
          duration: 'Per Campaign',
          features: [
            'Micro + macro influencers',
            'Advanced targeting',
            'Content creation support',
            'Cross-platform execution',
            'Detailed analytics'
          ],
          popular: true
        },
        {
          name: 'Celebrity Partnership',
          price: 'Custom Pricing',
          duration: 'Per Campaign',
          features: [
            'High-tier influencers',
            'Long-term partnerships',
            'Exclusive content',
            'PR integration',
            'Maximum reach'
          ],
          popular: false
        }
      ]
    }
  };
  
  export const specialtyPackages = [
    {
      category: 'Fashion & Beauty',
      packages: [
        { name: 'Personal Package 1', price: '₦200,000', features: ['Wardrobe consultation', 'Photo shoot', 'Content creation'] },
        { name: 'Beauty Brand Boost', price: '₦400,000', features: ['Product photography', 'Influencer partnerships', 'Social campaigns'] }
      ]
    },
    {
      category: 'Hospitality & Events',
      packages: [
        { name: 'Event Promotion', price: '₦300,000', features: ['Event marketing', 'Ticket sales strategy', 'Social buzz creation'] },
        { name: 'Restaurant Marketing', price: '₦250,000', features: ['Food photography', 'Review management', 'Local SEO'] }
      ]
    }
  ];
  
  export const addOns = [
    { name: 'Extra Video Edit', price: '₦35,000' },
    { name: 'Rush Delivery', price: '₦50,000' },
    { name: 'Additional Platform', price: '₦75,000' },
    { name: 'Competitor Analysis', price: '₦100,000' }
  ];