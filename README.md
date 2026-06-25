# Palace Lounge — Website

Site institucional do **Palace Lounge** (restaurante & lounge, Luanda).
Next.js 16 · React 19 · Tailwind CSS v4 · Motion (Framer Motion) · fontes auto-alojadas (Fontsource).

Tema **escuro/claro** com alternância, mobile-first, animações ao scroll, cardápio
interativo (339 itens) e reservas via **WhatsApp**.

## Correr localmente

```bash
npm run dev
# abrir http://localhost:3000
```

## Build de produção / deploy

```bash
npm run build   # gera o site (totalmente estático, sem dependência de rede)
npm start       # serve a build localmente
```

As páginas são pré-renderizadas como estático — dá para publicar na **Vercel**
(recomendado, `vercel`/import do repositório) ou **Netlify**. Sem APIs nem
servidor: o formulário de reservas abre o WhatsApp do lado do cliente.

## Onde editar o conteúdo

| O quê | Ficheiro |
|---|---|
| Contactos, morada, **horário**, redes, GPS | `app/lib/site.ts` |
| Textos das secções | `app/components/*.tsx` |
| Cardápio (itens, preços) | `app/data/menu.ts` *(gerado)* |
| Imagens e vídeos | `public/media/` |

### Atualizar o cardápio

Os dados vêm do menu online (plataforma QRFY) e estão em `app/data/menu.ts`.
Para regenerar a partir do JSON em bruto guardado em `_data_menu/`:

```bash
node scripts/build-menu.mjs
```

Edições pontuais (corrigir um nome ou preço) podem ser feitas diretamente em
`app/data/menu.ts`.

## Painel de administração (`/admin`)

Painel para editar **cardápio, informações, galeria e reservas**, com login.
Dados em **Firestore**; media (opcional) via **Cloudinary**.

### Configuração (uma vez)

1. **Firebase Console** → criar projeto (ex.: `palace-lounge`).
2. **Adicionar app Web** (`</>`) → copiar o objeto `firebaseConfig`.
3. **Build → Firestore Database** → criar base de dados (localização `eur3`).
   No separador **Regras**, colar o conteúdo de [`firestore.rules`](firestore.rules) e publicar.
4. **Build → Authentication** → ativar **Email/Password** → em *Users*, criar o
   utilizador administrador (email + palavra-passe). É com este que se faz login.
5. Copiar `.env.local.example` para **`.env.local`** e preencher as chaves do Firebase.
   *(Cloudinary é opcional — só para carregar ficheiros na galeria.)*
6. `npm run dev`, abrir **`/admin`**, entrar, e clicar **“Importar dados atuais”**
   para semear o cardápio/informações/galeria atuais na base de dados.

A partir daí, tudo o que editar no painel aparece no site.

### Cloudinary (opcional, para upload de media)

No painel do Cloudinary: *Settings → Upload → Add upload preset* com **Signing Mode:
Unsigned**. Pôr o *cloud name* e o nome do preset em `.env.local`.

## Notas

- **Horário:** os horários em `app/lib/site.ts` são uma estimativa — confirmar e ajustar.
- **Fotografia:** as imagens atuais têm marca de água "@palace_lounge_ao". Fotos
  limpas em alta resolução (sobretudo do espaço/esplanada) elevariam muito o hero,
  a galeria e a secção "Espaços".
- **Fontes** (Cormorant Garamond + Inter) são auto-alojadas via Fontsource, por
  isso o build nunca depende da rede.
