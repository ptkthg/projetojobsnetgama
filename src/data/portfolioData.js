export const portfolioData = {
  person: {
    fullName: 'Patrick Thiago Rezende dos Santos',
    firstName: 'Patrick Thiago',
    role: 'Segurança da Informação | Blue Team | SOC | Threat Hunting | GRC | IAM',
    city: 'Rio de Janeiro, RJ',
    email: 'ptkamp1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ptkthg/',
    github: 'https://github.com/ptkthg',
    // Expor link direto de WhatsApp em site público é uma decisão consciente.
    whatsappUrl: 'https://wa.me/5521998031285',
    profileImagePath: '/assets/patrickseg.png',
    profileImageAlt: 'Patrick Thiago Rezende dos Santos',
    profileImagePosition: 'center top',
    resumePath: '/assets/patrickcv0426.pdf',
  },
  heroDescription:
    'Profissional de Segurança da Informação com atuação prática em monitoramento de ameaças, resposta a incidentes, gestão de vulnerabilidades, governança de acessos e sustentação de controles de segurança.',
  aboutText: [
    'Profissional de Segurança da Informação com atuação focada em Blue Team, combinando experiência prática em monitoramento de ameaças, resposta a incidentes e gestão de vulnerabilidades com uma base sólida em governança de identidades e acessos.',
    'Minha motivação está em proteger ativos e garantir a resiliência operacional por meio de controles efetivos e processos bem definidos. Valorizo a aplicação de frameworks como NIST CSF e MITRE ATT&CK para orientar a defesa de forma estruturada, sempre alinhado às necessidades do negócio e às exigências de conformidade.',
    'Busco oportunidades onde eu possa contribuir ativamente para a detecção precoce de ameaças e a redução contínua da superfície de ataque, ajudando organizações a operar com segurança em um cenário de riscos cada vez mais complexo.',
  ],
  areas: [
    {
      title: 'Blue Team',
      icon: 'shield',
      description:
        'Monitoramento, investigação e resposta inicial a eventos de segurança, com foco em proteção de ativos e redução da superfície de ataque.',
    },
    {
      title: 'SOC',
      icon: 'radar',
      description:
        'Análise de alertas, correlação de eventos, classificação de incidentes, triagem operacional e redução de falsos positivos.',
    },
    {
      title: 'Threat Hunting',
      icon: 'target',
      description:
        'Criação de hipóteses de caça, análise de comportamento suspeito, investigação baseada em IOC, IOA e padrões anômalos.',
    },
    {
      title: 'Gestão de Vulnerabilidades',
      icon: 'bug',
      description:
        'Identificação, priorização e acompanhamento de correções de falhas em ativos corporativos, incluindo patch management e melhoria contínua.',
    },
    {
      title: 'IAM e Governança de Acessos',
      icon: 'key',
      description:
        'Revisão de permissões, trilhas de auditoria, princípio do menor privilégio, Active Directory e Microsoft Entra ID.',
    },
    {
      title: 'Hardening e Controles',
      icon: 'server',
      description:
        'Sustentação de controles de segurança, inventário, backup, políticas, GPO e fortalecimento da postura defensiva.',
    },
  ],
  techStack: {
    'Microsoft Security': [
      'Microsoft Defender',
      'Microsoft Defender XDR',
      'Microsoft Defender for Endpoint',
      'Microsoft Entra ID',
      'Microsoft Intune',
      'Microsoft Purview',
    ],
    'SOC e Detecção': [
      'SIEM',
      'KQL',
      'Windows Event Logs',
      'IOC',
      'IOA',
      'Análise de alertas de endpoint',
      'Análise de alertas de e-mail',
      'Análise de alertas em aplicações web',
    ],
    'Governança e Hardening': [
      'Active Directory',
      'Governança de acessos',
      'Menor privilégio',
      'Patch management',
      'Gestão de vulnerabilidades',
      'Backup',
      'Inventário de ativos',
      'GPO',
      'Trilhas de auditoria',
    ],
    Ferramentas: ['Harmony Email', 'Imperva WAF', 'Lansweeper', 'Patch Manager Plus', 'PowerShell'],
    Frameworks: ['MITRE ATT&CK', 'NIST CSF', 'CIS Controls', 'OWASP Top 10'],
    Cloud: ['Fundamentos de Azure Security'],
  },
  experiences: [
    {
      company: 'Oceânica',
      role: 'Assistente de Segurança da Informação Pleno',
      period: 'out/2025 – atual',
      activities: [
        'Monitoramento e investigação de alertas em endpoint, e-mail, identidade e aplicações.',
        'Gestão de vulnerabilidades e aplicação de patches para correção de falhas.',
        'Governança de acessos com revisão de permissões e trilhas de auditoria.',
        'Sustentação de controles de backup, inventário de ativos e hardening.',
        'Criação de regras personalizadas em plataformas de defesa XDR.',
      ],
    },
    {
      company: 'Vortex Security',
      role: 'Analista de SOC N1',
      period: 'jul/2025 – set/2025',
      activities: [
        'Monitoramento contínuo via SIEM.',
        'Correlação de eventos e classificação de incidentes.',
        'Análise de logs, IOC e IOA para apoio a investigações.',
        'Ajuste de regras para redução de falsos positivos e melhoria da eficiência operacional.',
      ],
    },
    {
      company: 'Rio Quality',
      role: 'Analista de Segurança Jr',
      period: 'jan/2024 – jun/2025',
      activities: [
        'Administração de identidades e acessos no Active Directory.',
        'Suporte a VPN, proxy, antivírus e ambiente Windows.',
        'Apoio a políticas de segurança e manutenção de ativos críticos.',
        'Aplicação do princípio do menor privilégio em revisões de acesso.',
      ],
    },
  ],
  education: {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Estácio de Sá, UNESA',
    status: 'Cursando',
  },
  // Para adicionar novo projeto, copie um objeto abaixo e altere title, description, skills e scenarios.
  projects: [
    {
      title: 'Microsoft Defender XDR Hunting Pack',
      isMain: true,
      description:
        'Coleção de consultas e cenários de threat hunting voltados para identificação de comportamentos suspeitos em endpoint, identidade e e-mail.',
      skills: ['KQL', 'Microsoft Defender XDR', 'Threat Hunting', 'MITRE ATT&CK', 'Análise de comportamento', 'Resposta a incidentes'],
      scenarios: ['Password spray', 'Sucesso após múltiplas falhas de login', 'PowerShell suspeito', 'Outlook criando processos anômalos', 'LOLBins', 'Transferência incomum de arquivos'],
    },
    {
      title: 'Priorização de Hardening com Secure Score',
      description:
        'Modelo de priorização de recomendações de segurança com base em severidade, impacto, esforço de implementação, ativos afetados e evidências necessárias.',
      skills: ['Microsoft Defender', 'Secure Score', 'Hardening', 'Gestão de risco', 'Controles de segurança', 'Relatórios executivos'],
      scenarios: ['LSA Protection', 'Network Protection', 'AutoRun/AutoPlay', 'NLA em RDP', 'LDAP Signing', 'ASR Rules'],
    },
    {
      title: 'Correlação entre WAF, ASM e Risco Web',
      description:
        'Análise de exposição externa combinando achados de Attack Surface Management com eventos de WAF e riscos de segurança em aplicações web.',
      skills: ['WAF', 'ASM', 'OWASP Top 10', 'Segurança web', 'Análise de risco', 'Recomendação técnica'],
      scenarios: ['Ausência de HSTS', 'Ausência de CSP', 'HTTP sem redirecionamento para HTTPS', 'Ausência de X-Frame-Options', 'Ausência de X-Content-Type-Options', 'Tentativas de SQL Injection e XSS'],
    },
    {
      title: 'Relatório Pós-Incidente de Endpoint',
      description:
        'Modelo de relatório pós-incidente com linha do tempo, evidências técnicas, hipótese de ataque, impacto, contenção, erradicação e lições aprendidas.',
      skills: ['Resposta a incidentes', 'Análise de logs', 'Processo pai-filho', 'Coleta de evidências', 'Comunicação executiva', 'Documentação técnica'],
      scenarios: ['Alerta de endpoint', 'Execução suspeita', 'Análise de cadeia de processos', 'Contenção', 'Recomendações pós-incidente'],
    },
    {
      title: 'Modelo de Governança de Acessos',
      description:
        'Modelo de revisão de acessos com foco em menor privilégio, contas inativas, permissões excessivas, trilhas de auditoria e conformidade.',
      skills: ['IAM', 'Active Directory', 'Entra ID', 'Governança de acessos', 'Menor privilégio', 'Auditoria'],
      scenarios: ['Usuários inativos', 'Contas órfãs', 'Acessos privilegiados', 'Permissões excessivas', 'Revisão periódica', 'Evidência de aprovação'],
    },
  ],
  caseStudy: {
    title: 'Estudo de Caso',
    subtitle: 'Resposta a incidente com Microsoft Defender',
    context: 'Monitoramento de alerta em endpoint do setor financeiro com Microsoft Defender.',
    detection: 'Execução suspeita de PowerShell com comportamento associado a reconhecimento de ambiente.',
    response:
      'Isolamento do dispositivo, investigação em SIEM, validação em Active Directory e cruzamento com telemetria do endpoint.',
    rootCause:
      'E-mail de phishing que passou pelo filtro inicial, mas teve a execução bloqueada pelo Defender.',
    correction:
      'Revisão de privilégios locais, aplicação do princípio do menor privilégio e sugestão de ajuste via GPO para política de execução de scripts.',
    result: 'Incidente contido, causa raiz tratada e melhoria aplicada no controle preventivo.',
    lessonsLearned:
      'Detecção sem resposta rápida é incompleta. Blue Team eficiente precisa correlacionar sinais, conter o impacto e corrigir a causa raiz.',
    tags: [
      'Microsoft Defender',
      'SIEM',
      'Active Directory',
      'PowerShell',
      'Harmony Email',
      'GPO',
      'Menor Privilégio',
      'Resposta a Incidentes',
      'Blue Team',
    ],
  },
  methodology: ['Coleta de evidências', 'Análise técnica', 'Classificação de risco', 'Priorização', 'Recomendação', 'Documentação', 'Acompanhamento'],
  methodologyText:
    'Minha abordagem combina investigação técnica, visão de risco e comunicação objetiva. O objetivo não é apenas identificar alertas ou vulnerabilidades, mas transformar achados em decisões práticas de segurança.',
  differentials: [
    {
      title: 'Visão técnica',
      description:
        'Experiência prática com análise de alertas, logs, endpoints, identidade, e-mail, SIEM e ferramentas Microsoft Security.',
    },
    {
      title: 'Visão de risco',
      description:
        'Capacidade de priorizar vulnerabilidades, controles e recomendações com base em impacto, criticidade e esforço.',
    },
    {
      title: 'Visão de governança',
      description:
        'Experiência com revisão de acessos, menor privilégio, trilhas de auditoria e sustentação de controles.',
    },
    {
      title: 'Visão executiva',
      description:
        'Capacidade de transformar achados técnicos em relatórios claros para gestão e áreas responsáveis.',
    },
  ],
  indicators: [
    'Monitoramento de alertas em endpoint, e-mail, identidade e aplicações.',
    'Correlação de eventos em SIEM.',
    'Gestão de vulnerabilidades e patch management.',
    'Revisão de acessos e trilhas de auditoria.',
    'Sustentação de controles de backup, inventário e hardening.',
    'Ajuste de regras para redução de falsos positivos.',
  ],
  disclaimer:
    'Todos os projetos e estudos de caso apresentados neste portfólio utilizam dados públicos, fictícios, simulados, resumidos ou anonimizados. Nenhuma informação sensível, corporativa ou de terceiros é exposta.',
};

export const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Áreas', id: 'areas' },
  { label: 'Stack', id: 'stack' },
  { label: 'Experiência', id: 'experiencia' },
  { label: 'Estudo de Caso', id: 'estudo-caso' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' },
];
