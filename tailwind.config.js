module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#F472B6',
        secondary: '#64748B',
        customGray: '#E2E8F0',
        customWhite: '#F8FAFC',  
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
