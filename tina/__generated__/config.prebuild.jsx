// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "home"
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Sezione Hero",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Nome",
                required: true
              },
              {
                type: "string",
                name: "surname",
                label: "Cognome",
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "Titolo Professionale",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sottotitolo",
                required: true
              },
              {
                type: "rich-text",
                name: "description",
                label: "Descrizione",
                required: true
              },
              {
                type: "string",
                name: "ctaPrimary",
                label: "Testo Bottone Primario",
                required: true
              },
              {
                type: "string",
                name: "ctaSecondary",
                label: "Testo Bottone Secondario",
                required: true
              }
              // {
              //   type: "string",
              //   name: "scrollText",
              //   label: "Testo Scroll",
              //   required: true,
              // },
            ]
          },
          {
            type: "object",
            name: "chiSono",
            label: "Sezione Chi Sono",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titolo",
                required: true
              },
              {
                type: "rich-text",
                name: "description",
                label: "Descrizione",
                required: true
              },
              {
                type: "image",
                name: "image",
                label: "Immagine Profilo"
              }
            ]
          },
          {
            type: "object",
            name: "servizi",
            label: "Sezione Servizi",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titolo",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sottotitolo"
              },
              {
                type: "object",
                name: "services",
                label: "Lista Servizi",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Titolo Servizio",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descrizione",
                    required: true
                  },
                  {
                    type: "image",
                    name: "icon",
                    label: "Icona/Immagine"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "gallery",
            label: "Sezione Gallery",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titolo",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Sottotitolo"
              },
              {
                type: "object",
                name: "projects",
                label: "Progetti",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Titolo Progetto",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descrizione"
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Immagine",
                    required: true
                  },
                  {
                    type: "string",
                    name: "location",
                    label: "Luogo"
                  },
                  {
                    type: "string",
                    name: "year",
                    label: "Anno"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "doveSono",
            label: "Sezione Dove Sono",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titolo",
                required: true
              },
              {
                type: "string",
                name: "address",
                label: "Indirizzo",
                required: true
              },
              {
                type: "string",
                name: "phone",
                label: "Telefono"
              },
              {
                type: "string",
                name: "email",
                label: "Email"
              },
              {
                type: "string",
                name: "description",
                label: "Descrizione"
              }
            ]
          }
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tag",
            list: true,
            ui: {
              component: "tags"
            }
          },
          {
            type: "datetime",
            name: "date",
            label: "Data Pubblicazione",
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Riassunto",
            description: "Breve descrizione dell'articolo (max 200 caratteri)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "coverImage",
            label: "Immagine di Copertina",
            description: "Immagine principale dell'articolo (opzionale)"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        }
      }
    ]
  }
});
export {
  config_default as default
};
