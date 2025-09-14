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
              },
              {
                type: "image",
                name: "heroIcon",
                label: "Icona Hero",
                description: "Icona da mostrare accanto al titolo"
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
              },
              {
                type: "object",
                name: "features",
                label: "Caratteristiche",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Titolo",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descrizione",
                    ui: {
                      component: "textarea"
                    },
                    required: true
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icona",
                    options: [
                      { label: "Trophy", value: "Award" },
                      { label: "Utenti", value: "Users" },
                      { label: "Lampadina", value: "Lightbulb" },
                      { label: "Scudo", value: "Shield" },
                      { label: "Stella", value: "Star" },
                      { label: "Check", value: "Check" },
                      { label: "Grafico", value: "BarChart" }
                    ]
                  }
                ]
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
                type: "rich-text",
                name: "description",
                label: "Descrizione Sezione"
              },
              {
                type: "object",
                name: "services",
                label: "Lista Servizi",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "Nuovo Servizio"
                  })
                },
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
                    ui: {
                      component: "textarea"
                    },
                    required: true
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icona",
                    options: [
                      { label: "Calcolatrice", value: "Calculator" },
                      { label: "Ingranaggi", value: "Settings" },
                      { label: "Grafico", value: "BarChart3" },
                      { label: "Chiave inglese", value: "Wrench" },
                      { label: "Scudo", value: "Shield" },
                      { label: "Sole", value: "Sun" },
                      { label: "Lampadina", value: "Lightbulb" },
                      { label: "Check", value: "Check" }
                    ],
                    required: true
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Caratteristiche",
                    list: true,
                    ui: {
                      component: "list"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "contatti",
            label: "Sezione Contatti",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titolo Sezione",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Sottotitolo",
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
                label: "Telefono",
                description: "Inserisci il numero di telefono con prefisso internazionale (es: +39 123 456 7890)",
                required: true
              },
              {
                type: "string",
                name: "email",
                label: "Email",
                description: "Inserisci l'indirizzo email di contatto",
                required: true
              },
              {
                type: "string",
                name: "workingHours",
                label: "Orari di Lavoro",
                required: true
              },
              {
                type: "string",
                name: "mapUrl",
                label: "URL Mappa Google Maps",
                description: "Incolla l'URL di incorporamento di Google Maps",
                required: true
              },
              {
                type: "string",
                name: "zonesTitle",
                label: "Titolo Zone di Intervento",
                required: true
              },
              {
                type: "string",
                name: "zonesDescription",
                label: "Descrizione Zone di Intervento",
                required: true
              },
              {
                type: "object",
                name: "zonesList",
                label: "Elenco Zone",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.name || "Nuova Zona"
                  })
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nome Zona",
                    required: true
                  }
                ]
              },
              {
                type: "string",
                name: "appointmentTitle",
                label: "Titolo Prenotazione",
                required: true
              },
              {
                type: "string",
                name: "appointmentDescription",
                label: "Descrizione Prenotazione",
                required: true
              },
              {
                type: "string",
                name: "callButtonText",
                label: "Testo Bottone Chiama",
                required: true
              },
              {
                type: "string",
                name: "emailButtonText",
                label: "Testo Bottone Email",
                required: true
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
