/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0f5d9b",
        "primary-500": "#1d76bd",
        "primary-400": "#0a528b",
        "primary-200": "#41b2ff",
        secondary: "#fcb900",
        "secondary-500": "#ecd53c",
        "white-700": "#E5F4FF",
        "white-500": "#d0e4f3",
        "white-200": "#E7E7E7",
        disabled: "#7a8a99",
        "disabled-500": "#c3ced9",
        dark: "#022741",
        "dark-500": "#083d62",
      },
      backgroundImage: {
        "bbg-patern": "url('/assets/patern/bbg-pattern-e3.webp')",
        "batik-patern": "url('/assets/patern/ubbg-batik-270.webp')",
        "batik2-patern": "url('/assets/patern/bbg-pattern-f7-40.png')",
        "patern-square": "url('/assets/patern/square.svg')",
        "patern-divider": "url('/assets/patern/divider bottom.svg')",
        pendidikan: "url('/assets/pendidikan.webp')",
        penelitian: "url('/assets/penelitian.webp')",
        pengabdian: "url('/assets/pengabdian.webp')",
        "jurnalisme-warga": "url('/assets/jurnalisme-warga.webp')",
        layanan: "url('/assets/layanan.webp')",
        ppksp: "url('/assets/ppksp.webp')",
      },
      fontFamily: {
        myfont: "Roboto Condensed",
      },
    },
  },
  plugins: [],
};
