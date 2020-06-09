// keys
export const TOKEN_KEY = 'token'
export const PAY_FROM_DETAILS = 'PAY_FROM_DETAILS'
// endpoints
export const AUTH_ENDPOINT = '/api/digital/security'
export const CREDITOS_ENDPOINT = '/api/digital/creditos'
export const PAGOS_ENDPOINT = '/api/digital/pagos'
export const CAMPANIAS_ENDPOINT = '/api/digital/campanias'

//endpoints auth
export const AUTH_ENDPOINT_LOGIN = '/api/digital/security/auth/login'
// Register User
export const REGISTER_FASE_IDENTIFICATION = 1;
export const REGISTER_FASE_VALIDATION = 2;
export const REGISTER_FASE_CONFIRMATION = 3;
export const REGISTER_FASE_COMPLETED = 4;

// Recover Password
export const RECOVER_FASE_VALIDATION = 1;
export const RECOVER_FASE_CONFIRMATION = 2;
export const RECOVER_FASE_COMPLETED = 3;

//Documento de Identidad Cliente
export const CODIGO_TIPO_DOCUMENTO_DNI = "1";
export const CODIGO_TIPO_DOCUMENTO_CCEE = "2";
export const CODIGO_TIPO_DOCUMENTO_PASP = "5";
export const CODIGO_TIPO_DOCUMENTO_RUC = "6";
export const CODIGO_TIPO_DOCUMENTO_OTRS = "9";

//Longitud de Numero de documentos
export const LONGITUD_TIPO_DOCUMENTO_DNI = 8;
export const LONGITUD_TIPO_DOCUMENTO_CCEE = 9;
export const LONGITUD_TIPO_DOCUMENTO_PASP = 11;
export const LONGITUD_TIPO_DOCUMENTO_RUC = 11;
export const LONGITUD_TIPO_DOCUMENTO_OTRS = 20;

//Metodos de verificacion
export const CODIGO_METODO_VERIFICACION_SMS = "1";
export const CODIGO_METODO_VERIFICACION_EMAIL = "2";

//Limite de envios de mensajes de verificacion via SMS
export const LIMITE_ENVIO_METODO_VERIFICACION_SMS = 3;

//Logitud maxima de correo
export const LONGITUD_MAXIMA_CORREO = 50;
export const LONGITUD_MAXIMA_CUENTA_CREDITO = 17;
export const LONGITUD_MINIMA_CUENTA_CREDITO = 9;
export const LONGITUD_MAXIMA_CELULAR = 9;
export const LONGITUD_MAXIMA_PASSWORD = 30;

//Moneda
export const CODIGO_MONEDA_SOLES = "001";
export const CODIGO_MONEDA_DOLARES = "002";
export const CODIGO_MONEDA_ISO_SOLES = "PEN";
export const CODIGO_MONEDA_ISO_DOLARES = "USD";
export const DESCRIPCION_MONEDA_SOLES = "Soles";
export const DESCRIPCION_MONEDA_DOLARES = "Dólares Americanos";

//Formato Fecha
export const FORMATO_PRESENTACION_FECHA_CORTA = "DD/MM/yyyy";

//Metodos de pago
export const CODIGO_METODO_PAGO_CULQI = "1";
export const CODIGO_METODO_PAGO_CUENTA_AHORROS = "2";

//Descripcion Metodo de Pago
export const DESCRIPCION_METODO_PAGO_CULQI = "Cargo tarjeta débito otro banco";
export const DESCRIPCION_METODO_PAGO_CUENTA_AHORROS = "Cargo cuenta de ahorros";

//Tipos de campanias 
export const CODIGO_ORIGEN_CAMPANIA_MICRO = "1";
export const CODIGO_ORIGEN_CAMPANIA_MICASH = "2";
export const DESCRIPCION_ORIGEN_CAMPANIA_MICRO = "TIENES UN CRÉDITO MICRO (PRE-APROBADO)";
export const DESCRIPCION_ORIGEN_CAMPANIA_MICASH = "TIENES UN CRÉDITO MI CASH (PRE-APROBADO)";
