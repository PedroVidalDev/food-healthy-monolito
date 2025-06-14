type SupportContent = {
  title: string
  description: string
  subtopics: {
    subtitle: string
    text: string
  }[]
}

export const paymentSupport: SupportContent = {
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
}
