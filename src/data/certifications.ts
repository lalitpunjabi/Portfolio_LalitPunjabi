export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  category: 'DevOps & Linux' | 'Cloud & Enterprise' | 'AI & GenAI';
  featured?: boolean;
}

export const certificationsData: Certification[] = [
  {
    id: 'rhcsa',
    name: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    date: '2026',
    credentialUrl:
      'https://www.credly.com/badges/7a1baa8a-8a65-4342-8c38-6d4eff067d52/public_url',
    description:
      'Validated Linux system administration skills across Red Hat Enterprise Linux, including storage, LVM, user administration, permissions, networking, and system services.',
    category: 'DevOps & Linux',
    featured: true
  },
  {
    id: 'docker-beginner',
    name: 'Docker for the Absolute Beginner',
    issuer: 'KodeKloud / FreeCodeCamp',
    date: '2026',
    credentialUrl:
      'https://learn.kodekloud.com/user/certificate/be911ecc-3b52-4621-890c-af8ea684d2a9',
    description:
      'Hands-on foundation in Docker containerization, images, containers, networking, Dockerfiles, and container management.',
    category: 'DevOps & Linux',
    featured: true
  },
  {
    id: 'salesforce-architect',
    name: 'Salesforce Programming Architect',
    issuer: 'TechForce Academy, Australia',
    date: '2025',
    credentialUrl:
      'https://www.linkedin.com/posts/lalit-punjabi-443911312_thrilled-to-share-that-ive-successfully-activity-7373400354555793408-YooC',
    description:
      'Covered Salesforce platform architecture, CRM concepts, cloud data modeling, application development, and enterprise platform fundamentals.',
    category: 'Cloud & Enterprise'
  },
  {
    id: 'oracle-fusion-erp',
    name: 'Oracle Fusion Cloud Applications ERP Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    credentialUrl:
      'https://www.linkedin.com/posts/lalit-punjabi-443911312_oraclecloud-erp-certification-activity-7310174042748051456-RnuW',
    description:
      'Foundational knowledge of Oracle Fusion Cloud Applications, ERP capabilities, cloud concepts, and enterprise business processes.',
    category: 'Cloud & Enterprise'
  },
  {
    id: 'google-vertex-prompt',
    name: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google Cloud',
    date: '2025',
    credentialUrl:
      'https://www.cloudskillsboost.google/public_profiles/84461837-00c2-4e94-a738-5a096c760880/badges/14288873',
    description:
      'Practical experience with prompt design and generative AI workflows using Vertex AI.',
    category: 'AI & GenAI'
  },
  {
    id: 'google-gemini-rag',
    name: 'Inspect Rich Documents with Gemini Multimodality & RAG',
    issuer: 'Google Cloud / Credly',
    date: '2025',
    credentialUrl:
      'https://www.credly.com/badges/519ab086-83fb-40bf-8027-0b722a33840c/linked_in?t=szrhow',
    description:
      'Explored multimodal generative AI and Retrieval-Augmented Generation workflows for processing and understanding rich documents.',
    category: 'AI & GenAI'
  },
  {
    id: 'google-gemini-streamlit',
    name: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google Cloud / Credly',
    date: '2025',
    credentialUrl:
      'https://www.credly.com/badges/03b16f93-1f35-4b90-9f4c-6c8f349568ee/linked_in?t=szqx9a',
    description:
      'Built generative AI application workflows using Gemini and Streamlit.',
    category: 'AI & GenAI'
  }
];
