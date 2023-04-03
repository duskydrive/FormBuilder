import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    'baseUrl': 'http://localhost:4200',
  },

  env: {
    'backendUrl': 'http://localhost:3000',
    'userCreds': {email: 'test@gmail.com', password: '123123'},
  },

  // chromeWebSecurity: false,
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

  
})