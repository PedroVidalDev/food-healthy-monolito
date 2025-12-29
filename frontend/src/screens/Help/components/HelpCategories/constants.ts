import { SupportContent } from '@screens/Support/types'
import * as PhosphorIcons from 'phosphor-react-native'

type HelpMenu = {
  title: string
  subtitle: string
  icon: keyof typeof PhosphorIcons
  content: SupportContent
}

export const helpMenuOptions: HelpMenu[] = [
  {
    title: 'Pagamentos',
    subtitle: 'Reembolso, problemas, cobranças...',
    icon: 'CreditCard',
    content: {
      title: 'Pagamentos',
      description: `Aceitamos diversos métodos de pagamento para facilitar sua experiência. Você pode pagar com cartões de crédito ou débito (Visa, Mastercard, Elo, entre outros), Pix com pagamento instantâneo aqualquer hora, e em alguns casos, também com boleto bancário, que leva até três dias úteis para compensar. Algumas carteiras digitais como Apple Pay, Google Pay e PayPal também podem estar disponíveis. Para certos serviços, é possível usar saldo disponível em sua conta no app. Todos os pagamentos são feitos em ambiente seguro e você receberá uma confirmação assim que a transação for concluída. Em caso de erro ou recusa, você verá instruções para tentar novamente. Para mais detalhes sobre reembolsos ou prazos, consulte nossa política ou entre em contato com o suporte.
    `,
      subtopics: [
        {
          subtitle: 'Métodos aceitos',
          text: `Você pode realizar pagamentos de forma simples e segura com cartões de crédito e débito (Visa, Mastercard, Elo, entre outros), Pix com compensação imediata e, quando disponível, carteiras digitais como Apple Pay, Google Pay e PayPal. Algumas funcionalidades também permitem o uso de saldo disponível dentro do próprio app.`,
        },
        {
          subtitle: 'Reembolso',
          text: `Reembolsos seguem nossa política de uso e podem ser solicitados em casos específicos, como erros de cobrança, cancelamento de serviços ou problemas técnicos. O prazo para devolução varia de acordo com o método utilizado, normalmente entre 3 e 10 dias úteis após aprovação da solicitação.`,
        },
        {
          subtitle: 'Pagamento fora do app',
          text: `Não reconhecemos pagamentos feitos fora da plataforma, como transferências diretas, depósitos manuais ou acordos externos. Transações realizadas fora do app não são processadas oficialmente e não dão direito a suporte, confirmação de compra ou reembolso.
            `,
        },
        {
          subtitle: 'Dados sensíveis',
          text: ` A segurança dos seus dados é prioridade. Todas as informações sensíveis, como dados bancários e de cartão, são criptografadas e protegidas conforme os mais altos padrões de segurança digital. Não armazenamos esses dados diretamente e todo o processo é feito por intermediadores confiáveis e certificados.`,
        },
      ],
    },
  },
  {
    title: 'Conta',
    subtitle: 'Senha, verificação em duas etapas...',
    icon: 'Users',
    content: {
      title: 'Conta',
      description: `Gerencie as configurações da sua conta, incluindo informações pessoais, segurança e privacidade. Aqui você pode alterar sua senha, atualizar dados de contato e configurar a verificação em duas etapas para maior proteção.`,
      subtopics: [
        {
          subtitle: 'Criação de conta',
          text: `Para criar uma conta, basta seguir as instruções no aplicativo. Você precisará fornecer um endereço de e-mail válido ou número de telefone e criar uma senha segura.`,
        },
        {
          subtitle: 'Problemas de login',
          text: `Se você está tendo problemas para fazer login, verifique sua conexão com a internet e se as credenciais estão corretas. Tente redefinir sua senha se necessário.`,
        },
        {
          subtitle: 'Verificação em duas etapas',
          text: `A verificação em duas etapas adiciona uma camada extra de segurança à sua conta. Ative-a para proteger seu acesso com um código enviado ao seu celular ou e-mail, mesmo que sua senha seja comprometida.`,
        },
        {
          subtitle: 'Excluir conta',
          text: `Você pode solicitar a exclusão da sua conta a qualquer momento. Tenha em mente que a exclusão é permanente e todos os seus dados serão removidos de acordo com nossa política de privacidade.`,
        },
      ],
    },
  },
  {
    title: 'Compras',
    subtitle: 'Problemas com compra...',
    icon: 'Wallet',
    content: {
      title: 'Compras',
      description: `Encontre informações sobre suas compras, status de pedidos e como resolver problemas comuns. Nossa equipe está pronta para ajudar com qualquer questão relacionada aos seus pedidos.`,
      subtopics: [
        {
          subtitle: 'Status do pedido',
          text: `Acompanhe o status dos seus pedidos diretamente pelo aplicativo. Você receberá notificações sobre cada etapa, desde a confirmação do pagamento até a entrega ou conclusão do serviço.`,
        },
        {
          subtitle: 'Problemas com a compra',
          text: `Se você encontrou um problema com sua compra, como item errado, danificado ou serviço não entregue, entre em contato com nosso suporte imediatamente. Tenha em mãos o número do pedido para agilizar o atendimento.`,
        },
        {
          subtitle: 'Cancelamento de compra',
          text: `A política de cancelamento varia conforme o tipo de produto ou serviço. Consulte os termos específicos da sua compra. Geralmente, cancelamentos podem ser feitos antes do envio ou início do serviço.`,
        },
        {
          subtitle: 'Disputa de transação',
          text: `Caso não reconheça uma compra em seu extrato ou acredite que houve uma transação não autorizada, entre em contato com seu banco e com nosso suporte para investigarmos a situação.`,
        },
      ],
    },
  },

  {
    title: 'Políticas e termos',
    subtitle: 'Cancelamento, termos de uso...',
    icon: 'FileDoc',
    content: {
      title: 'Políticas e Termos',
      description: `Aqui você encontra os documentos legais que regem o uso do nosso aplicativo e serviços, incluindo termos de uso, política de privacidade e política de cancelamento e reembolso.`,
      subtopics: [
        {
          subtitle: 'Termos de uso',
          text: `Os Termos de Uso estabelecem as regras e condições para a utilização da nossa plataforma, incluindo direitos e responsabilidades dos usuários. Ao usar o aplicativo, você concorda com estes termos.`,
        },
        {
          subtitle: 'Política de privacidade',
          text: `Nossa Política de Privacidade descreve como coletamos, usamos e protegemos seus dados pessoais. A privacidade dos seus dados é de extrema importância para nós.`,
        },
        {
          subtitle: 'Política de cancelamento',
          text: `A Política de Cancelamento detalha as condições e prazos para o cancelamento de serviços ou produtos adquiridos através do aplicativo, e os procedimentos para solicitação de estornos, quando aplicável.`,
        },
        {
          subtitle: 'Direitos do consumidor',
          text: `Estamos em conformidade com o Código de Defesa do Consumidor brasileiro e outras legislações aplicáveis para garantir seus direitos como consumidor.`,
        },
      ],
    },
  },
  {
    title: 'Suporte',
    subtitle: 'Suporte online com atendente...',
    icon: 'UserFocus',
    content: {
      title: 'Suporte',
      description: `Se você não encontrou a resposta para sua pergunta nas seções anteriores, nossa equipe de suporte está pronta para te ajudar. Oferecemos diversas formas de contato para que você possa falar conosco.`,
      subtopics: [
        {
          subtitle: 'Chat online',
          text: `Fale com um de nossos atendentes em tempo real através do chat online disponível no aplicativo. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h (horário de Brasília).`,
        },
        {
          subtitle: 'E-mail',
          text: `Envie sua dúvida ou problema por e-mail e nossa equipe responderá o mais breve possível. O prazo de resposta pode variar, mas geralmente ocorre em até 24 horas úteis.`,
        },
        {
          subtitle: 'Telefone',
          text: `Para casos urgentes, você pode entrar em contato conosco por telefone durante nosso horário comercial. O número de contato está disponível na seção 'Fale Conosco' do app.`,
        },
        {
          subtitle: 'Perguntas Frequentes (FAQ)',
          text: `Antes de entrar em contato, consulte nossa seção de Perguntas Frequentes. Lá você pode encontrar a solução para sua dúvida de forma rápida e eficiente.`,
        },
      ],
    },
  },
]
