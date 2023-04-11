export function domainType(domains: string[]): string[] {
  const domainCategories = {
    'com': 'commercial',
    'org': 'organization',
    'net': 'network',
    'info': 'information',
  };

  const domainTypes = [];

  domains.forEach((domain) => {
    const splitDomain = domain.split('.');
    const domainType = splitDomain[splitDomain.length - 1];
    
    if (Object.keys(domainCategories).includes(domainType)) {
      domainTypes.push(domainCategories[domainType]);
    }
  });

  return domainTypes;
}

