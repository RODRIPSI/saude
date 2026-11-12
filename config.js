// Configuração do aplicativo.
// Cole aqui o "ID do cliente OAuth" criado no Google Cloud (veja o LEIA-ME.md).
// Enquanto estiver como COLE_AQUI, o app funciona normalmente, só sem Drive e Agenda.
window.APP_CONFIG = {
  GOOGLE_CLIENT_ID: 'COLE_AQUI.apps.googleusercontent.com',
  ROOT_FOLDER: 'Saúde a Dois',   // pasta principal no Drive
  CALENDAR_NAME: 'Saúde',        // usada só se CALENDAR_ID estiver vazio
  CALENDAR_ID: 'family07441208199029854731@group.calendar.google.com', // agenda “Family” do Google (família)
  TIMEZONE: 'America/Sao_Paulo'
};
