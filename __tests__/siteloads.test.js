const timeout = 15000

describe(
  '/ (Main animation page loads with out error)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://ft-staging.framethrower.io')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('AnimationsGet Psyched!')
    })
  },
  timeout
)

describe(
  '/ (About page loads with out error)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://ft-staging.framethrower.io/about')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      console.log(text)
      expect(text).toContain('With Framethrower')
    })
  },
  timeout
)

describe(
  '/ (Getting Started page loads with out error)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://ft-staging.framethrower.io/gettingstarted')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      console.log(text)
      expect(text).toContain('Register and Download the Framethrower Plug In')
    })
  },
  timeout
)

describe(
  '/ (Get Psyched page loads with out error)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://ft-staging.framethrower.io/posts')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).not.toContain('404 - Page not found')
    })
  },
  timeout
)

describe(
  '/ 404 route fails successfully!',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://ft-staging.framethrower.io/gpiadvs')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('404 - Page not found')
    })
  },
  timeout
)
