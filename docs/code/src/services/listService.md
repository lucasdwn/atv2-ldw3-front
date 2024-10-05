---
title: listService
description: 'Serviço para manipulação de listas e tipos de listas, incluindo operações de criação, leitura, atualização e exclusão.'
---

# listService

O `listService` é um módulo que fornece funções para manipulação de listas e tipos de listas. Ele utiliza o `apiService` para realizar requisições HTTP para um backend. As operações suportadas incluem a criação, busca, atualização e exclusão de listas e tipos de listas.

## Funções

### createLista

```typescript
async createLista(lista: ILista): Promise<ILista>
```

Cria uma nova lista.

- **Parâmetros:**
  - `lista`: Um objeto que implementa a interface `ILista`.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para a lista criada.

### getTipoListas

```typescript
async getTipoListas(listaId: string, search?: string, limit?: number)
```

Obtém os tipos de listas associados a uma lista específica.

- **Parâmetros:**
  - `listaId`: O ID da lista.
  - `search` (opcional): Um termo de busca para filtrar os tipos de listas.
  - `limit` (opcional): O número máximo de tipos de listas a serem retornados.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para os tipos de listas encontrados.

### buscarLista

```typescript
async buscarLista(listaId: string): Promise<ILista>
```

Busca uma lista pelo seu ID.

- **Parâmetros:**
  - `listaId`: O ID da lista a ser buscada.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para a lista encontrada.

### updateLista

```typescript
async updateLista(listaId: string, lista: ILista): Promise<ILista>
```

Atualiza uma lista existente.

- **Parâmetros:**
  - `listaId`: O ID da lista a ser atualizada.
  - `lista`: Um objeto que implementa a interface `ILista` com os novos dados.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para a lista atualizada.

### deleteLista

```typescript
async deleteLista(listaId: string): Promise<ILista>
```

Exclui uma lista pelo seu ID.

- **Parâmetros:**
  - `listaId`: O ID da lista a ser excluída.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para a lista excluída.

### buscarTipoLista

```typescript
async buscarTipoLista(tipoListaId: string): Promise<ITipoLista>
```

Busca um tipo de lista pelo seu ID.

- **Parâmetros:**
  - `tipoListaId`: O ID do tipo de lista a ser buscado.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para o tipo de lista encontrado.

### createTipoLista

```typescript
async createTipoLista(tipoLista: ITipoLista): Promise<ITipoLista>
```

Cria um novo tipo de lista.

- **Parâmetros:**
  - `tipoLista`: Um objeto que implementa a interface `ITipoLista`.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para o tipo de lista criado.

### updateTipoLista

```typescript
async updateTipoLista(tipoListaId: string, tipoLista: ITipoLista): Promise<ITipoLista>
```

Atualiza um tipo de lista existente.

- **Parâmetros:**
  - `tipoListaId`: O ID do tipo de lista a ser atualizado.
  - `tipoLista`: Um objeto que implementa a interface `ITipoLista` com os novos dados.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para o tipo de lista atualizado.

### deleteTipoLista

```typescript
async deleteTipoLista(tipoListaId: string): Promise<ITipoLista>
```

Exclui um tipo de lista pelo seu ID.

- **Parâmetros:**
  - `tipoListaId`: O ID do tipo de lista a ser excluído.
  
- **Retorno:** 
  - Retorna uma promessa que resolve para o tipo de lista excluído.