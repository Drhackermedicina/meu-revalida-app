
// src/lib/station-data.ts

// Define types for checklist data (consistent with TrainingPageClient)
export interface ChecklistItemEvaluation {
  inadequate: number | null;
  partial: number | null;
  adequate: number | null;
}

export interface ChecklistItem {
  id: string;
  description: string;
  points: ChecklistItemEvaluation;
  type: string; // e.g., 'ac', 'an', 'dx', 'ct', 'ef', 'im', 'lab', 'co'
  observation?: string;
}

export interface PrintedMaterial {
  id: string;
  title: string;
  content: string;
  imageSrc?: string;
  imageAlt?: string;
  dataAiHint?: string; // Added for AI image search hints
  isLocked: boolean;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export interface ChecklistData {
  title: string;
  area: string; // Padronizado para categorias principais
  code: string; // Unique code for routing
  scenario: { title: string; description: string };
  tasks: { title: string; timeLimit: string; items: string[] };
  actorInstructions: { title: string; content: string };
  printedMaterials: PrintedMaterial[];
  checklistItems: ChecklistItem[];
  references: { text: string; url: string }[];
  flashcards: Flashcard[];
}

export const allStations: ChecklistData[] = [
  {
    title: "Acidente por Água Viva",
    area: "Clínica Médica",
    code: "agua-viva",
    scenario: {
      title: "Cenário Clínico: Queimadura por Água Viva",
      description: "<p>Paciente, 25 anos, sexo masculino, previamente hígido, estava na praia quando sentiu uma dor súbita e intensa na perna direita após contato com uma água viva. Apresenta lesões lineares, eritematosas e edemaciadas no local.</p>",
    },
    tasks: {
      title: "Tarefas a Serem Cumpridas",
      timeLimit: "10 minutos",
      items: [
        "Acolher o paciente e garantir a biossegurança.",
        "Realizar anamnese detalhada focada no incidente.",
        "Examinar a lesão e o estado geral do paciente.",
        "Instituir medidas para alívio da dor e neutralização do veneno.",
        "Orientar o paciente sobre cuidados posteriores e sinais de alerta.",
      ],
    },
    actorInstructions: {
      title: "Instruções para o Ator (Paciente Simulado)",
      content: `
        <h4>DADOS PESSOAIS</h4>
        <p>Nome: Carlos Silva<br />Idade: 25 anos<br />Profissão: Estudante</p>
        <br />
        <h4>MOTIVO DA CONSULTA</h4>
        <p>Queimadura na perna direita por água viva há cerca de 15 minutos, com dor intensa.</p>
        <br />
        <h4>HISTÓRIA DA DOENÇA ATUAL (HDA)</h4>
        <p><strong>Dor na Perna Direita (Queimadura por Água Viva):</strong></p>
        <ul>
          <li><strong>Início e Causa:</strong> Súbito, há aproximadamente 15 minutos. O paciente estava na água do mar quando sentiu um contato seguido de dor aguda imediata. Ele identificou o contato como sendo de uma água viva.</li>
          <li><strong>Localização:</strong> Principalmente na face anterior da coxa direita, com algumas marcas lineares que se estendem para a face lateral da coxa.</li>
          <li><strong>Irradiação:</strong> A dor é mais intensa no local das marcas, mas há uma sensação de desconforto que se espalha por toda a coxa direita.</li>
          <li><strong>Qualidade/Tipo:</strong> Descrita como uma "queimação muito forte", "agulhadas quentes" ou "ardência intensa".</li>
          <li><strong>Intensidade (Escala de 0-10):</strong> No momento do incidente, refere dor 10/10. Ao chegar para atendimento, a dor está em 8/10.</li>
          <li><strong>Duração e Evolução:</strong> A dor tem sido contínua desde o início. Houve uma leve diminuição da intensidade após sair da água, mas permanece forte.</li>
          <li><strong>Fatores de Melhora/Piora:</strong> Piora com a movimentação da perna. Nenhuma medida de alívio foi tentada até o momento, exceto sair da água.</li>
          <li><strong>Sintomas Associados Locais:</strong> Vermelhidão (eritema), inchaço (edema) e presença de marcas lineares no local do contato. Refere também prurido (coceira) leve a moderado na área afetada.</li>
          <li><strong>Sintomas Associados Sistêmicos:</strong> Nega febre, calafrios, náuseas, vômitos, tontura, palpitações, falta de ar, dor de cabeça, alterações visuais ou qualquer outro sintoma geral.</li>
        </ul>
        <br />
        <h4>INTERROGATÓRIO SISTEMÁTICO</h4>
        <p>Além do já relatado na HDA, nega outros sintomas relevantes nos demais sistemas (cardiovascular, respiratório, gastrointestinal, neurológico, etc.).</p>
        <br />
        <h4>ANTECEDENTES</h4>
        <ul>
            <li><strong>Médicos:</strong> Nega comorbidades como diabetes, hipertensão, asma, doenças cardíacas ou reumatológicas. Nega internações prévias.</li>
            <li><strong>Cirúrgicos:</strong> Nega cirurgias anteriores.</li>
            <li><strong>Alergias:</strong> Nega alergias medicamentosas (dipirona, AAS, penicilina, etc.) ou alimentares conhecidas.</li>
            <li><strong>Vacinação:</strong> Refere vacinação em dia, conforme calendário nacional (importante para tétano).</li>
            <li><strong>Medicações em Uso:</strong> Nega uso de medicações contínuas.</li>
        </ul>
        <br />
        <h4>HÁBITOS DE VIDA</h4>
        <ul>
            <li><strong>Atividade Física:</strong> Pratica natação 3 vezes por semana na piscina do condomínio.</li>
            <li><strong>Alimentação:</strong> Refere alimentação variada, sem restrições.</li>
            <li><strong>Sono:</strong> Refere sono regular e reparador.</li>
            <li><strong>Tabagismo:</strong> Nega.</li>
            <li><strong>Etilismo:</strong> Consumo social de álcool (cerveja nos finais de semana, 2-3 latas), sem história de abuso.</li>
            <li><strong>Drogas Ilícitas:</strong> Nega.</li>
        </ul>
        <br />
        <h4>COMPORTAMENTO ESPERADO</h4>
        <p>Paciente deve demonstrar dor e ansiedade compatíveis com a intensidade referida (8/10). Deve cooperar com a anamnese e o exame físico, mas pode mostrar-se impaciente devido à dor. Seguir as instruções do médico durante a aplicação das condutas (lavagem, vinagre, compressas). Fazer perguntas sobre a gravidade da lesão e o tempo de recuperação, se o candidato der abertura.</p>
      `,
    },
    printedMaterials: [
      {
        id: "pm1-av-info",
        title: "Informações sobre Acidentes com Águas Vivas",
        content: "<p>Este material contém informações cruciais sobre como proceder em caso de contato com águas vivas, incluindo o que fazer e o que evitar.</p>",
        imageSrc: "https://placehold.co/600x400.png",
        imageAlt: "Jellyfish sting first aid information",
        dataAiHint: "jellyfish firstaid",
        isLocked: false,
      }
    ],
    checklistItems: [
      { id: "ci1-av-acolhimento", description: "<strong>Acolhimento e Biossegurança:</strong> Apresentou-se, estabeleceu comunicação empática e utilizou EPIs (luvas).", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ac" },
      { id: "ci2-av-anamnese-id-qp", description: "<strong>Anamnese - Identificação e Queixa Principal:</strong> Coletou dados e queixa principal (dor/queimadura por água viva) e duração.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "an" },
      { id: "ci3-av-anamnese-hda", description: "<strong>Anamnese - HDA (ALICIA-D da Dor):</strong> Investigou início/causa, localização, irradiação, qualidade/tipo, intensidade, duração/evolução, fatores de melhora/piora, sintomas associados (locais/sistêmicos).", points: { inadequate: 0, partial: 1.5, adequate: 3 }, type: "an", observation: "Avaliar completude da investigação da dor." },
      { id: "ci4-av-anamnese-antecedentes", description: "<strong>Anamnese - Antecedentes e Hábitos:</strong> Questionou alergias, comorbidades, medicações, vacinação (tétano), hábitos relevantes.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "an" },
      { id: "ci5-av-examefisico-geral", description: "<strong>Exame Físico - Geral e Sinais Vitais:</strong> Avaliou estado geral, consciência, aferiu/verificou sinais vitais.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ef" },
      { id: "ci6-av-examefisico-lesao", description: "<strong>Exame Físico - Inspeção da Lesão:</strong> Inspecionou e descreveu características da lesão (lineares, eritematosas, etc.).", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ef" },
      { id: "ci7-av-conduta-sairagua", description: "<strong>Conduta - Saída da Água:</strong> Orientou/garantiu que o paciente saísse da água imediatamente.", points: { inadequate: 0, partial: null, adequate: 0.25 }, type: "ct" },
      { id: "ci8-av-conduta-lavagemmar", description: "<strong>Conduta - Lavagem com ÁGUA DO MAR:</strong> Orientou/realizou lavagem abundante com ÁGUA DO MAR (ou soro fisiológico), explicando NÃO usar água doce.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ct", observation: "CRÍTICO: Não usar água doce." },
      { id: "ci9-av-conduta-vinagre", description: "<strong>Conduta - Aplicação de VINAGRE:</strong> Orientou/realizou aplicação de VINAGRE (ácido acético a 5%) por 15-30 minutos.", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ct", observation: "Fundamental para neutralizar cnidas." },
      { id: "ci10-av-conduta-tentaculos", description: "<strong>Conduta - Remoção de Tentáculos:</strong> Orientou/realizou remoção cuidadosa de tentáculos visíveis (pinça/luvas), SEM esfregar.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ct" },
      { id: "ci11-av-conduta-aliviodor", description: "<strong>Conduta - Alívio da Dor (Pós-Vinagre):</strong> Orientou/realizou compressas MORNAS (40-45°C) por ~20 min. Considerou analgesia sistêmica (paracetamol, dipirona).", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ct", observation: "Compressas mornas APÓS vinagre." },
      { id: "ci12-av-conduta-naofazer", description: "<strong>Conduta - O que NÃO Fazer:</strong> Orientou ativamente a NÃO usar urina, álcool, etc.", points: { inadequate: 0, partial: null, adequate: 0.5 }, type: "ct" },
      { id: "ci13-av-conduta-orientacoesfinais", description: "<strong>Conduta - Orientações Finais e Sinais de Alerta:</strong> Orientou sobre quando procurar atendimento médico novamente (piora da dor, infecção, sintomas sistêmicos, reação alérgica grave). Verificou/orientou profilaxia antitetânica.", points: { inadequate: 0, partial: 0.75, adequate: 1.25 }, type: "ct" }
    ],
    references: [{ text: "Protocolos clínicos para acidentes com animais aquáticos (ex: Ministério da Saúde, Sociedades Médicas de Dermatologia ou Toxicologia).", url: "#" }],
    flashcards: [
      { id: "fc1-av", question: "Qual é o agente de escolha para a neutralização inicial do veneno de água viva (cnidários) na maioria das situações no Brasil?", answer: "Vinagre comum (solução de ácido acético a aproximadamente 5%), aplicado por 15 a 30 minutos.", tag: "Tratamento Crítico" },
      { id: "fc2-av", question: "Por que a lavagem inicial de uma queimadura por água viva NÃO deve ser feita com água doce?", answer: "A água doce, por diferença de osmolaridade, pode causar a ruptura dos nematocistos (células urticantes) ainda intactos na pele, liberando mais veneno e intensificando a dor e a lesão.", tag: "Conduta Crítica" },
      { id: "fc3-av", question: "Quais são três sinais de alerta sistêmicos que indicariam a necessidade de procurar um serviço de emergência após uma queimadura por água viva?", answer: "Dificuldade respiratória ou chiado no peito; tontura, confusão mental ou desmaio; náuseas/vômitos persistentes. Reações alérgicas graves (edema de glote, anafilaxia) também são emergências.", tag: "Sinais de Alerta" },
      { id: "fc4-av", question: "Após a neutralização com vinagre, qual medida física pode ser utilizada para alívio da dor em queimaduras por água viva?", answer: "Imersão ou compressas de água morna (entre 40-45°C, temperatura que seja tolerável à pele sem causar queimadura térmica adicional), por cerca de 20 minutos. O calor ajuda a desnaturar as toxinas termolábeis.", tag: "Tratamento Adjuvante" },
      { id: "fc5-av", question: "Quais são as duas principais ações do vinagre em uma queimadura por água-viva?", answer: "1. Inativa os nematocistos ainda não disparados, impedindo maior liberação de veneno. 2. Pode ajudar a diminuir a dor por mecanismos ainda não totalmente elucidados, mas não é um analgésico direto potente.", tag: "Mecanismo de Ação" },
      { id: "fc6-av", question: "Ao remover tentáculos de água viva da pele do paciente, qual cuidado essencial o profissional deve ter?", answer: "Utilizar uma barreira de proteção (luvas) e um instrumento (pinça), evitando o contato direto com os próprios dedos e não esfregar a área para não disparar mais nematocistos.", tag: "Procedimento Seguro" }
    ],
  },
  {
    title: "Trauma Abdominal Fechado",
    area: "Cirurgia",
    code: "trauma-abdominal",
    scenario: {
      title: "Cenário Clínico: Politraumatizado Pós-Colisão Automobilística",
      description: "<p>Paciente, 30 anos, sexo masculino, vítima de colisão frontal carro vs. poste há 30 minutos. Estava de cinto de segurança. Chega ao pronto-socorro trazido pelo SAMU, em prancha longa, com colar cervical. Queixa-se de dor abdominal difusa e dor na perna esquerda.</p>",
    },
    tasks: {
      title: "Tarefas a Serem Cumpridas",
      timeLimit: "10 minutos",
      items: [
        "Realizar avaliação primária (ABCDE do Trauma).",
        "Realizar avaliação secundária focada no abdômen e outras lesões.",
        "Solicitar exames complementares pertinentes (FAST, exames laboratoriais, TC se indicada).",
        "Definir conduta inicial para estabilização.",
      ],
    },
    actorInstructions: {
      title: "Instruções para o Ator (Paciente Simulado)",
      content: "<p>Você está com dor abdominal intensa (nota 9/10) e dor forte na coxa esquerda. Sente-se um pouco tonto. Responda às perguntas do estudante sobre o acidente e seus sintomas. Demonstre dor à palpação abdominal. Sua perna esquerda parece mais curta e rodada externamente (simular).</p>",
    },
    printedMaterials: [
      {
        id: "pm1-trauma",
        title: "Resultado do FAST (Focus Assessment with Sonography for Trauma)",
        content: "<p><strong>FAST:</strong> Positivo - líquido livre em cavidade abdominal (espaço hepatorrenal e esplenorrenal).</p>",
        imageSrc: "https://placehold.co/600x400.png",
        imageAlt: "FAST ultrasound result",
        dataAiHint: "ultrasound trauma",
        isLocked: true,
      },
       {
        id: "pm2-trauma",
        title: "Raio-X Bacia AP e Perna Esquerda",
        content: "<p><strong>RX Bacia AP:</strong> Sem fraturas evidentes.<br/><strong>RX Fêmur Esquerdo:</strong> Fratura diafisária transversa do fêmur esquerdo.</p>",
        imageSrc: "https://placehold.co/600x400.png",
        imageAlt: "X-ray femur pelvis",
        dataAiHint: "xray femur",
        isLocked: true,
      },
    ],
    checklistItems: [
      { id: "ci1-ta", description: "<strong>A (Vias Aéreas e Coluna Cervical):</strong> Verificou perviedade, estabilizou coluna cervical.", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ac" },
      { id: "ci2-ta", description: "<strong>B (Respiração e Ventilação):</strong> Avaliou frequência respiratória, ausculta pulmonar, oximetria.", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ac" },
      { id: "ci3-ta", description: "<strong>C (Circulação com Controle de Hemorragia):</strong> Verificou pulso, PA, perfusão, procurou por sangramentos externos.", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ac" },
      { id: "ci4-ta", description: "<strong>D (Déficit Neurológico):</strong> Avaliou nível de consciência (Glasgow), pupilas.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ac" },
      { id: "ci5-ta", description: "<strong>E (Exposição e Controle do Ambiente):</strong> Removeu vestes, preveniu hipotermia.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ac" },
      { id: "ci6-ta", description: "<strong>Anamnese AMPLA (após avaliação primária):</strong> Coletou informações relevantes.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "an" },
      { id: "ci7-ta", description: "<strong>Exame Físico Abdominal:</strong> Realizou inspeção, ausculta, percussão, palpação.", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ef", observation: "Verificar se identificou dor à palpação e/ou defesa." },
      { id: "ci8-ta", description: "<strong>Exame Físico MMII:</strong> Inspecionou e palpou membro inferior esquerdo, identificando deformidade.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "ef" },
      { id: "ci9-ta", description: "<strong>Conduta:</strong> Solicitou FAST e exames laboratoriais (hemograma, coagulograma, tipagem).", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ct" },
      { id: "ci10-ta", description: "<strong>Conduta:</strong> Indicou laparotomia exploradora baseado no FAST positivo e instabilidade.", points: { inadequate: 0, partial: 1, adequate: 2 }, type: "ct", observation: "Ou conduta conservadora se estável e outros achados." },
    ],
    references: [{ text: "ATLS - Advanced Trauma Life Support, 10th Edition.", url: "#" }],
    flashcards: [
      { id: "fc1-ta", question: "O que significa a sigla FAST no contexto do trauma?", answer: "Focused Assessment with Sonography for Trauma.", tag: "Diagnóstico" },
      { id: "fc2-ta", question: "Quais são os 4 espaços avaliados no FAST abdominal?", answer: "Hepatorrenal (Morison), Esplenorrenal, Pélvico (fundo de saco de Douglas) e Pericárdico.", tag: "Diagnóstico" },
    ],
  },
  {
    title: "AVC - Escala NIHSS - INEP | 2024.2",
    area: "Clínica Médica",
    code: "avc-nihss-2024-2",
    scenario: {
      title: "Cenário de Atuação: Suspeita de Acidente Vascular Cerebral",
      description: "<p><strong>Nível de atenção:</strong> atenção secundária à saúde.<br><strong>Tipo de atendimento:</strong> urgência e emergência.</p><p><strong>A unidade possui a seguinte infraestrutura:</strong><br>- Consultórios;<br>- Sala de estabilização;<br>- Laboratório de análises clínicas;<br>- Serviço de radiologia com aparelho de radiografia e tomografia computadorizada;<br>- Leitos de internação – enfermaria e terapia intensiva.</p><p><strong>Descrição do caso:</strong><br>Você atenderá um paciente com 58 anos de idade, histórico de arritmia cardíaca, diabetes melito e dislipidemia, com suspeita de acidente vascular cerebral por apresentar déficit neurológico (hemiplegia E) e cefaleia, iniciados há cerca de 1 hora. Paciente encontra- se com respiração espontânea, via aérea pérvia, boa saturação de O2 em ar ambiente e parâmetros hemodinâmicos adequados.</p>",
    },
    tasks: {
      title: "Tarefas",
      timeLimit: "10 minutos",
      items: [
        "Aplicar a escala NIHSS ao paciente.",
        "Totalizar a pontuação da escala NIHSS e VERBALIZAR.",
        "Solicitar exames complementares necessários à avaliação inicial do caso.",
      ],
    },
    actorInstructions: {
      title: "Orientações do Ator/Atriz",
      content: `<h4>DADOS PESSOAIS:</h4>
                 <p>- Anderson, 58 anos, motorista de ônibus.</p><br/>
                 <h4>MOTIVO DE CONSULTA:</h4>
                 <p>- Não consigo movimentar o braço e a perna esquerda.</p><br/>
                 <h4>INÍCIO DOS SINTOMAS:</h4>
                 <p>- Começou há pouco mais de uma hora.</p><br/>
                 <h4>ANTECEDENTES PESSOAIS:</h4>
                 <p>-  Tenho diabetes, arritmia e colesterol alto.</p><br/>
                 <p><strong>AO VERBALIZAR/ SOLICITAR A REALIZAÇÃO DA ESCALA NIHSS, LIBERAR TODOS OS IMPRESSOS DISPONÍVEIS.</strong></p><br/>
                 <p><strong>SE PERGUNTADO A IDADE E MÊS QUE ESTAMOS:</strong><br/>- Tenho 58 anos e estamos no mês de dezembro.</p><br/>
                 <p><strong>SE SOLICITADO PARA FECHAR E ABRIR OS OLHOS E FECHAR E ABRIR A MÃO:</strong><br/>- Feche e abra os olhos, feche e abra a mão direita.</p><br/>
                 <p><strong>SE SOLICITADO PARA MOVIMENTAR OS OLHOS NA HORIZONTAL PARA OS 2 LADOS:</strong><br/>- Movimente os olhos para os 2 lados.</p><br/>
                 <p><strong>SE PERGUNTADO QUANTOS DEDOS O PACIENTE VÊ:</strong><br/>- Responder adequadamente de acordo ao que for mostrado.</p><br/>
                 <p><strong>SE SOLICITADO PARA ACOMPANHAR O MOVIMENTO DOS DEDOS DO PARTICIPANTE:</strong><br/>- Acompanhar adequadamente e/ou responder que consegue.</p><br/>
                 <p><strong>SE SOLICITADO MOSTRAR OS DENTES/ SORRIR E FECHAR OS OLHOS COM FORÇA:</strong><br/>- Mostre os dentes/ sorria e feche os olhos com força.</p><br/>
                 <p><strong>SE SOLICITADO PARA SUSTENTAR O BRAÇO DIREITO A 90° POR 10 SEGUNDOS:</strong><br/>- Realize a ação corretamente.</p><br/>
                 <p><strong>SE SOLICITADO PARA MOVER A PERNA ESQUERDA:</strong><br/>- Simule e/ou verbalize que não consegue.</p><br/>
                 <p><strong>SE SOLICITADO SUSTENTAR A PERNA DIREITA A 30° POR 5 SEGUNDOS:</strong><br/>- Simule e/ou verbalize que consegue realizar a ação.</p><br/>
                 <p><strong>SE SOLICITADO QUE O PACIENTE FAÇA O TESTE INDEX-NARIZ OU CALCANHAR-JOELHO:</strong><br/>- Realizar adequadamente com o lado direito.</p><br/>
                 <p><strong>SE O CANDIDATO VERBALIZAR QUE IRÁ TOCAR/ BELISCAR OS MEMBROS DO LADO ESQUERDO:</strong><br/>- Responder que não sentiu nada.</p><br/>
                 <p><strong>SE O CANDIDATO VERBALIZAR QUE IRÁ TOCAR/ BELISCAR OS MEMBROS DO LADO DIREITO:</strong><br/>- Responder que consegue sentir o toque e a dor.</p><br/>
                 <p><strong>SE SOLICITADO A DESCREVER O QUE ESTÁ ACONTECENDO NO QUADRO DO IMPRESSO 1:</strong><br/>- Descreva adequadamente a cena.</p><br/>
                 <p><strong>SE SOLICITADO A NOMEAR OS ITENS NA LISTA DE IDENTIFICAÇÃO DO IMPRESSO 2:</strong><br/>- Nomear adequadamente.</p><br/>
                 <p><strong>SE SOLICITADO A LER A LISTA DE SENTENÇA DO IMPRESSO 3:</strong><br/>- Ler adequadamente.</p><br/>
                 <p><strong>SE SOLICITADO A LER OU REPETIR AS PALAVRAS DA LISTA DO IMPRESSO 4:</strong><br/>- Realizar a tarefa adequadamente.</p><br/>
                 <p><strong>Se o candidato solicitar exame laboratorial ou de imagem de forma inespecífica, dizer:</strong><br/>- Seja mais específico com o pedido.</p><br/>
                 <p><strong>Se o candidato solicitar exames complementares laboratoriais e/ou de imagem de forma específica, dizer:</strong><br/>- Considere solicitado.</p><br/>
                 <p><strong>No decorrer da estação, caso o (a) participante concluir a aplicação da escala NIHSS e não verbalizar seu total, perguntar se o candidato concluiu a aplicação da escala e, após confirmar o término da aplicação, perguntar qual foi a pontuação.</strong></p>`,
    },
    printedMaterials: [
      { id: "pm1-avc-nihss", title: "Impresso 1 ( Imagem para descrever )", content: "<p><strong>Imagem:</strong> Uma imagem para o paciente descrever, como parte da avaliação neurológica.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736174755.jpeg", imageAlt: "Imagem para descrição NIHSS", dataAiHint: "scene description", isLocked: true },
      { id: "pm2-avc-nihss", title: "Impresso 2 ( Itens para identificação )", content: "<p><strong>Imagem:</strong> Uma série de objetos comuns para o paciente nomear.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736174895.jpeg", imageAlt: "Itens para identificação NIHSS", dataAiHint: "object identification", isLocked: true },
      { id: "pm3-avc-nihss", title: "Impresso 3 ( Sentenças para leitura )", content: "<p><strong>Sentenças:</strong> Uma lista de sentenças para o paciente ler em voz alta.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736175002.jpeg", imageAlt: "Sentenças para leitura NIHSS", dataAiHint: "sentence reading", isLocked: true },
      { id: "pm4-avc-nihss", title: "Impresso 4 ( Palavras para ler/repetir )", content: "<p><strong>Palavras:</strong> Uma lista de palavras para o paciente ler ou repetir.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736175158.jpeg", imageAlt: "Palavras para leitura/repetição NIHSS", dataAiHint: "word list", isLocked: true },
      { id: "pm5-avc-nihss", title: "Impresso 5 ( NIHSS 1/4 )", content: "<p><strong>NIHSS:</strong> Primeira parte da folha da escala NIHSS.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736176406.jpeg", imageAlt: "Escala NIHSS parte 1", dataAiHint: "medical chart", isLocked: true },
      { id: "pm6-avc-nihss", title: "Impresso 6 ( NIHSS 2/4 )", content: "<p><strong>NIHSS:</strong> Segunda parte da folha da escala NIHSS.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736176434.jpeg", imageAlt: "Escala NIHSS parte 2", dataAiHint: "medical chart", isLocked: true },
      { id: "pm7-avc-nihss", title: "Impresso 7 ( NIHSS 3/4 )", content: "<p><strong>NIHSS:</strong> Terceira parte da folha da escala NIHSS.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736176461.jpeg", imageAlt: "Escala NIHSS parte 3", dataAiHint: "medical chart", isLocked: true },
      { id: "pm8-avc-nihss", title: "Impresso 8 ( NIHSS 4/4 )", content: "<p><strong>NIHSS:</strong> Quarta e última parte da folha da escala NIHSS.</p>", imageSrc: "https://app.penserevalida.com/impressos/10/1736176492.jpeg", imageAlt: "Escala NIHSS parte 4", dataAiHint: "medical chart", isLocked: true },
    ],
    checklistItems: [
      { id: "ci1-avc", description: "1. <strong>Apresentação:</strong><br>(1) identifica-se; e,<br>(2) cumprimenta o paciente simulado e pergunta seu nome.<br><br><strong>Adequado:</strong> realiza as duas ações.<br><strong>Parcialmente adequado:</strong> realiza uma ação.<br><strong>Inadequado:</strong> não realiza ação alguma.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ac" },
      { id: "ci2-avc", description: "2. <strong>Realiza a avaliação 1a do NIHSS:</strong><br><br><strong>Adequado:</strong> avalia se o paciente está alerta, falando com ele(a).<br><strong>Inadequado:</strong> não avalia se o paciente está alerta.", points: { inadequate: 0, partial: null, adequate: 0.5 }, type: "an" },
      { id: "ci3-avc", description: "3. <strong>Realiza a avaliação 1b do NIHSS. Pergunta:</strong><br>(1) idade do paciente; e<br>(2) em que mês estamos.<br><br><strong>Adequado:</strong> pergunta os dois itens.<br><strong>Parcialmente adequado:</strong> pergunta apenas um item.<br><strong>Inadequado:</strong> não pergunta item algum.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "an" },
      { id: "ci4-avc", description: "4. <strong>Realiza a avaliação 1c do NIHSS. Solicita que o paciente:</strong><br>(1) abra e feche os olhos e<br>(2) abra e feche a mão.<br><br><strong>Adequado:</strong> realiza as duas solicitações.<br><strong>Parcialmente adequado:</strong> realiza apenas uma solicitação.<br><strong>Inadequado:</strong> não solicita nenhuma das duas ações.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ex" },
      { id: "ci5-avc", description: "5. <strong>Realiza a avaliação 2 do NIHSS. Pede que o paciente movimente os olhos horizontalmente para os dois lados (olhar para a direita e para a esquerda).</strong><br><br><strong>Adequado:</strong> avalia a movimentação para os dois lados.<br><strong>Parcialmente adequado:</strong> avalia a movimentação para um lado.<br><strong>Inadequado:</strong> não avalia a movimentação ocular.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ex" },
      { id: "ci6-avc", description: "6. <strong>Realiza a avaliação 3 do NIHSS. Avalia os campos visuais (superiores e inferiores).</strong><br><br><strong>Adequado:</strong> avalia os quatro quadrantes.<br><strong>Inadequado:</strong> não avalia os quatro quadrantes.", points: { inadequate: 0, partial: null, adequate: 0.5 }, type: "ex" },
      { id: "ci7-avc", description: "7. <strong>Realiza a avaliação 4 do NIHSS. Pede que o paciente sorria (ou mostre os dentes) e feche os olhos com força.</strong><br><br><strong>Adequado:</strong> faz as duas solicitações.<br><strong>Parcialmente adequado:</strong> faz apenas uma solicitação.<br><strong>Inadequado:</strong> não faz nenhuma dessas solicitações.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ex" },
      { id: "ci8-avc", description: "8. <strong>Realiza a avaliação 5 do NIHSS. Solicita que o paciente sustente os braços a 90°, com as palmas das mãos para baixo.</strong><br><br><strong>Adequado:</strong> realiza com ângulo E posicionamento das mãos adequados.<br><strong>Parcialmente adequado:</strong> realiza com ângulo OU posicionamento das mãos inadequados.<br><strong>Inadequado:</strong> não realiza a pesquisa ou a faz com ângulo E posicionamento das mãos inadequados.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ex" },
      { id: "ci9-avc", description: "9. <strong>Realiza a avaliação 6 do NIHSS. Solicita que o paciente sustente as pernas a 30°, em extensão.</strong><br><br><strong>Adequado:</strong> realiza com ângulo E extensão adequados.<br><strong>Parcialmente adequado:</strong> realiza com ângulo OU extensão inadequados.<br><strong>Inadequado:</strong> não realiza a pesquisa ou a faz com ângulo E extensão inadequados.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ex" },
      { id: "ci10-avc", description: "10. <strong>Realiza a avaliação 7 do NIHSS. Solicita que o paciente faça o teste index-nariz OU calcanhar-joelho.</strong><br><br><strong>Adequado:</strong> solicita.<br><strong>Inadequado:</strong> não solicita.", points: { inadequate: 0, partial: null, adequate: 0.5 }, type: "ex" },
      { id: "ci11-avc", description: "11. <strong>Realiza a avaliação 8 do NIHSS. Testa a sensibilidade do paciente.</strong><br><br><strong>Adequado:</strong> testa.<br><strong>Inadequado:</strong> não testa.", points: { inadequate: 0, partial: null, adequate: 1 }, type: "ex" },
      { id: "ci12-avc", description: "12. <strong>Realiza a avaliação 9 do NIHSS. Solicita que o paciente descreva a imagem.</strong><br><br><strong>Adequado:</strong> solicita.<br><strong>Inadequado:</strong> não solicita.", points: { inadequate: 0, partial: null, adequate: 0.5 }, type: "ex" },
      { id: "ci13-avc", description: "13. <strong>Realiza a avaliação 10 do NIHSS. Solicita que o paciente leia (ou repita) a lista de palavras.</strong><br><br><strong>Adequado:</strong> solicita.<br><strong>Inadequado:</strong> não solicita.", points: { inadequate: 0, partial: null, adequate: 0.5 }, type: "ex" },
      { id: "ci14-avc", description: "14. <strong>Totaliza corretamente a escala NIHSS. Verbaliza total de 10 pontos.</strong><br><br><strong>Adequado:</strong> totaliza corretamente.<br><strong>Inadequado:</strong> não totaliza ou totaliza com outro valor.", points: { inadequate: 0, partial: null, adequate: 1 }, type: "dx" },
      { id: "ci15-avc", description: "15. <strong>Solicita TC, ou tomografia, ou tomografia computadorizada, ou ressonância, ou ressonância magnética de crânio SEM CONTRASTE.</strong><br><br><strong>Adequado:</strong> solicita.<br><strong>Parcialmente adequado:</strong> solicita COM CONTRASTE.<br><strong>Inadequado:</strong> não solicita.", points: { inadequate: 0, partial: 0.5, adequate: 1 }, type: "im" },
      { id: "ci16-avc", description: "16. <strong>Solicita outros exames complementares:</strong><br>(1) Eletrocardiograma;<br>(2) Glicemia capilar;<br>(3) Hemograma;<br>(4) Coagulograma (TAP / INR e TTPA);<br>(5) Potássio e sódio;<br>(6) Ureia e creatinina;<br>(7) Troponina.<br><br><strong>Adequado:</strong> solicita ao menos cinco exames.<br><strong>Inadequado:</strong> solicita menos que cinco exames.", points: { inadequate: 0, partial: null, adequate: 1 }, type: "lab" },
    ],
    references: [
      { text: "Estação aplicada pela banca do INEP / 2024.2", url: "#" }
    ],
    flashcards: [
      { id: "fc1-avc-nihss", question: "O que significa a sigla NIHSS?", answer: "National Institutes of Health Stroke Scale.", tag: "Definição" },
      { id: "fc2-avc-nihss", question: "Qual o objetivo principal da escala NIHSS?", answer: "Avaliar quantitativamente o déficit neurológico causado por um AVC, auxiliando na decisão terapêutica e prognóstico.", tag: "Objetivo" },
      { id: "fc3-avc-nihss", question: "Cite 3 componentes avaliados pela escala NIHSS.", answer: "Nível de consciência, motricidade dos membros (braços e pernas), linguagem (afasia), disartria, campos visuais, melhor olhar conjugado.", tag: "Componentes" },
      { id: "fc4-avc-nihss", question: "Em que tipo de paciente a escala NIHSS é primariamente utilizada?", answer: "Em pacientes com suspeita ou diagnóstico de Acidente Vascular Cerebral (AVC) agudo.", tag: "Aplicação" },
      { id: "fc5-avc-nihss", question: "Uma pontuação mais ALTA na escala NIHSS indica um AVC mais grave ou menos grave?", answer: "Mais grave. Quanto maior a pontuação, maior o déficit neurológico.", tag: "Interpretação" }
    ],
  },
  {
    title: "REVALIDA FÁCIL (VAGINOSE BACTERIANA)",
    area: "G.O", // Corrigido aqui
    code: "vaginose-bacteriana-rf",
    scenario: {
      title: "Cenário de Atendimento: Queixa de Corrimento com Odor Fétido",
      description: `
        <p><strong>Nível de Atenção:</strong> Atenção primária à saúde (Unidade Básica de Saúde - UBS)</p>
        <p><strong>Tipo de Atendimento:</strong> Ambulatorial</p>
        <p><strong>Infraestrutura da Unidade (Disponível para o candidato):</strong></p>
        <ul>
          <li>Consultório equipado</li>
          <li>Maca ginecológica para descrição do exame (não haverá exame físico real)</li>
          <li>Material para coleta de exame a fresco, pH vaginal e teste das aminas (simulado)</li>
        </ul>
        <p><strong>DESCRIÇÃO COMPLETA DO CASO (Informação inicial para o candidato):</strong></p>
        <p>"Sra. Carla, 26 anos, chega à UBS queixando-se de 'corrimento com cheiro muito ruim, tipo de peixe podre', há cerca de uma semana, com piora após as relações sexuais."</p>
      `,
    },
    tasks: {
      title: "Tarefas Principais",
      timeLimit: "10 minutos",
      items: [
        "Realizar a anamnese direcionada à queixa principal da paciente, investigando características dos sintomas, fatores de risco e histórico ginecológico e sexual.",
        "Descrever como realizaria o exame físico ginecológico (inspeção vulvar, exame especular), indicando o que esperaria encontrar e quais testes rápidos realizaria no consultório (pH vaginal, teste das aminas).",
        "Considerar diagnósticos diferenciais de vulvovaginites.",
        "Interpretar os resultados dos achados do exame físico e dos testes rápidos fornecidos para formular o diagnóstico (utilizando os Critérios de Amsel).",
        "Verbalizar o diagnóstico mais provável.",
        "Elaborar e comunicar a conduta terapêutica inicial.",
        "Orientar a paciente sobre sua condição, tratamento, e medidas de prevenção de recorrência.",
      ],
    },
    actorInstructions: {
      title: "INSTRUÇÕES AO ATOR/ATRIZ (Sra. Carla)",
      content: `
        <h4>DADOS PESSOAIS</h4>
        <p>Nome do Paciente (Simulado): Carla Mendes, 26 anos, casada, secretária.</p>
        <p>Humor/Comportamento do Paciente: Envergonhada e desconfortável devido ao odor, mas cooperativa e buscando solução.</p>
        <p>Resposta a outras perguntas não previstas no script: "Não consta no script" ou "Não sei informar".</p>
        <br/>
        <h4>PERGUNTAS DO PACIENTE (se conduta adequada ou em momento específico):</h4>
        <ul>
          <li>"Doutor(a), o que eu tenho exatamente?"</li>
          <li>"Isso é alguma Doença Sexualmente Transmissível (DST)?"</li>
          <li>"É grave? Pode complicar?"</li>
          <li>"Meu marido precisa se tratar também?"</li>
          <li>"Como eu posso evitar que isso volte?"</li>
        </ul>
        <br/>
        <p><strong>Condução de Exames/Procedimentos Específicos (se houver):</strong> Não haverá exame físico real. O candidato deverá descrever.</p>
        <br/>
        <h4>INFORMAÇÕES ADICIONAIS PARA O ATOR:</h4>
        <ul>
          <li>Relatar que já tentou usar sabonetes íntimos perfumados e fez duchas vaginais, mas o odor piorou.</li>
          <li>Manter contato visual e expressar preocupação com o odor.</li>
        </ul>
        <br/>
        <h4>DADOS DO PACIENTE SIMULADO (Script para o Ator - Sra. Carla)</h4>
        <br/>
        <h4>MOTIVO DE CONSULTA:</h4>
        <p>"[Doutor(a), estou aqui porque estou com um corrimento com um cheiro muito forte, que parece peixe podre. Isso já faz uma semana e piora depois da relação com meu marido e também quando estou menstruada. Estou muito incomodada.]"</p>
        <br/>
        <h4>Detalhar cada sintoma/queixa principal:</h4>
        <p><strong>Sintoma 1: Odor Vaginal Fétido</strong></p>
        <ul>
          <li><strong>Início:</strong> "Há cerca de uma semana."</li>
          <li><strong>Localização:</strong> "Vem da vagina mesmo."</li>
          <li><strong>Qualidade/Tipo:</strong> "Cheiro de peixe podre, muito característico."</li>
          <li><strong>Intensidade (0-10):</strong> "O cheiro é um 9, bem forte e constrangedor."</li>
          <li><strong>Duração:</strong> "Persistente."</li>
          <li><strong>Fatores de Melhora:</strong> "Não notei nada que melhore, lavar só alivia na hora."</li>
          <li><strong>Fatores de Piora:</strong> "Piora muito depois da relação sexual e quando estou para menstruar ou durante a menstruação. As duchas vaginais que fiz parecem que pioraram também."</li>
          <li><strong>Evolução:</strong> "Tem se mantido igual ou piorado um pouco."</li>
        </ul>
        <br/>
        <p><strong>Sintoma 2: Corrimento Vaginal</strong></p>
        <ul>
          <li><strong>Início:</strong> "Junto com o cheiro, há uma semana."</li>
          <li><strong>Aspecto/Cor:</strong> "É branco-acinzentado, meio aguado, não é grosso."</li>
          <li><strong>Odor:</strong> "Sim, o mesmo cheiro de peixe."</li>
          <li><strong>Quantidade:</strong> "Moderada, suja a calcinha, mas não muito."</li>
        </ul>
        <br/>
        <h4>Sintomas Acompanhantes (Investigar ativamente ou responder se perguntado):</h4>
        <ul>
          <li><strong>Prurido vulvovaginal:</strong> "Não, coceira quase nenhuma. Às vezes uma irritação leve, mas nada demais."</li>
          <li><strong>Disúria:</strong> "Não, para urinar está normal."</li>
          <li><strong>Dispareunia:</strong> "Não sinto dor na relação, só o cheiro que piora depois."</li>
          <li><strong>Febre:</strong> "Não tive febre."</li>
          <li><strong>Dor pélvica/abdominal:</strong> "Não."</li>
          <li><strong>Sangramento anormal:</strong> "Não, minha menstruação é regular."</li>
          <li><strong>Sintomas no parceiro:</strong> "Meu marido não tem nenhuma queixa."</li>
        </ul>
        <br/>
        <p><strong>Medicações de Alívio Usadas:</strong> "Tentei usar sabonetes íntimos com cheiro e fiz duchas com água e vinagre que vi na internet, mas não adiantou, acho que até piorou o cheiro."</p>
        <br/>
        <h4>ANTECEDENTES PESSOAIS:</h4>
        <ul>
          <li><strong>Doenças Prévias (Comorbidades):</strong> Nega DM, HAS, imunossupressão.</li>
          <li><strong>Medicamentos de Uso Contínuo/Vitaminas:</strong> "Uso pílula anticoncepcional (desogestrel isolado) há 2 anos."</li>
          <li><strong>Alergias:</strong> Nega alergias medicamentosas.</li>
          <li><strong>Cirurgias Prévias:</strong> Nega.</li>
          <li><strong>Internações Prévias:</strong> Nega.</li>
          <li><strong>Vacinação:</strong> Completa, incluindo HPV.</li>
        </ul>
        <br/>
        <h4>Ginecológicos/Obstétricos (para pacientes do sexo feminino):</h4>
        <ul>
          <li><strong>DUM:</strong> "Terminou há 3 dias." (Ciclos regulares de 28/30 dias)</li>
          <li><strong>Gesta/Para/Aborto:</strong> G0P0A0.</li>
          <li><strong>Sexarca:</strong> 17 anos.</li>
          <li><strong>Número de parceiros nos últimos 12 meses:</strong> 1 (marido, há 3 anos).</li>
          <li><strong>Uso de contraceptivos:</strong> Anticoncepcional oral (desogestrel).</li>
          <li><strong>Preventivo (Papanicolau):</strong> "Fiz há 6 meses, resultado normal."</li>
          <li><strong>Histórico de ISTs:</strong> Nega.</li>
          <li><strong>VB/Candidíase prévia:</strong> "Acho que já tive candidíase uma vez, mas era diferente, coçava muito. Esse cheiro é a primeira vez."</li>
        </ul>
        <br/>
        <h4>HÁBITOS DE VIDA:</h4>
        <ul>
          <li><strong>Alimentação:</strong> Refere dieta equilibrada.</li>
          <li><strong>Atividade Física:</strong> Caminhada 2 vezes por semana.</li>
          <li><strong>Álcool:</strong> Nega.</li>
          <li><strong>Tabagismo:</strong> Nega.</li>
          <li><strong>Drogas Ilícitas:</strong> Nega.</li>
          <li><strong>Higiene íntima:</strong> "Tomo banho 2 vezes ao dia. Estava usando sabonetes íntimos perfumados e fazendo duchas vaginais por causa do cheiro."</li>
        </ul>
        <br/>
        <h4>HISTÓRIA PSICOSSOCIAL E EPIDEMIOLÓGICA:</h4>
        <ul>
          <li><strong>Ocupação/Trabalho:</strong> Secretária.</li>
          <li><strong>Moradia/Saneamento:</strong> Apartamento com boas condições.</li>
        </ul>
        <br/>
        <h4>HISTÓRIA FAMILIAR:</h4>
        <p>Pais saudáveis. Nega história familiar relevante.</p>
      `,
    },
    printedMaterials: [
      {
        id: "pm1-vb-rf-sv",
        title: "IMPRESSO 1: SINAIS VITAIS",
        content: `
          <p><strong>Frequência Cardíaca (FC):</strong> 72 bpm</p>
          <p><strong>Frequência Respiratória (FR):</strong> 15 irpm</p>
          <p><strong>Pressão Arterial (PA):</strong> 110 x 70 mmHg (MMSS D)</p>
          <p><strong>Temperatura Axilar (Tax):</strong> 36.4ºC</p>
        `,
        isLocked: true,
      },
      {
        id: "pm2-vb-rf-exg",
        title: "IMPRESSO 2: ACHADOS DO EXAME GINECOLÓGICO",
        content: `
          <p><strong>Inspeção Vulvar:</strong> Vulva sem hiperemia significativa, edema ou lesões.</p>
          <p><strong>Exame Especular:</strong> Paredes vaginais sem sinais inflamatórios intensos. Presença de conteúdo vaginal fluido, homogêneo, branco-acinzentado, de odor fétido característico (similar a peixe podre), em pequena a moderada quantidade. Colo uterino epitelizado, sem hiperemia ou friabilidade.</p>
          <p><strong>Testes Rápidos Realizados no Consultório:</strong></p>
          <ul>
            <li>pH vaginal aferido: 5.5 (Ref: 3.8-4.5)</li>
            <li>Teste das aminas (Whiff test com KOH 10%): Positivo (odor de peixe intensificado).</li>
          </ul>
          <p><strong>Exame a Fresco (Microscopia da secreção vaginal com salina):</strong> Observadas numerosas "clue cells" (células epiteliais vaginais recobertas por cocobacilos, com bordas obscurecidas). Diminuição acentuada de lactobacilos. Ausência de Trichomonas. Raros leucócitos.</p>
        `,
        isLocked: true,
      },
    ],
    checklistItems: [
      { id: "ci1-vb-rf-acolhimento", description: "<strong>Apresentação e Acolhimento:</strong><br>(1) Identifica-se (nome e/ou função); E<br>(2) Cumprimenta o paciente simulado e pergunta seu nome (ou confirma).<br><br><strong>Adequado (0.5 pts):</strong> Realiza as duas ações.<br><strong>Parcialmente Adequado (0.25 pts):</strong> Realiza uma ação.<br><strong>Inadequado (0.0 pts):</strong> Não realiza ação alguma.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "ac" },
      { id: "ci2-vb-rf-anamnese-hda", description: "<strong>Investigação da Queixa Principal e HDA (Corrimento e Odor):</strong><br>Investiga pelo menos 3 características do corrimento (aspecto, cor, quantidade, consistência) E 3 características do odor (tipo, intensidade, fatores de piora).<br><br><strong>Adequado (1.0 pts):</strong> Investiga ≥3 características de cada.<br><strong>Parcialmente Adequado (0.5 pts):</strong> Investiga parcialmente as características.<br><strong>Inadequado (0.0 pts):</strong> Investiga <2 características de cada ou não investiga.", points: { inadequate: 0, partial: 0.5, adequate: 1.0 }, type: "an" },
      { id: "ci3-vb-rf-sintomas-associados", description: "<strong>Investigação de Sintomas Associados (para diagnóstico diferencial):</strong><br>Pergunta sobre prurido, disúria, dispareunia, dor pélvica, febre (para diferenciar de candidíase, tricomoníase, cervicite/DIP).<br><br><strong>Adequado (0.75 pts):</strong> Investiga ≥3 dos sintomas listados.<br><strong>Parcialmente Adequado (0.4 pts):</strong> Investiga 1-2 dos sintomas listados.<br><strong>Inadequado (0.0 pts):</strong> Não investiga os sintomas listados.", points: { inadequate: 0, partial: 0.4, adequate: 0.75 }, type: "an" },
      { id: "ci4-vb-rf-fatores-risco", description: "<strong>Investigação de Fatores de Risco/Desencadeantes e Hábitos de Higiene:</strong><br>Pergunta sobre uso de duchas vaginais, múltiplos parceiros (embora não seja o caso aqui, é uma pergunta padrão), troca frequente de parceiros, uso de DIU, tabagismo, e hábitos de higiene íntima.<br><br><strong>Adequado (0.75 pts):</strong> Pergunta sobre ≥2 fatores de risco/hábitos relevantes (especialmente duchas).<br><strong>Parcialmente Adequado (0.4 pts):</strong> Pergunta sobre 1 fator/hábito.<br><strong>Inadequado (0.0 pts):</strong> Não pergunta.", points: { inadequate: 0, partial: 0.4, adequate: 0.75 }, type: "an" },
      { id: "ci5-vb-rf-descreve-exame", description: "<strong>Descreve a Inspeção Vulvar e Exame Especular:</strong><br>Verbaliza a observação da vulva (procurando sinais inflamatórios) E a passagem do espéculo para visualização das paredes vaginais, colo e características do conteúdo vaginal.<br><br><strong>Adequado (0.75 pts):</strong> Descreve de forma sistemática os passos da inspeção vulvar E do exame especular.<br><strong>Parcialmente Adequado (0.4 pts):</strong> Descreve parcialmente ou apenas um dos componentes.<br><strong>Inadequado (0.0 pts):</strong> Não descreve ou o faz de forma inadequada.", points: { inadequate: 0, partial: 0.4, adequate: 0.75 }, type: "ef" },
      { id: "ci6-vb-rf-menciona-testes", description: "<strong>Menciona a Realização dos Testes Rápidos (pH e Teste das Aminas):</strong><br>Verbaliza a intenção de coletar material para aferição de pH vaginal E realização do teste das aminas (Whiff test) com KOH.<br><br><strong>Adequado (0.75 pts):</strong> Menciona os dois testes.<br><strong>Parcialmente Adequado (0.4 pts):</strong> Menciona apenas um dos testes.<br><strong>Inadequado (0.0 pts):</strong> Não menciona os testes.", points: { inadequate: 0, partial: 0.4, adequate: 0.75 }, type: "ef" },
      { id: "ci7-vb-rf-interpreta-achados", description: "<strong>Interpreta Corretamente os Achados Fornecidos (Critérios de Amsel):</strong><br>Identifica os achados fornecidos (corrimento homogêneo branco-acinzentado, pH vaginal > 4.5, teste das aminas positivo, presença de clue cells no exame a fresco) e os relaciona com os Critérios de Amsel, confirmando o diagnóstico com pelo menos 3 critérios.<br><br><strong>Adequado (1.0 pts):</strong> Interpreta corretamente os achados e menciona/aplica os Critérios de Amsel (pelo menos 3).<br><strong>Parcialmente Adequado (0.5 pts):</strong> Interpreta os achados, mas não os relaciona explicitamente com os Critérios de Amsel ou identifica menos de 3.<br><strong>Inadequado (0.0 pts):</strong> Não interpreta ou interpreta erroneamente.", points: { inadequate: 0, partial: 0.5, adequate: 1.0 }, type: "dx" },
      { id: "ci8-vb-rf-verbaliza-diagnostico", description: "<strong>Verbaliza o Diagnóstico Principal:</strong><br>Verbaliza o diagnóstico de Vaginose Bacteriana.<br><br><strong>Adequado (1.0 pts):</strong> Verbaliza o diagnóstico corretamente.<br><strong>Parcialmente Adequado (0.5 pts):</strong> Hesita ou não é claro no diagnóstico.<br><strong>Inadequado (0.0 pts):</strong> Não verbaliza o diagnóstico ou o faz incorretamente.", points: { inadequate: 0, partial: 0.5, adequate: 1.0 }, type: "dx" },
      { id: "ci9-vb-rf-conduta-terapeutica", description: "<strong>Elabora e Comunica Conduta Terapêutica Inicial Adequada (Tratamento Farmacológico):</strong><br>Prescreve uma opção de tratamento farmacológico válida para Vaginose Bacteriana (Ex: Metronidazol 500mg VO 12/12h por 7 dias OU Metronidazol gel vaginal 1x/noite por 5 dias), com dose e duração corretas.<br><br><strong>Adequado (1.25 pts):</strong> Orienta uma opção terapêutica correta e completa.<br><strong>Parcialmente Adequado (0.65 pts):</strong> Orienta opção correta, mas com dose/duração incompleta ou parcialmente correta.<br><strong>Inadequado (0.0 pts):</strong> Não orienta ou orienta conduta inadequada.", points: { inadequate: 0, partial: 0.65, adequate: 1.25 }, type: "ct" },
      { id: "ci10-vb-rf-orientacoes-vb", description: "<strong>Fornece Orientações sobre a Natureza da VB e Medidas Comportamentais/Prevenção:</strong><br>Explica que VB é um desequilíbrio da flora vaginal, orienta evitar duchas vaginais e sabonetes íntimos inadequados.<br><br><strong>Adequado (1.0 pts):</strong> Fornece ≥2 orientações relevantes (natureza da VB, evitar duchas).<br><strong>Parcialmente Adequado (0.5 pts):</strong> Fornece 1 orientação.<br><strong>Inadequado (0.0 pts):</strong> Não orienta.", points: { inadequate: 0, partial: 0.5, adequate: 1.0 }, type: "co" },
      { id: "ci11-vb-rf-aborda-parceiro-antabuse", description: "<strong>Aborda Questões sobre Parceiro e Efeito Antabuse (se Metronidazol oral):</strong><br>Informa que o tratamento do parceiro não é rotineiramente indicado para VB E, se prescreveu Metronidazol oral, orienta sobre a abstenção de álcool.<br><br><strong>Adequado (0.75 pts):</strong> Aborda corretamente as duas questões (parceiro E efeito antabuse se aplicável).<br><strong>Parcialmente Adequado (0.4 pts):</strong> Aborda apenas uma das questões.<br><strong>Inadequado (0.0 pts):</strong> Não aborda.", points: { inadequate: 0, partial: 0.4, adequate: 0.75 }, type: "co" },
      { id: "ci12-vb-rf-comunicacao-paciente", description: "<strong>Comunicação com o Paciente (Clareza, Empatia, Linguagem Acessível):</strong><br>(Avaliação global da comunicação durante a estação)<br><br><strong>Adequado (0.5 pts):</strong> Comunica-se de forma clara, empática e com linguagem acessível.<br><strong>Parcialmente Adequado (0.25 pts):</strong> Apresenta falhas em um dos aspectos.<br><strong>Inadequado (0.0 pts):</strong> Comunicação inadequada.", points: { inadequate: 0, partial: 0.25, adequate: 0.5 }, type: "co" },
    ],
    references: [
      { text: "Brasil. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST). Brasília: Ministério da Saúde. (Versão mais recente).", url: "#" },
      { text: "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO). Manual de Orientação em Trato Genital Inferior e Colposcopia. (Versão mais recente).", url: "#" },
      { text: "Berek JS, Novak E. Berek & Novak – Tratado de Ginecologia. Guanabara Koogan. (Edição mais recente).", url: "#" },
      { text: "Critérios de Amsel para diagnóstico de Vaginose Bacteriana.", url: "#" },
    ],
    flashcards: [
      { id: "fc1-vb-rf", question: "Quais são os 4 Critérios de Amsel para o diagnóstico de Vaginose Bacteriana?", answer: "1. Corrimento vaginal homogêneo, branco-acinzentado, aderente às paredes vaginais; 2. pH vaginal > 4.5; 3. Teste das aminas (Whiff test) positivo; 4. Presença de 'clue cells' na microscopia a fresco (pelo menos 20% das células epiteliais). Pelo menos 3 critérios devem estar presentes.", tag: "Diagnóstico" },
      { id: "fc2-vb-rf", question: "Qual é o tratamento de primeira linha para Vaginose Bacteriana em pacientes não gestantes?", answer: "Metronidazol 500 mg, via oral, 2 vezes ao dia, por 7 dias. Alternativas incluem metronidazol gel vaginal ou clindamicina creme vaginal.", tag: "Tratamento" },
      { id: "fc3-vb-rf", question: "O parceiro sexual de uma mulher com Vaginose Bacteriana precisa ser tratado?", answer: "Não rotineiramente. O tratamento do parceiro não demonstrou reduzir a recorrência da VB na mulher.", tag: "Manejo do Parceiro" },
      { id: "fc4-vb-rf", question: "Quais orientações de higiene íntima são importantes para prevenir a recorrência da Vaginose Bacteriana?", answer: "Evitar duchas vaginais, não usar sabonetes íntimos agressivos ou perfumados, preferir roupas íntimas de algodão e evitar roupas muito justas por longos períodos.", tag: "Prevenção" },
      { id: "fc5-vb-rf", question: "O que são 'clue cells'?", answer: "São células epiteliais vaginais recobertas por grande quantidade de cocobacilos, principalmente Gardnerella vaginalis, que obscurecem suas bordas, conferindo um aspecto granular. São um achado característico da Vaginose Bacteriana no exame a fresco.", tag: "Microscopia" },
    ],
  },
];

    
