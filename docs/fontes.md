# Fontes das afirmações da página

Todas as afirmações vêm do repositório privado da extensão (versão 1.53.0). Caminhos relativos à raiz desse repositório. `README` = `README.md`, `FUNC` = `docs/FUNCIONALIDADES.md`, `CTX` = `docs/CONTEXTO-PROJETO.md`, `ARQ` = `docs/ARQUITETURA.md`, `CHG` = `CHANGELOG.md`, `ROT` = `docs/ROTEIRO-EVOLUCAO.md`. Nada do plano embutido, do manifest com nomes de marca ou dos testes foi publicado.

## Hero e selo
| Afirmação na página | Fonte |
|---|---|
| Extensão para Chrome e Edge | README (abertura, "Requisitos") |
| Captura o dataLayer, decodifica hits, compara com o plano de mensuração | README ("Objetivo"), CTX ("Propósito") |
| Para quem implementa ou revisa tagueamento (analistas, devs, QA) | CTX ("Para quem") |
| Em desenvolvimento, sem versão pública | README ("Instalação": só "Carregar sem compactação"); ROT item 9 (loja ainda por decidir) |

## Ilustração (mesa de conferência)
| Afirmação | Fonte |
|---|---|
| Posição do push no dataLayer (`#12`) | FUNC "Painel › dataLayer" (`#44` = `dataLayer[44]`) |
| "GA4 ≠", "x de y chaves certas" | FUNC "Rede GA4"; "O que é validado" (placar "x de y chaves certas") |
| Alerta "número que chegou como texto (ep. em vez de epn.)" e a correção | CHG 1.51.0 e 1.52.0; FUNC "Verificações do lado do GA4" (`value` como texto) |
| `en`, `ep.*`, `epn.*`, `pr1` como campos de hit | FUNC "Ecossistema Google › Campos decodificados"; CHG 1.52.0 (glossário) |
| HTTP 204 = aceito pelo coletor, confirmar no DebugView | FUNC "O que HTTP 204 quer dizer" |
| Eventos (`purchase`), IDs e domínio são exemplos próprios, rotulados "Ilustração" | feitos para a página, sem dados do plano |

## O que ela faz
| Grupo | Fonte |
|---|---|
| OK / alerta / ERRO, placar, obrigatoriedade, tipo, lista fechada, URL, items[], regras cruzadas, `ecommerce: null`, chave fora do plano | FUNC "O que é validado no dataLayer"; README "Principais recursos" |
| /g/collect e /mp/collect, hit sob o push, hit sem push conferido, GA4 ✓ / ≠ / sem hit | FUNC "Rede GA4"; CHG 1.51.0 |
| Google Ads, remarketing, Floodlight, Consent Mode, endpoints first-party de GTM Server-Side | FUNC "Ecossistema Google"; README (1.9.0) |
| Meta Pixel, TikTok Pixel com CAPI, deduplicação por event_id, UET, Pinterest, Snap, LinkedIn, X, Reddit | FUNC "Ferramentas de mídia e conversão"; README (1.12.0) |
| Caixa que explica cada alerta (o que é, por que importa, como corrigir); glossário | CHG 1.52.0 e 1.53.0; FUNC "O que cada apontamento quer dizer" |
| LGPD como aviso, nunca erro; máscara do que é guardado | FUNC "LGPD: só aviso, nunca erro"; CTX "Privacidade e LGPD" |
| Erros de console/script, promessas rejeitadas, recursos, fetch/XHR, cliques até 3,5 s | README ("Monitor da página"); FUNC "Painel › Cliques" |
| Hit bloqueado deixa o push em alerta | FUNC "Painel › Hit bloqueado" |
| Popup, painel lateral, aba, DevTools; Copiar dataLayer.push; Copiar evidência; exportar JSON; Comparar; Busca; tema claro/escuro | README ("Painel"); FUNC "Painel", "Histórico" |

## Como usar e requisitos
| Afirmação | Fonte |
|---|---|
| Carregar sem compactação em chrome://extensions / edge://extensions com modo do desenvolvedor, escolhendo a pasta com manifest.json | README "Instalação no Chrome e no Edge", passos 2 a 4 |
| Abas abertas são reconectadas; F5 para a linha do tempo completa | README passo 5; FUNC "Atualizar a extensão com a aba aberta" |
| Popup, Abrir painel, Abrir em aba, aba Validador GA4 no DevTools (F12) | README passo 6 |
| Cada push com o hit; clicar abre código, o que o GA4 recebeu, conferência chave a chave | FUNC "Painel › Feed" |
| Chrome 116 ou mais novo; Chrome e Edge recentes; mesmo pacote MV3 | `manifest.json` (`minimum_chrome_version`); README "Requisitos"; CTX princípio 7 |
| Login no Google no mesmo navegador para ler a planilha | README "Requisitos" |

## Privacidade e limites
| Afirmação | Fonte |
|---|---|
| Sem servidor, telemetria, código remoto ou bibliotecas na extensão; dados no armazenamento do navegador | README (abertura); CTX princípio 4 e "Onde os dados ficam" |
| CPF, e-mail, telefone e token mascarados antes de guardar | CTX "O que é mascarado"; FUNC "LGPD" |
| Rede própria: download da planilha; DNS (SPF/DMARC) e PageSpeed só por clique e permissão | CTX princípio 4; FUNC "Tecnologias › Consultas sob demanda" (as consultas de CNPJ e CVM também existem e foram deixadas de fora do texto) |
| Pacote pede acesso a todos os sites, mostrado na instalação | README "Ativar um domínio ou todos os sites"; `manifest.json` (`<all_urls>`) |
| Entrega servidor → Google/Meta/TikTok invisível; deduplicação sempre provável; ligação push × hit inferida; confirmar no DebugView | CTX "Fora do escopo"; FUNC "Rede GA4" (ligação inferida); README "Limitações conhecidas" |

## Dúvidas
| Pergunta | Fonte |
|---|---|
| Na loja? | README "Instalação"; ROT item 9 |
| Muda a página? Exceções (Testar instalação, Disparar na página, confirmação na primeira vez) | README "Objetivo"; CTX princípio 1; FUNC "Simular disparos" |
| Dados saem do computador? | CTX princípio 4; FUNC "Tecnologias" |
| De onde vem o plano (planilha lida a cada 5 min com o login, validation-plan.json importado, plano embutido até a 1ª leitura, abas esperadas) | FUNC "A planilha é a fonte da verdade"; README "Planilha e plano embutido" |
| Confirma que apareceu no GA4? | FUNC "O que HTTP 204 quer dizer"; CTX "Fora do escopo" |
| Outros navegadores | README (só Chrome e Edge) |
| Não é produto do Google | decisão do dono, repetida no rodapé |

Total: 37 afirmações, tiradas de README, FUNCIONALIDADES, CONTEXTO-PROJETO, CHANGELOG, ROTEIRO-EVOLUCAO e manifest.json.
