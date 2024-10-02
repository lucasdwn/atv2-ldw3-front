class DataService {

    getServiceDate(): Date {
        const dateNow = new Date();
        const offset = dateNow.getTimezoneOffset();
        return new Date(dateNow.getTime() - (offset * 60 * 1000));
    }

    getDataSemHoras(date: Date): Date {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    };

    formatarData(data: Date | string) {
        const dataObj = typeof data === 'string' ? new Date(data) : data;
        if (isNaN(dataObj.getTime())) {
            return 'Data inválida';
        }
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    };
}

export default new DataService();
