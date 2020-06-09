import * as appConstants from "./appConstants";
import moment from 'moment';

export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.error(e)
    }
};

export const dateFormat = (value, formato) => {
    if (value) {
        if (formato) {
            return moment(new Date(value)).format(formato);
        } else {
            return moment(new Date(value)).format(appConstants.FORMATO_PRESENTACION_FECHA_CORTA);
        }
    }
}

export const fomartTasa = (value) => {
    if (value) return `${value.toFixed(2)}%`;
}

export const fomartPlazo = (value) => {
    if (value) return `${value} Meses`;
}
