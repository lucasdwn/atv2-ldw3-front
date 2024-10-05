
---
title: apiService
description: 'Serviço para gerenciar requisições API, incluindo autenticação e refresh de token.'
---

# apiService

O `apiService` é um módulo responsável por gerenciar as requisições à API, incluindo a manipulação de tokens de autenticação. Ele fornece métodos para obter tokens, fazer requisições e atualizar tokens quando necessário.

## Constantes

- `API_URL`: URL base da API, obtida a partir da variável de ambiente `NEXT_PUBLIC_API_URL_PRODUCAO`.

## Métodos

### `getToken()`

```typescript
getToken: (): string | null
```

Retorna o token de autenticação armazenado no `localStorage`.

### `getRefreshToken()`

```typescript
getRefreshToken: (): string | null
```

Retorna o refresh token armazenado no `localStorage`.

### `makeRequest(endpoint: string, options: RequestInit = {}): Promise<any>`

```typescript
async makeRequest(endpoint: string, options: RequestInit = {}): Promise<any>
```

Faz uma requisição para o endpoint especificado. Se o token estiver expirado (status 401), tenta atualizar o token e refaz a requisição.

#### Parâmetros

- `endpoint`: O endpoint da API para o qual a requisição será feita.
- `options`: Opções adicionais para a requisição, como método HTTP e corpo.

#### Retorno

Retorna a resposta da requisição em formato JSON.

#### Exceções

Lança um erro se a requisição falhar ou se a resposta não for bem-sucedida.

### `refreshToken(): Promise<any | null>`

```typescript
async refreshToken(): Promise<any | null>
```

Atualiza o token de autenticação usando o refresh token armazenado.

#### Retorno

Retorna os novos tokens se a atualização for bem-sucedida, ou `null` em caso de falha.

#### Exceções

Registra um erro no console se não houver um refresh token disponível ou se a requisição falhar.
