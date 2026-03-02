// ============================================================
// ARTIGOS — CLÍNICA VASCULART
// ============================================================

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'varizes-causas-tratamentos',
    title: 'Varizes: Causas, Sintomas e Tratamentos Modernos',
    excerpt:
      'Entenda o que causa as varizes, como identificar os sintomas e conheça os tratamentos minimamente invasivos disponíveis.',
    category: 'Varizes',
    date: '25 Fev 2025',
    readTime: '7 min',
    author: 'Dra. Fernanda Toreto',
    image: 'https://images.unsplash.com/photo-1559757175-7cb057fba93c?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>As varizes são veias dilatadas e tortuosas que surgem principalmente nos membros inferiores. Afetam cerca de 30% da população adulta brasileira e são mais comuns em mulheres. Embora muitas pessoas as considerem apenas um problema estético, as varizes podem indicar uma condição mais séria chamada insuficiência venosa crônica.</p>

      <h2>Causas das Varizes</h2>
      <p>As varizes surgem quando as válvulas presentes nas veias não funcionam corretamente. Essas válvulas são responsáveis por impedir o refluxo do sangue, garantindo que ele flua apenas em direção ao coração. Quando falham, o sangue se acumula nas veias, causando dilatação e tortuosidade.</p>
      <p>Fatores de risco incluem: predisposição genética (histórico familiar), sexo feminino, gravidez, obesidade, trabalho que exige longos períodos em pé ou sentado, sedentarismo, uso de anticoncepcionais hormonais e idade avançada.</p>

      <h2>Sintomas</h2>
      <p>Os sintomas variam de pessoa para pessoa e podem incluir: sensação de peso e cansaço nas pernas, dor e queimação, inchaço nos tornozelos e pernas, câimbras noturnas, coceira na pele ao redor das veias afetadas, alterações na cor da pele e, em casos avançados, úlceras venosas.</p>

      <h2>Diagnóstico</h2>
      <p>O diagnóstico é realizado pelo angiologista ou cirurgião vascular através do exame clínico e do Ecodoppler Vascular. Este exame avalia o fluxo sanguíneo, identifica refluxos nas válvulas e mapeia as veias comprometidas, sendo essencial para planejar o tratamento adequado.</p>

      <h2>Tratamentos Modernos</h2>
      <p>A medicina vascular evoluiu significativamente, oferecendo tratamentos minimamente invasivos com excelentes resultados. O <strong>laser endovenoso (EVLA)</strong> é um dos métodos mais modernos: uma fibra de laser é introduzida na veia doente, cauterizando-a por dentro. O procedimento é ambulatorial, com anestesia local e recuperação rápida.</p>
      <p>A <strong>escleroterapia com espuma</strong> consiste na injeção de uma substância esclerosante em forma de espuma dentro das veias varicosas. É especialmente indicada para varizes de médio calibre e vasinhos.</p>
      <p>A <strong>cirurgia convencional</strong> ainda é indicada em casos mais avançados. Técnicas modernas permitem incisões menores e recuperação mais rápida.</p>

      <h2>Prevenção</h2>
      <p>Algumas medidas ajudam a prevenir o aparecimento ou agravamento das varizes: praticar atividades físicas regulares, evitar permanecer muito tempo em pé ou sentado, elevar as pernas ao descansar, manter peso saudável e usar meias de compressão quando indicado.</p>
    `,
  },

  {
    slug: 'trombose-venosa-profunda',
    title: 'Trombose Venosa Profunda (TVP): Entenda os Riscos',
    excerpt:
      'A TVP é uma condição grave que requer diagnóstico urgente. Conheça os sintomas, fatores de risco e como prevenir.',
    category: 'Trombose',
    date: '20 Fev 2025',
    readTime: '6 min',
    author: 'Dra. Fernanda Toreto',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>A Trombose Venosa Profunda (TVP) é a formação de um coágulo sanguíneo dentro de uma veia profunda, geralmente nos membros inferiores. É uma condição potencialmente grave que requer diagnóstico e tratamento urgentes, pois o coágulo pode se desprender e causar embolia pulmonar.</p>

      <h2>Fatores de Risco</h2>
      <p>Diversos fatores aumentam o risco de TVP: imobilização prolongada, cirurgias recentes (especialmente ortopédicas), câncer, uso de anticoncepcionais, gravidez, obesidade, tabagismo, idade acima de 60 anos e trombofilia.</p>

      <h2>Sintomas de Alerta</h2>
      <p>Os sintomas mais comuns incluem: inchaço em uma das pernas (geralmente unilateral), dor na panturrilha que piora ao caminhar, vermelhidão e aumento da temperatura local, sensação de peso na perna afetada e endurecimento da veia.</p>
      <blockquote><strong>ATENÇÃO:</strong> Se apresentar falta de ar súbita, dor no peito ou tosse com sangue, procure atendimento de emergência — são sinais de embolia pulmonar.</blockquote>

      <h2>Diagnóstico</h2>
      <p>O diagnóstico é confirmado pelo Ecodoppler Venoso, que visualiza o fluxo sanguíneo e identifica coágulos. Exames de sangue como o D-dímero auxiliam no rastreamento.</p>

      <h2>Tratamento</h2>
      <p>O tratamento visa impedir o crescimento do coágulo e prevenir embolia pulmonar. <strong>Medicamentos anticoagulantes</strong> são a base do tratamento. O uso de meias de compressão auxilia na redução do edema.</p>
      <p>Em casos selecionados, pode ser necessária trombólise ou colocação de filtro de veia cava.</p>

      <h2>Prevenção</h2>
      <p>Movimente-se regularmente durante viagens longas, use meias de compressão quando indicado, mantenha-se hidratado e siga as orientações médicas em pós-operatórios.</p>
    `,
  },

  {
    slug: 'escleroterapia-guia-completo',
    title: 'Escleroterapia: Guia Completo Sobre o Procedimento',
    excerpt:
      'Saiba tudo sobre a escleroterapia, o procedimento mais realizado para tratamento de vasinhos e microvarizes.',
    category: 'Escleroterapia',
    date: '15 Fev 2025',
    readTime: '5 min',
    author: 'Dra. Fernanda Toreto',
    image: 'https://images.unsplash.com/photo-1691935444200-1addcb8a1d66?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>A escleroterapia é um dos procedimentos mais realizados na medicina vascular. Consiste na injeção de uma substância esclerosante dentro das veias doentes, provocando o fechamento e absorção da veia pelo organismo.</p>

      <h2>Indicações</h2>
      <p>A escleroterapia é indicada para: telangiectasias (vasinhos), veias reticulares, varizes de pequeno e médio calibre e varizes residuais após cirurgia.</p>

      <h2>Tipos de Escleroterapia</h2>
      <ul>
        <li><strong>Escleroterapia convencional:</strong> utilizada para vasinhos e veias de pequeno calibre</li>
        <li><strong>Escleroterapia com espuma:</strong> mais eficaz para veias de maior calibre</li>
        <li><strong>Escleroterapia guiada por ultrassom:</strong> para veias mais profundas</li>
      </ul>

      <h2>Como é o Procedimento</h2>
      <p>O procedimento é ambulatorial, sem necessidade de anestesia geral. Utilizam-se agulhas muito finas para injetar o esclerosante. A sessão dura entre 20 e 40 minutos. Após o procedimento, o paciente pode retornar às atividades normais no mesmo dia.</p>

      <h2>Resultados</h2>
      <p>Os resultados são progressivos — a melhora é percebida ao longo de semanas. É normal haver pequenos hematomas nos primeiros dias. Evite exposição solar nas áreas tratadas por 30 dias.</p>

      <h2>Número de Sessões</h2>
      <p>Em geral, são necessárias de 2 a 6 sessões, com intervalos de 15 a 30 dias entre elas.</p>
    `,
  },

  {
    slug: 'insuficiencia-venosa-cronica',
    title: 'Insuficiência Venosa Crônica: Diagnóstico e Cuidados',
    excerpt:
      'Conheça a insuficiência venosa crônica, seus estágios, tratamentos disponíveis e como prevenir complicações.',
    category: 'Insuficiência Venosa',
    date: '10 Fev 2025',
    readTime: '6 min',
    author: 'Dra. Fernanda Toreto',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>A insuficiência venosa crônica (IVC) é uma condição na qual as veias das pernas não conseguem bombear o sangue de volta ao coração adequadamente. Afeta até 50% das mulheres e 30% dos homens ao longo da vida.</p>

      <h2>Entendendo a Doença</h2>
      <p>Quando as válvulas venosas falham ou as veias perdem sua elasticidade, o sangue se acumula nas pernas, causando hipertensão venosa. Com o tempo, essa pressão leva a alterações na pele e microcirculação.</p>

      <h2>Classificação CEAP</h2>
      <p>A IVC é classificada em estágios: C0 (sem sinais visíveis), C1 (vasinhos), C2 (varizes), C3 (edema), C4 (alterações de pele), C5 (úlcera cicatrizada) e C6 (úlcera ativa).</p>

      <h2>Sintomas Progressivos</h2>
      <p>Iniciam com sensação de peso e cansaço nas pernas. Com a progressão, surgem edema, alterações na cor da pele, eczema venoso, endurecimento da pele e, nos casos mais avançados, úlceras venosas.</p>

      <h2>Tratamento</h2>
      <p>O tratamento inclui: meias de compressão elástica, medicamentos venoativos, cuidados com a pele, elevação dos membros, exercícios e procedimentos minimamente invasivos quando indicados.</p>

      <h2>Prevenção</h2>
      <p>Acompanhamento regular com o cirurgião vascular, atividade física, controle de peso e cuidados posturais são fundamentais para prevenir a progressão da doença.</p>
    `,
  },

  {
    slug: 'doenca-arterial-periferica',
    title: 'Doença Arterial Periférica: Sinais e Prevenção',
    excerpt:
      'A DAP é uma condição silenciosa que estreita as artérias das pernas. Saiba identificar os sinais e prevenir complicações.',
    category: 'Doença Arterial',
    date: '05 Fev 2025',
    readTime: '6 min',
    author: 'Dra. Fernanda Toreto',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>A doença arterial periférica (DAP) é uma condição na qual as artérias que levam sangue para as pernas ficam estreitadas devido ao acúmulo de placas de gordura (aterosclerose). Afeta cerca de 10% da população acima de 55 anos.</p>

      <h2>Fatores de Risco</h2>
      <p>Os principais fatores de risco são: tabagismo, diabetes mellitus, hipertensão arterial, colesterol elevado, obesidade, sedentarismo, idade acima de 50 anos e histórico familiar.</p>

      <h2>Sintomas</h2>
      <p>O sintoma mais característico é a <strong>claudicação intermitente</strong>: dor nas pernas ao caminhar que alivia com repouso. Em estágios avançados, sinais incluem: pele fria e pálida, perda de pelos, feridas que não cicatrizam e, nos casos mais graves, gangrena.</p>

      <h2>Diagnóstico</h2>
      <p>O <strong>Índice Tornozelo-Braquial (ITB)</strong> é um exame simples que compara a pressão do tornozelo com a do braço. Valores abaixo de 0,9 indicam DAP. O Ecodoppler Arterial fornece informações detalhadas sobre as obstruções.</p>

      <h2>Tratamento</h2>
      <p>Envolve controle dos fatores de risco (parar de fumar é essencial), medicamentos, programa de exercícios supervisionados e, quando indicado, angioplastia com stent ou cirurgia de bypass.</p>

      <h2>Importância do Diagnóstico Precoce</h2>
      <p>A DAP é um marcador de aterosclerose sistêmica, indicando risco aumentado de infarto e AVC. O diagnóstico precoce pode salvar membros e vidas.</p>
    `,
  },

  {
    slug: 'quando-procurar-angiologista',
    title: 'Quando Procurar um Angiologista? Sinais de Alerta',
    excerpt:
      'Conheça os principais sinais de que é hora de procurar um especialista vascular e a importância do check-up vascular.',
    category: 'Saúde Vascular',
    date: '01 Fev 2025',
    readTime: '5 min',
    author: 'Dra. Fernanda Toreto',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>O angiologista e o cirurgião vascular são os especialistas do sistema circulatório — artérias, veias e vasos linfáticos. Muitas doenças vasculares são silenciosas e, diagnosticadas tardiamente, podem trazer complicações graves.</p>

      <h2>Sinais de Alerta</h2>
      <p>Procure um angiologista se apresentar:</p>
      <ul>
        <li>Veias dilatadas e tortuosas (varizes)</li>
        <li>Inchaço nos tornozelos ou pernas</li>
        <li>Dor ou sensação de peso nas pernas</li>
        <li>Câimbras frequentes</li>
        <li>Alteração na cor da pele das pernas</li>
        <li>Feridas que não cicatrizam</li>
        <li>Dor ao caminhar que alivia com repouso</li>
        <li>Formigamento ou dormência nos pés</li>
        <li>Pele fria ou pálida nos membros</li>
        <li>Histórico familiar de doenças vasculares</li>
      </ul>

      <h2>Exames Vasculares</h2>
      <p>Os principais exames são: Ecodoppler Venoso, Ecodoppler Arterial, Índice Tornozelo-Braquial, Angiotomografia e Angiorressonância.</p>

      <h2>Check-up Vascular</h2>
      <p>Recomendado anualmente para pessoas acima de 40 anos, especialmente com fatores de risco. A prevenção é a melhor forma de evitar complicações.</p>

      <h2>Angiologista vs Cirurgião Vascular</h2>
      <p>O angiologista é o clínico das doenças vasculares. O cirurgião vascular, além do diagnóstico e tratamento clínico, também realiza procedimentos cirúrgicos e minimamente invasivos. No Brasil, a formação integrada permite atuação em ambas as frentes.</p>
    `,
  },
];
