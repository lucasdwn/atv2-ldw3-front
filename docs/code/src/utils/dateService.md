---
title: dateService
description: 'Classe responsável por manipulações de data, incluindo obtenção da data atual, formatação e remoção de horas.'
---

# DataService

A classe `DataService` fornece métodos para manipulação de datas, incluindo a obtenção da data atual, formatação de datas e remoção de horas.

## Métodos

### `getServiceDate()`

Retorna a data atual ajustada para o fuso horário local.

**Retorno:** `Date` - A data atual sem o deslocamento do fuso horário.

### `getDataSemHoras(date: Date): Date`

Recebe uma data e retorna uma nova data com as horas, minutos, segundos e milissegundos zerados.

**Parâmetros:**
- `date` (`Date`): A data a ser ajustada.

**Retorno:** `Date` - A nova data sem horas.

### `formatarData(data: Date | string)`

Formata uma data ou string de data em uma representação de string no formato `DD/MM/AAAA`.

**Parâmetros:**
- `data` (`Date | string`): A data a ser formatada.

**Retorno:** `string` - A data formatada ou 'Data inválida' se a data fornecida for inválida.

### `formatDateForInput(dateString: string)`

Converte uma string de data em um formato ISO adequado para inputs de data.

**Parâmetros:**
- `dateString` (`string`): A string de data a ser convertida.

**Retorno:** `string` - A data formatada no padrão ISO (`YYYY-MM-DD`). 

## Exemplo de Uso

```javascript
import dataService from './src/utils/dateService';

const dataAtual = dataService.getServiceDate();
const dataSemHoras = dataService.getDataSemHoras(new Date());
const dataFormatada = dataService.formatarData('2023-10-01');
const dataInputFormatada = dataService.formatDateForInput('2023-10-01T12:00:00Z');
```

A classe `DataService` é uma ferramenta útil para qualquer aplicação que necessite de manipulação de datas de forma consistente e precisa.