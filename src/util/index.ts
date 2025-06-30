function formatRealValue(value: string): string {
    const somenteNumerosEVirgula = value.replace(/[^0-9,.-]/g, '');

    const numberValue = parseFloat(somenteNumerosEVirgula.replace(',', '.'));

    if (isNaN(numberValue)) {
        throw new Error('Valor inválido');
    }

    return numberValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

export {
    formatRealValue
}